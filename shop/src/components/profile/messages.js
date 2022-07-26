import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Messages = () => {
    return (
        <div className='mx-5 md:mx-[25rem] m-auto mb-20 space-y-10'>
            <div className='relative'>
                <h1 className='text-center font-bold'>پیام های من</h1>
                <div className='absolute left-0 top-0'>
                    <Link to='/profile/'>
                        <svg class="h-6 w-6 text-[#cfa278]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="12" x2="14" y2="12" />  <line x1="4" y1="12" x2="8" y2="16" />  <line x1="4" y1="12" x2="8" y2="8" />  <line x1="20" y1="4" x2="20" y2="20" /></svg>
                    </Link>
                </div>
            </div>

            <div>
                <div>
                    <div className='flex justify-between'>
                        <div className='text-zinc-400 text-base'>
                            1401/03/11
                        </div>
                        <div className='w-4 h-4 rounded-full bg-green-500'>
                            <div className='w-4 h-4 rounded-full bg-green-500 animate-ping'></div>
                        </div>
                    </div>
                    <div>
                        سفارش شما با شماره شناسه 69853 تحویل اداره پست گردید
                        <br />
                        کد رهگیری: <span className='font-semibold'>6522656232488784512245</span>
                    </div>
                </div>

                <hr />

                <div>
                    <div className='text-zinc-400 text-base'>
                        1401/03/11
                    </div>
                    <div>
                        سفارش شما ثبت شده و در حال پردازش است
                    </div>
                </div>

                <hr />
            </div>

        </div>
    );
}
 
export default Messages;