import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CartStore from '../../store/cartStore'

const PaymentMethod = () => {
    const [loadState, setLoaded] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalDiscount, setTotalDiscount] = useState(0)
    const [shippingCost, setShippingCost] = useState(15_000)
    const [allProductsData, setAllProductsData] = useState([])
    
    const allProductsDataRef = useRef([])

    const [cartItems, cartActions] = CartStore()

    useEffect(() => {
        fetchData()
    }, []);
    
    useEffect(() => {
        calculatePrice()
        setLoaded(true)
    }, [cartItems, allProductsData]);

    const fetchData = async () => {
        await axios.get('/api/productView/')
            .then(res => {
                setAllProductsData(res.data)
                allProductsDataRef.current = res.data
            })
            .catch(err => {
                log(err.response)
            })
    }

    const calculatePrice = ()  => {
        let totalPrice = 0
        let totalDiscount = 0
        
        allProductsDataRef.current.length &&
        cartItems.items.map((product) => {
            const productData = allProductsDataRef.current.find((each) => each.id === product.id)
            const itemPrice = product.count * productData.price
            const itemDiscount = product.count * ((productData.price * productData.discount) / 100)
            
            totalPrice += itemPrice
            totalDiscount += itemDiscount
            
            return itemPrice - itemDiscount
        })

        setTotalPrice(totalPrice)
        setTotalDiscount(totalDiscount)
    }

    return (
        <div className='mx-5 md:mx-[25rem] m-auto mb-20 space-y-10'>
            <div className='relative'>
                <h1 className='text-center font-bold'>روش پرداخت</h1>
                <div className='absolute top-0 left-0'>
                    <Link to='/shop/cart/'>
                        <svg class="h-6 w-6 text-[#cfa278]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="12" x2="14" y2="12" />  <line x1="4" y1="12" x2="8" y2="16" />  <line x1="4" y1="12" x2="8" y2="8" />  <line x1="20" y1="4" x2="20" y2="20" /></svg>
                    </Link>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-6'>
                {/* <div className='px-2 py-5 shadow-primary rounded-lg flex justify-center text-center items-center'>درگاه پرداخت بانک سامان</div> */}
                <div className='px-2 py-5 shadow-light rounded-lg flex justify-center text-center items-center'>زرین پال</div>
                {/* <div className='px-2 py-5 shadow-light rounded-lg flex justify-center text-center items-center'>پرداخت درب منزل</div> */}
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
                    <div className='text-zinc-400'>تخفیف کالا ها</div>
                    <div className='font-semibold text-red-400'>{totalDiscount} تومان</div>
                </div>
                <div className='flex justify-between'>
                    <div className='text-zinc-400'>قیمت کالا ها</div>
                    <div className='font-semibold'>{totalPrice} تومان</div>
                </div>
                
                <hr />

                <div className='flex justify-between'>
                    <div className='text-zinc-400'>هزینه ارسال</div>
                    <div className='font-semibold'>{shippingCost} تومان</div>
                </div>

                <div className='flex justify-between'>
                    <div className='text-zinc-400'>مبلغ قابل پرداخت</div>
                    <div className='font-semibold'>{(totalPrice - totalDiscount) + shippingCost} تومان</div>
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