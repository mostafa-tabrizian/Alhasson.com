import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { log, takeParameterFromUrl } from '../../../../frontend/src/components/base'
import { priceWithDiscount, currencyFormat } from '../../components/base'
import CartStore from '../../store/cartStore'
import LoadingScreen from '../../../../frontend/src/components/loadingScreen'

const Product = () => {
    const [cartItems, cartActions] = CartStore()
    const [productDetail, setProductDetail] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchProductDetail()
    }, []);
    
    const fetchProductDetail = async () => {
        const now = new Date().getTime()
        const productId = takeParameterFromUrl('id')

        await axios.get(`/api/productView/?id=${productId}&timestamp=${now}`)
            .then(res => {
                setProductDetail(res.data[0])
                addViews(productId)
                setLoading(false)
            })
            .catch(err => {
                log(err.response)
            })
    }

    const addViews = (productId) => {
        const locationBeforeAddingView = window.location.href
        setTimeout(async () => {
            const locationWhileAddingView = window.location.href
            if (locationBeforeAddingView == locationWhileAddingView) {
                await axios.patch('/shop/api/product/views', {productId: productId})
                    .then(res => {
                        log(res)
                    })
                    .catch(err => {
                        log(err.response)
                    })
            }
        }, 5000);
    }

    return (
        <div className='mx-5 md:mx-[25rem] m-auto pb-20 space-y-10 relative'>
            <LoadingScreen loading={loading} />

            <div className="md:grid md:grid-cols-2 md:space-x-10 md:space-x-reverse">
                <div className='flex justify-center mb-10 w-[90vw] md:w-auto h-full'>
                    <LazyLoadImage
                        src={productDetail?.image}
                        alt={`${productDetail?.slug}-${productDetail?.title}`}
                        className='rounded-md'
                        effect="blur"
                    />
                </div>

                <div>
                    <div>
                        <div className='flex justify-between md:block'>
                            <h1 className='font-semibold'>{productDetail?.title}</h1>
                            <div className='flex space-x-3 space-x-reverse font-semibold '>
                                <div>
                                    <span
                                        className={`
                                        flex text-left font-semibold
                                            text-[1rem] md:w-52 md:text-base
                                        `}
                                    >
                                        {currencyFormat(priceWithDiscount(productDetail?.price, productDetail?.discount))}   تومان
                                    </span>
                                    {
                                        productDetail?.discount !== 0 &&
                                        <s className={`
                                            flex justify-start font-semibold
                                            text-[.9rem] text-gray-400 decoration-slice
                                            `}>
                                            {currencyFormat(productDetail?.price)}
                                            {/* before discount */}
                                        </s>
                                    }
                                </div>
                                <div>
                                    {
                                        productDetail?.discount !== 0 &&
                                        <span
                                            className={`
                                                flex text-left font-semibold bg-red-600 rounded-full px-2 text-white
                                                text-[.9rem] md:text-base items-center w-fit md:w-auto
                                            `}
                                        >
                                            {productDetail?.discount}%
                                        </span>
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
                            <div className={`${productDetail?.available_count ? 'bg-[#cfa278]':'bg-gray-500'} text-center rounded-3xl mx-2 my-5 px-7 md:px-3 py-3`}>
                                {
                                    productDetail?.available_count ?
                                    <div className='flex items-center justify-between'>
                                        <div onClick={() => !cartItems.items.find(item => productDetail?.id == item.id)?.count && cartActions.addOrIncreaseItem(productDetail)} className='mr-2 font-semibold text-black'><span>افزودن به سبد خرید</span></div>
                                        <div className='flex space-x-3 space-x-reverse text-xl'>
                                            <button onClick={() => cartActions.addOrIncreaseItem(productDetail)}>
                                                <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                                            </button>
                                            <span className='text-black'>{cartItems.items.find(item => productDetail?.id == item.id)?.count}</span>
                                            {
                                                cartItems.items.find(item => productDetail?.id == item.id)?.count &&
                                                <button onClick={() => cartActions.removeOrDecreaseItem(productDetail)}>
                                                    <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>    
                                                </button>
                                            }
                                        </div>
                                        {/* <svg class="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg> */}
                                    </div>
                                    :
                                    <div>ناموجود</div>
                                }
                            </div>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Product;