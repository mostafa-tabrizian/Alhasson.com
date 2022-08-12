import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Helmet } from "react-helmet";
import { useCookies } from "react-cookie";
import debounce from 'lodash.debounce'
import { message } from 'antd';
import ReCAPTCHA from 'react-google-recaptcha'
import { Link } from 'react-router-dom'

import axiosInstance from '../../components/axiosApi';
import { log } from '../../../../frontend/src/components/base'
import LoadingScreen from '../../../../frontend/src/components/loadingScreen'
import userStore from '../../store/userStore';

const ProfileEdit = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const reCaptchaResponse = useRef(null)
    const usernameRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const addressRef  = useRef()
    const postalCodeRef = useRef()
    const phoneNumberRef = useRef()

    const [userProfile, userActions] = userStore()

    const [cookies] = useCookies(['USER_ACCESS_TOKEN']);

    useEffect(() => {
        setLoading(false)
    }, [])

    useEffect(() => {
        if (userProfile.userDetail) {
            setUser(userProfile.userDetail)
        } else if (userProfile.userDetail == false) {
            window.location.href = '/shop/login/'
        }
    }, [userProfile]);

    const checkIfLoggedIn_setUser = async () => {
        const userProfile = await userProfileDetail()

        if (userProfile == null) {
            window.location.href = '/shop/login/'
        }

        if (userProfileDetailData == 'inactive') {
            message.error('اکانت شما غیرفعال شده است. لطفا با پشتیبانی تماس بگیرید.')
        } else {
            setUser(userProfile)
        }
        
    }

    const checkRecaptcha = async () => {
        if (reCaptchaResponse.current !== null) {
            return await axiosInstance.get(`/shop/api/recaptcha?r=${reCaptchaResponse.current}`,)
                .then(res => {
                    return res.data
                })
                .catch(err => {
                    log(err.response)
                })
        } else {
            message.warning('لطفا تایید کنید که ربات نیستید!')
            return false 
        }
    }

    const saveSetting = async () => {
        if (!(usernameRef.current.value)?.length &&
            !(firstNameRef.current.value)?.length &&
            !(lastNameRef.current.value)?.length &&
            !(addressRef.current.value)?.length &&
            !(postalCodeRef.current.value)?.length &&
            !(phoneNumberRef.current.value)?.length) {
            return message.warning('برای ذخیره، حداقل یک ورودی را تغییر دهید.')
        }

        setLoading(true)
        debouncePatchUserSetting()
    }
    
    const debouncePatchUserSetting = useCallback(
        debounce(
            async () => {
                // if (await checkRecaptcha()) {
                    const payload = {
                        access_token: cookies.USER_ACCESS_TOKEN,
                        username: usernameRef.current.value,
                        first_name: firstNameRef.current.value,
                        last_name: lastNameRef.current.value,
                        address: addressRef.current.value,
                        postal_code: postalCodeRef.current.value,
                        phone_number: phoneNumberRef.current.value,
                    }
                    
                    await axiosInstance.patch(`/shop/api/user/update`, payload)
                        .then(res => {
                            if (res.data == 'success') {
                                message.success('اطلاعات شما با موفقیت تغییر یافت.')
                                setTimeout(() => {
                                    window.location.reload()
                                }, 1500)
                            }
                            else if (res.data == 'username already exists') {
                                message.error('نام کاربری دیگری انتخاب کنید')
                                setLoading(false)
                            }
                            else if (res.data == 'username too short') {
                                message.error('نام کاربری می‌بایست بیش از ۳ کارکتر باشد.')
                                setLoading(false)
                            }
                        })
                        .catch(err => {
                            message.error('زمان شما برای ایجاد تغییر منقضی شده است. لطفا پس از ریلود کردن صفحه مجدد تلاش کنید.', 10)
                            setTimeout(() => {
                                window.location.reload()
                            }, 10_000);
                        })
                // }
            }
        , 1000), []
    );

    const allInputsAreFilled = () => {
        return (
            user?.address?.length > 0 &&
            user?.postal_code?.length > 0 &&
            user?.phone_number?.length > 0
        )
    }

    return (
        <React.Fragment>

            <LoadingScreen loading={loading} />

            <Helmet>
                <title>‌الحسون | اطلاعات پروفایل</title>
            </Helmet>

            <div className='h-screen mx-4 md:mx-auto md:w-4/5'>
                <div className='relative'>
                    <div className="relative">
                        <h1 className='font-bold text-center'>اطلاعات پروفایل</h1>
                        <div className='absolute top-0 left-0'>
                            <Link to='/shop/profile/'>
                                <svg class="h-6 w-6 text-[#cfa278]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="12" x2="14" y2="12" />  <line x1="4" y1="12" x2="8" y2="16" />  <line x1="4" y1="12" x2="8" y2="8" />  <line x1="20" y1="4" x2="20" y2="20" /></svg>
                            </Link>
                        </div>
                    </div>
                    {
                        allInputsAreFilled() ?
                        '':<h4 className="text-center">لطفا اطلاعات پروفایل خود را تکمیل کنید ✏️</h4>
                    }
                    <div className='px-2 py-2 space-y-5 rounded'>
                        <div className=''> 
                            <div className=''>
                                <h4>نام کاربری</h4>
                                <input className='bg-transparent border-b placeholder:text-gray-500 border-b-yellow-500' type="text" placeholder={user?.username} ref={usernameRef} />
                            </div>
                        </div>
                        <div className='items-baseline space-y-5 md:grid md:grid-cols-2'>
                            <div>
                                <h4>نام</h4>
                                <input className='bg-transparent border-b placeholder:text-gray-500 border-b-yellow-500' type="text" placeholder={user?.first_name} ref={firstNameRef} />
                            </div>
                            <div>
                                <h4>نام خانوادگی</h4>
                                <input className='bg-transparent border-b placeholder:text-gray-500 border-b-yellow-500' type="text" placeholder={user?.last_name} ref={lastNameRef} />
                            </div>
                        </div>
                        <div>
                            <h4>آدرس</h4>
                            <textarea rows='3' className='bg-transparent border-b placeholder:text-gray-500 border-b-yellow-500' type="text" placeholder={user?.address} ref={addressRef} />
                        </div>
                        <div>
                            <h4>کدپستی</h4>
                            <input className='bg-transparent border-b placeholder:text-gray-500 border-b-yellow-500' type="text" placeholder={user?.postal_code} ref={postalCodeRef} />
                        </div>
                        <div>
                            <h4>شماره تماس</h4>
                            <input className='bg-transparent border-b placeholder:text-gray-500 border-b-yellow-500' type="text" placeholder={user?.phone_number} ref={phoneNumberRef} />
                        </div>

                        <button onClick={saveSetting} className='absolute left-0 px-6 py-2 mt-4 border-2 border-green-600 h-fit rounded-xl'>‌ذخیره</button>

                        {/* <ReCAPTCHA
                            sitekey="6LeeCDchAAAAABN_9QhE42c0NXdyMyg5n-Mysh6Q"
                            theme='dark'
                            onChange={res => reCaptchaResponse.current = res}
                            className=''
                        /> */}
                    </div>               
                </div>
            </div>

        </React.Fragment>
    );
}
 
export default ProfileEdit;