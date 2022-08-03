import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { log, takeParameterFromUrl, priceWithDiscount } from '../../../../frontend/src/components/base'
import CartStore from '../../store/cartStore'
import LoadingScreen from '../../../../frontend/src/components/loadingScreen'

const Product = () => {
    const [cartItems, cartActions] = CartStore()
    const [productDetail, setProductDetail] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchProductDetail()
    }, []);
    
    const fetchProductDetail = () => {
        axios.get(`/api/productView/?slug=${takeParameterFromUrl('slug')}`)
            .then(res => {
                setProductDetail(res.data[0])
                setLoading(false)
            })
            .catch(err => {
                log(err.response)
            })
    }

    return (
        <div className='mx-5 md:mx-[25rem] m-auto pb-20 space-y-10 relative'>
            <LoadingScreen loading={loading} />

            <div>
                <div className='flex justify-center mb-10 w-[90vw] h-full'>
                    <img
                        src={productDetail?.image}
                        alt={`${productDetail?.slug}-${productDetail?.title}`}
                        className='rounded-md'
                    />
                </div>

                <div>
                    <div className='flex justify-between'>
                        <h1 className='font-semibold'>{productDetail?.title}</h1>
                        <div className='flex space-x-3 space-x-reverse font-semibold '>
                            <div>
                                {
                                    productDetail?.discount !== 0 &&
                                    <span
                                        className={`
                                            flex text-left font-semibold bg-red-600 rounded-full px-2 text-white
                                            text-[.9rem] md:w-52 md:text-base items-center w-fit
                                        `}
                                    >
                                        {productDetail?.discount}%
                                    </span>
                                }
                            </div>
                            <div>
                                <span
                                    className={`
                                        flex text-left font-semibold
                                        text-[1rem] md:w-52 md:text-base
                                    `}
                                >
                                    {priceWithDiscount(productDetail?.price, productDetail?.discount)}   تومان
                                </span>
                                {
                                    productDetail?.discount !== 0 &&
                                    <s className={`
                                        flex justify-start font-semibold
                                        text-[.9rem] text-gray-400 decoration-slice
                                    `}>
                                        {productDetail?.price}
                                        {/* before discount */}
                                    </s>
                                }
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <h2 className='mb-5'>مشخصات فنی</h2>
                        <div className='space-y-3'>
                            <div className='flex justify-between'>
                                <div className='text-zinc-400'>وزن</div>
                                <div>{productDetail?.weight} گرم</div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='text-zinc-400'>تعداد صفحات</div>
                                <div>{productDetail?.pages} صفحه</div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div>
                    <h2 className='mb-5'>درباره کتاب</h2>
                    <div dangerouslySetInnerHTML={{ __html: productDetail?.description }}></div>
                </div>

                <div className='w-full'>
                    <button  className='w-full'>
                        <div className='bg-[#cfa278] justify-between rounded-3xl mx-2 my-5 flex px-7 py-3'>
                            <div className='font-semibold text-black'><span>افزودن به سبد خرید</span></div>
                                <div className='space-x-3 space-x-reverse text-xl flex'>
                                    <button onClick={() => cartActions.addOrIncreaseItem(productDetail)}><svg class="h-5 w-5 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg></button>
                                    <span>{cartItems.items.find(item => productDetail?.id == item.id)?.count}</span>
                                    {
                                        cartItems.items.find(item => productDetail?.id == item.id)?.count &&
                                        <button onClick={() => cartActions.removeOrDecreaseItem(productDetail)}><svg class="h-5 w-5 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" /></svg></button>
                                    }
                                </div>
                            <svg class="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                        </div>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Product;