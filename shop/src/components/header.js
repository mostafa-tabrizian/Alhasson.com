import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gapi } from 'gapi-script'
import { useGoogleLogout } from 'react-google-login'
import { useCookies } from "react-cookie";
import { message } from 'antd'

import userProfileDetail from './user/userProfileDetail'
import { log } from '../../../frontend/src/components/base'

const Header = () => {
    const [profileSubMenu, setProfileSubMenu] = useState(false)
    const [userProfile, setUserProfile] = useState(null)

    const [cookies, setCookie, removeCookie] = useCookies(['USER_ACCESS_TOKEN', 'USER_REFRESH_TOKEN']);

    const { signOut } = useGoogleLogout({
        clientId: process.env.GOOGLE_LOGIN_CLIENT,
        onLogoutSuccess: () => {log('google 1')},
        onFailure: () => {log('google 2')},
    })

    useEffect(() => {
        gapiLoad()
        getUserData()
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

    const getUserData = async () => {
        const userProfileDetailData = await userProfileDetail()
        if (userProfileDetailData !== undefined) {
            if (userProfileDetailData == 'inactive') {
                handleLogout()
            } else {
                setUserProfile(userProfileDetailData)
            }
        }
    }

    const handleLogout = async () => {
        message.loading('در حال خارج شدن ...')
        
        try {
            signOut()
        }
        catch (e) {
            log('signOut google error')
            log(e)
        }
        
        try {
            
            await axiosInstance.post('/api/blacklist/', {
                "refresh_token": cookies.USER_REFRESH_TOKEN,
            });
            
            removeCookie('USER_ACCESS_TOKEN')
            removeCookie('USER_ACCESS_TOKEN', {path: '/'})
            removeCookie('USER_REFRESH_TOKEN', {path: '/'})
            
            axiosInstance.defaults.headers['Authorization'] = null;
            window.location.reload()
        }
        catch (e) {
            console.log(e);
        }
    };

    return (
        <header className='h-[7rem] '>
            <div className="fixed justify-between flex bg-[#0d0735] pt-8 pb-4 pr-4 pl-[100%] z-10">
                <div className='items-center hidden space-x-10 space-x-reverse md:flex'>
                    <img className='w-12' src="/static/img/inTheNameOfGod.png" alt="الدکتور-الشیخ-علاء-الحسّون" />
                    <a href="/">
                        الصفحة الرئیسیة
                    </a>
                </div>
                <div className='flex items-center'>
                    <svg className="absolute w-6 h-6 mr-2 text-blue-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
                    <input type="text" className='rounded-lg text-blue-900 pr-12 py-1 w-[16rem]' placeholder="جستجو کردن..." onKeyDown={(e) => {
                        if (e.key == 'Enter') {
                            document.location.href = `/shop/search/?q=${e.target.value}`
                        }
                    }}/>
                </div>
            </div>

        </header>
    );
}

export default Header;