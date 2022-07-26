import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <div className='md:mx-[25rem] m-auto mb-20 space-y-10'>
            <div className='relative mx-5'>
                <h1 className='font-bold text-center'>پروفایل من</h1>
                <div className='absolute top-0 left-0'>
                    <Link to='/'>
                        <svg class="h-6 w-6 text-[#cfa278]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="4" y1="12" x2="14" y2="12" />  <line x1="4" y1="12" x2="8" y2="16" />  <line x1="4" y1="12" x2="8" y2="8" />  <line x1="20" y1="4" x2="20" y2="20" /></svg>
                    </Link>
                </div>
            </div>

            <div className='text-center'>
                <h1 className='font-semibold'>مصطفی تبریزیان</h1>
                <h2 className='text-base text-zinc-400'>09128521769</h2>
            </div>

            <div className='px-4 py-10 space-y-7 bg-zinc-100 min-h-[25rem] rounded-t-2xl'>
                <div>
                    <Link to='/edit-profile/'>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <svg class="h-7 w-7 text-[#cfa278]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
                                <div className='mr-3'>ویرایش پروفایل</div>
                            </div>
                            <div>
                                <svg class="h-6 w-6 text-[#cfa278]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="4" y1="12" x2="14" y2="12" />  <line x1="4" y1="12" x2="8" y2="16" />  <line x1="4" y1="12" x2="8" y2="8" />  <line x1="20" y1="4" x2="20" y2="20" /></svg>
                            </div>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to='/order-history/'>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <svg class="h-7 w-7 text-[#cfa278]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="4" width="6" height="5" rx="2" />  <rect x="4" y="13" width="6" height="7" rx="2" />  <rect x="14" y="4" width="6" height="7" rx="2" />  <rect x="14" y="15" width="6" height="5" rx="2" /></svg>
                                <div className='mr-3'>سفارش های من</div>
                            </div>
                            <div>
                                <svg class="h-6 w-6 text-[#cfa278]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="4" y1="12" x2="14" y2="12" />  <line x1="4" y1="12" x2="8" y2="16" />  <line x1="4" y1="12" x2="8" y2="8" />  <line x1="20" y1="4" x2="20" y2="20" /></svg>
                            </div>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to='/messages/'>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <svg class="h-7 w-7 text-[#cfa278]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <div className='mr-3'>پیام های من</div>
                            </div>
                            <div>
                                <svg class="h-6 w-6 text-[#cfa278]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="4" y1="12" x2="14" y2="12" />  <line x1="4" y1="12" x2="8" y2="16" />  <line x1="4" y1="12" x2="8" y2="8" />  <line x1="20" y1="4" x2="20" y2="20" /></svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Profile;