import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const OrderHistory = () => {
    return (
        <div className='mx-5 md:mx-[25rem] m-auto mb-20 space-y-10'>
            <div className='relative'>
                <h1 className='text-center font-bold'>سفارش های من</h1>
                <div className='absolute left-0 top-0'>
                    <Link to='/profile/'>
                        <svg class="h-6 w-6 text-[#cfa278]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="12" x2="14" y2="12" />  <line x1="4" y1="12" x2="8" y2="16" />  <line x1="4" y1="12" x2="8" y2="8" />  <line x1="20" y1="4" x2="20" y2="20" /></svg>
                    </Link>
                </div>
            </div>

            <div className='space-y-4'>
                <div className='bg-zinc-100 px-4 py-2 rounded-lg'>
                <div className='flex justify-between'>
                        <div>کد سفارش: 435217</div>
                        <div>ارسال شده 🚚</div>
                    </div>
                    <div className='flex justify-between text-base text-zinc-400'>
                        <div>1401/05/12</div>
                        <div>153,000 تومان</div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex space-x-3 space-x-reverse mt-5'>
                            <div className='border-l-2 border-gray-300 pl-3 w-16'>
                                <img src="/static/img/productTest.jpg" alt="" />
                            </div>
                            <div className='border-l-2 border-gray-300 pl-3 w-16'>
                                <img src="/static/img/productTest.jpg" alt="" />
                            </div>
                        </div>
                        <div>
                            <svg class="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg>
                        </div>
                    </div>
                </div>

                <div className='bg-zinc-100 px-4 py-2 rounded-lg'>
                    <div className='flex justify-between'>
                        <div>کد سفارش: 435217</div>
                        <div>تحویل داده شده 📦</div>
                    </div>
                    <div className='flex justify-between text-base text-zinc-400'>
                        <div>1401/05/12</div>
                        <div>153,000 تومان</div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex space-x-3 space-x-reverse mt-5'>
                            <div className='border-l-2 border-gray-300 pl-3 w-16'>
                                <img src="/static/img/productTest.jpg" alt="" />
                            </div>
                            <div className='border-l-2 border-gray-300 pl-3 w-16'>
                                <img src="/static/img/productTest.jpg" alt="" />
                            </div>
                        </div>
                        <div>
                            <svg class="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default OrderHistory;