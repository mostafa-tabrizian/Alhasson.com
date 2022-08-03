import React, { useEffect, useState } from "react";
import { message, notification } from 'antd';
import { GoogleLogin, useGoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script'
import { useCookies } from "react-cookie";

import axiosInstance from '../axiosApi';;
import { log, replaceFunction } from '../../../../frontend/src/components/base'
import userProfileDetail from "./userProfileDetail";

const LoginForm = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['USER_ACCESS_TOKEN', 'USER_REFRESH_TOKEN']);

    const { signOut } = useGoogleLogout({
        clientId: process.env.GOOGLE_LOGIN_CLIENT,
        onLogoutSuccess: () => {log('google 1')},
        onFailure: () => {log('google 2')},
    })
    
    useEffect(() => {
        checkIfLoggedIn()
        gapiLoad()
    }, [])

    const gapiLoad = () => {
        const startGapiClient = () => {
            gapi.client.init({
                clientId: process.env.GOOGLE_LOGIN_CLIENT,
                scope: ''
            })
        }

        gapi.load('client:auth2', startGapiClient)
    }

    const logout = async () => {
        try {
            await axios.post('/shop/api/blacklist/', {"refresh_token": cookies.USER_REFRESH_TOKEN,})
                .then(res => {
                    removeCookie('USER_ACCESS_TOKEN', {path: '/'})
                    removeCookie('USER_REFRESH_TOKEN', {path: '/'})
                    
                    axios.defaults.headers['Authorization'] = null;
                    signOut()         
                    window.location.reload()
                })
                .catch(err => {
                    window.location.href = '/shop/'
                })
        }
        catch (e) {
            console.log(e);
        }
    };

    const checkIfLoggedIn = async () => {
        const userProfile = await userProfileDetail()
        
        if (userProfile !== undefined && window.location.pathname == '/shop/login/') {
            window.location.href = '/shop/'
        }
    }

    const showInActiveNotification = () => {
        notification.open({
            message: 'این کاربر مسدود شده است',
            description:
                'برای اطلاعات بیشتر با پشتیبانی الحسون تماس بگیرید quizzland.net@gmail.com',
            duration: 5,
            style: {
                'font-size': '25px',
                'font-weight': '600',
                'box-shadow': '0 0 20px #b52633',
                'direction': 'rtl',
                'padding-right': '4rem',
            },
            className: 'rounded-lg'
        });
    }

    const googleLoginSuccess = async (res) => {
        const userProfile = await userProfileDetail()
        
        if (userProfile == undefined) {
            const accessToken = res.accessToken
            const username = replaceFunction(res.profileObj.name, ' ', '')
            const email = res.profileObj.email
            const lastName = res.profileObj.familyName || ''
            const firstName = res.profileObj.givenName || ''
            const avatar = res.profileObj.imageUrl

            const payload = {
                accessToken: accessToken,
                username: username,
                email: email,
                lastName: lastName,
                firstName: firstName,
                avatar: avatar
            }
            
            accessToken &&
            await axiosInstance.post(`/shop/api/google`, payload)
                .then(res => {
                    if (res.data == 'inactive') {
                        if ((cookies.USER_ACCESS_TOKEN == accessToken || cookies.USER_ACCESS_TOKEN == 'undefined')) {
                            showInActiveNotification()
                            logout()
                        }
                        return 
                    } else {
                        message.loading('در حال ورود ...', 1)
    
                        axiosInstance.defaults.headers['Authorization'] = "JWT " + res.data.access_token;
                        
                        setCookie('USER_ACCESS_TOKEN', res.data.access_token, { path: '/' });
                        setCookie('USER_REFRESH_TOKEN', res.data.refresh_token, { path: '/' });
        
                        window.location.reload()
                        if (window.location.pathname === '/shop/login/') {
                            window.history.go(-1)
                        }    
                    }
                    
                })
                .catch(err => {
                    log('get auth error')
                    log(err)
                    log(err.response)
                })
        }
    }

    const googleLoginFailure = (res) => {
        message.error("ورود/ثبت نام شما به مشکل برخورد. لطفا دوباره تلاش کنید")
        log('fail login, res: ')
        log(res)
    }

    return (
            <GoogleLogin
                clientId="687160730568-s62liqkremb5stf1q3gobiso529n7upv.apps.googleusercontent.com"
                className='ltr'  // w-[90%] flex justify-center
                buttonText="ورود/ثبت نام با حساب گوگل"
                onSuccess={googleLoginSuccess}
                onFailure={googleLoginFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
    );
}

export default LoginForm;