import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const EditProfile = () => {
    return (
        <div className='mx-5 md:mx-[25rem] m-auto mb-20 space-y-10'>
            <div className='relative'>
                <h1 className='text-center font-bold'>ویرایش پروفایل</h1>
                <div className='absolute left-0 top-0'>
                    <Link to='/profile/'>
                        <svg class="h-6 w-6 text-[#cfa278]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="12" x2="14" y2="12" />  <line x1="4" y1="12" x2="8" y2="16" />  <line x1="4" y1="12" x2="8" y2="8" />  <line x1="20" y1="4" x2="20" y2="20" /></svg>
                    </Link>
                </div>
            </div>

            <div className='space-y-10'>
                <div className='flex justify-between'>
                    <div className='text-zinc-400'>نام</div>
                    <input type="text" className='placeholder:text-black border-b' placeholder="مصطفی" />
                </div>
                <div className='flex justify-between'>
                    <div className='text-zinc-400'>نام خانوادگی</div>
                    <input type="text" className='placeholder:text-black border-b' placeholder="تبریزیان" />
                </div>
                <div className='flex justify-between'>
                    <div className='text-zinc-400'>شماره همراه</div>
                    <input type="text" className='placeholder:text-black border-b ltr' placeholder="0912821769" />
                </div>
                <div className='flex justify-between'>
                    <div className='text-zinc-400'>شماره منزل</div>
                    <input type="text" className='placeholder:text-black border-b ltr' placeholder="0253601727" />
                </div>
                <div className='flex justify-between'>
                    <div className='text-zinc-400'>کد ملی</div>
                    <input type="text" className='placeholder:text-black border-b ltr' placeholder="0372273076" />
                </div>
                <div className='flex justify-between'>
                    <div className='text-zinc-400'>ایمیل</div>
                    <input type="text" className='placeholder:text-black border-b ltr w-[20rem]' placeholder="mostafatabrizian12@gmail.com" />
                </div>
                <div className='flex justify-between'>
                    <div className='text-zinc-400'>آدرس منزل</div>
                    <textarea type="text" rows='3' className='placeholder:text-black border-b w-[20rem] ltr' placeholder="قم گلزار روحانی 4 کوچه 8 پلاک 193" />
                </div>
            </div>

            <div className='flex justify-center bg-[#cfa278] w-full py-2 rounded-xl font-semibold'>
                <button>
                    ذخیره تغییرات
                </button>
            </div>

        </div>
    );
}
 
export default EditProfile;