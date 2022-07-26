import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PaymentMethod = () => {
    return (
        <div className='mx-5 md:mx-[25rem] m-auto mb-20 space-y-10'>
            <div className='relative'>
                <h1 className='text-center font-bold'>روش پرداخت</h1>
                <div className='absolute left-0 top-0'>
                    <Link to='/cart'>
                        ⬅
                    </Link>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-6'>
                <div className='px-2 py-5 shadow-primary rounded-lg flex justify-center text-center items-center'>درگاه پرداخت بانک سامان</div>
                <div className='px-2 py-5 shadow-light rounded-lg flex justify-center text-center items-center'>زرین پال</div>
                <div className='px-2 py-5 shadow-light rounded-lg flex justify-center text-center items-center'>پرداخت درب منزل</div>
            </div>

            <hr />

            <div className='flex justify-between'>
                <div>کد تخفیف</div>
                <div>
                    <input type="text"  className='rounded-lg border ml-3' />
                    <button>👾</button>
                </div>
            </div>

            <hr />

            <div className='space-y-5'>
                <div className='flex justify-between'>
                    <div className='text-zinc-400'>جزئیات خرید</div>
                    <div className='font-semibold'>2 کالا</div>
                </div>
                <div className='flex justify-between'>
                    <div className='text-zinc-400'>قیمت کالا ها</div>
                    <div className='font-semibold'>50,000 تومان</div>
                </div>
                <div className='flex justify-between'>
                    <div className='text-zinc-400'>تخفیف کالا ها</div>
                    <div className='font-semibold'>5,000 تومان</div>
                </div>
                <div className='flex justify-between'>
                    <div className='text-zinc-400'>جمع کل</div>
                    <div className='font-semibold'>45,000 تومان</div>
                </div>
                
                <hr />

                <div className='flex justify-between'>
                    <div className='text-zinc-400'>هزینه ارسال</div>
                    <div className='font-semibold'>15,000 تومان</div>
                </div>

                <div className='flex justify-between'>
                    <div className='text-zinc-400'>مبلغ قابل پرداخت</div>
                    <div className='font-semibold'>60,000 تومان</div>
                </div>
            </div>

            <div className='flex justify-center'>
                <button className='bg-[#cfa278] w-full py-2 rounded-xl font-semibold'>
                    پرداخت
                </button>
            </div>

        </div>
    );
}
 
export default PaymentMethod;