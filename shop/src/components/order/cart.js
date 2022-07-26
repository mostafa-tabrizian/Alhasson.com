import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CartStore from '../../store/cartStore'
import ProductCart from './productCart'

const Cart = () => {
    const [allProducts, setProducts] = useState([])
    
    const [cartItems, cartActions] = CartStore()

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        await axios.get('/api/productView/')
            .then(res => {
                setProducts(res.data)
                setLoad(true)
            })
            .catch(err => {
                log(err.response)
            })
    }

    const calculatePrice = (productId, count)  => {
        cartItems.items.map((product) => {
            const productData = allProducts.find((each) => each.id === productId)
            const itemPrice = count * (productData.price - ((productData.price * productData.discount) / 100))
            return itemPrice
        })
    }

    return (
        <div className='mx-5 md:mx-[25rem] m-auto mb-20 space-y-10'>
            <div className='relative'>
                <h1 className='font-bold text-center'>سبد خرید</h1>
                <div className='absolute top-0 left-0'>
                    <Link to='/'>
                        <svg class="h-6 w-6 text-[#cfa278]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="12" x2="14" y2="12" />  <line x1="4" y1="12" x2="8" y2="16" />  <line x1="4" y1="12" x2="8" y2="8" />  <line x1="20" y1="4" x2="20" y2="20" /></svg>
                    </Link>
                </div>
            </div>

            <div className='border border-[#cfa278] rounded-lg px-3 py-2 text-center'>
                شما {cartItems.items.length} کتاب در سبد خود دارید.
            </div>

            <div>
                <ProductCart allProducts={allProducts} />
            </div>

            <div className='space-y-5'>
                <div className='flex justify-between'>
                    <div className='text-zinc-400'>قیمت کالا ها</div>
                    <div className='font-semibold'> تومان</div>
                </div>
                <div className='flex justify-between'>
                    <div className='text-zinc-400'>تخفیف کالا ها</div>
                    <div className='font-semibold'>10,000 تومان</div>
                </div>

                <hr />

                <div className='flex justify-between'>
                    <div className='text-zinc-400'>جمع کل</div>
                    <div className='font-semibold'>40,000 تومان</div>
                </div>
            </div>

            <div className='flex justify-center bg-[#cfa278] w-full py-2 rounded-xl font-semibold'>
                <Link to='/payment-method'>
                    ادامه فرایند خرید
                </Link>
            </div>
        </div>
    );
}
 
export default Cart;