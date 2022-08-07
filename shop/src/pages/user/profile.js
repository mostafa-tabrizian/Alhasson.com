import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";
import { Link, useLocation } from 'react-router-dom'
import { message } from 'antd'
import { useCookies } from "react-cookie";
import axios from 'axios'
import { useGoogleLogout } from 'react-google-login'

import { log } from '../../../../frontend/src/components/base'
import LoadingScreen from '../../../../frontend/src/components/loadingScreen'
import UserStore from '../../store/userStore';

const Profile = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const [cookies, setCookie, removeCookie] = useCookies(['USER_ACCESS_TOKEN', 'USER_REFRESH_TOKEN']);
    
    const [userProfile, userActions] = UserStore()

    const location = useLocation()

    useEffect(() => {
        getUserDetail()
        setLoading(false)
    }, [location, userProfile])

    const getUserDetail = async () => {
        if (userProfile.userDetail) {
            setUser(userProfile.userDetail)
        } else {
            window.location.href = '/shop/login/'
        }
    }

    const { signOut } = useGoogleLogout({
        clientId: process.env.GOOGLE_LOGIN_CLIENT,
        onLogoutSuccess: () => {log('google 1')},
        onFailure: () => {log('google 2')},
    })

    const handleLogout = async () => {
        message.loading('در حال خارج شدن ...')

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

    return (
        <React.Fragment>

            <Helmet>
                <title>الحسون | پروفایل</title>
                <link rel='canonical' to={`https://www.quizzland.net/profile/${user?.username}`} />
            </Helmet>

            <LoadingScreen loading={loading} />
            
            <div className='mx-4 space-y-10 md:mx-auto md:w-4/5'>
                <div className='relative'>
                    <h1 className='font-bold text-center'>پروفایل</h1>
                    <div className='absolute top-0 left-0'>
                        <Link to='/shop/'>
                            <svg class="h-6 w-6 text-[#cfa278]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="12" x2="14" y2="12" />  <line x1="4" y1="12" x2="8" y2="16" />  <line x1="4" y1="12" x2="8" y2="8" />  <line x1="20" y1="4" x2="20" y2="20" /></svg>
                        </Link>
                    </div>
                </div>
                <div className={`space-y-5 py-8 px-4 mb-20`}>
                    <div>
                        <div className="mb-5 text-center">
                            <h2>{user?.first_name }&nbsp;{user?.last_name}</h2>
                            <h5>{user?.phone_number}</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className='flex flex-col space-y-3 text-center'>
                        <li><Link to='/shop/profile/setting/'>اطلاعات حساب کاربری</Link></li>
                        <li><Link to='/shop/profile/orders/'>سفارش ها</Link></li>
                        <li><button onClick={handleLogout}>خروج</button></li>
                    </ul>
                </div>
                {/* <div className='space-y-5 py-8 px-4 shadow-[0_1px_10px_#690D11] border-4 bg-[#0e0202d4] border-[#690D11] rounded-lg'>
                    <div className="flex justify-between">
                        <h2>کوییز های منتشرشده</h2>
                        <Link aria-label="کوییز های منتشرشده" to={`/post/${user?.uesrname}`}>
                            ⬅
                        </Link>
                    </div>
                </div> */}
                {/* <div className='space-y-5 py-8 px-4 shadow-[0_1px_10px_#690D11] border-4 bg-[#0e0202d4] border-[#690D11] rounded-lg'>
                    <div className="flex justify-between">
                        <h2>جوایز</h2>
                        <Link aria-label="دیدن تمام جوایز" to={`/trophies/${user?.uesrname}`}>
                            ⬅
                        </Link>
                    </div>
                </div> */}
            </div>

        </React.Fragment>
    );
}
 
export default Profile;