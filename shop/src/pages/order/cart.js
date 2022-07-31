import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CartStore from '../../store/cartStore'
import ProductCart from '../../components/order/productCart'
import { log } from '../../../../frontend/src/components/base'
import UserProfileDetail from '../../components/user/userProfileDetail'

const Cart = () => {
    const [loadState, setLoaded] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalDiscount, setTotalDiscount] = useState(0)
    const [allProductsData, setAllProductsData] = useState([])
    
    const allProductsDataRef = useRef([])
    
    const [cartItems, cartActions] = CartStore()

    useEffect(() => {
        fetchData()
    }, [cartItems.length]);
    
    useEffect(() => {
        setLoaded(false)
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
                <h1 className='font-bold text-center'>سبد خرید</h1>
                <div className='absolute top-0 left-0'>
                    <Link to='/shop/'>
                        <svg class="h-6 w-6 text-[#cfa278]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="12" x2="14" y2="12" />  <line x1="4" y1="12" x2="8" y2="16" />  <line x1="4" y1="12" x2="8" y2="8" />  <line x1="20" y1="4" x2="20" y2="20" /></svg>
                    </Link>
                </div>
            </div>

            <div className='border border-[#cfa278] rounded-lg px-3 py-2 text-center'>
                شما {cartItems.items.length} کتاب در سبد خود دارید.
            </div>

            <div className='space-y-4'>
                <ProductCart allProducts={allProductsData} />
            </div>

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
                    <div className='text-zinc-400'>جمع کل</div>
                    <div className='font-semibold'>{totalPrice - totalDiscount} تومان</div>
                </div>
            </div>

            <div className='flex justify-center bg-[#cfa278] w-full py-2 rounded-xl font-semibold'>
                {/* {
                    UserProfileDetail?.username? */}
                    <Link to='/shop/payment-method/'>
                        ادامه فرایند خرید
                    </Link>
                    {/* :
                    <Link to='/shop/login'>
                        ادامه فرایند خرید
                    </Link> */}
                {/* } */}
            </div>
        </div>
    );
}
 
export default Cart;