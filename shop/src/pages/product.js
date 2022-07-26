import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { log, takeParameterFromUrl } from '../../../frontend/src/components/base'
import CartStore from '../store/cartStore'

const Product = () => {
    const [productDetail, setProductDetail] = useState()

    const [cartItems, cartActions] = CartStore()

    const fetchProductDetail = () => {
        axios.get(`/api/productView/?slug=${takeParameterFromUrl('slug')}`)
            .then(res => {
                setProductDetail(res.data[0])
            })
            .catch(err => {
                log(err.response)
            })
    }

    useEffect(() => {
        fetchProductDetail()
    }, []);

    return (
        <div className='mx-5 md:mx-[25rem] m-auto mb-20 space-y-10 relative'>
            <div className=''>
                <Link to='/shop/'>
                    <svg class="h-6 w-6 text-[#cfa278] mr-auto" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="4" y1="12" x2="14" y2="12" />  <line x1="4" y1="12" x2="8" y2="16" />  <line x1="4" y1="12" x2="8" y2="8" />  <line x1="20" y1="4" x2="20" y2="20" /></svg>
                </Link>
            </div>

            <div>
                <div className='flex justify-center mb-10 w-[90vw] h-full'>
                    <img src={productDetail?.image} alt={`${productDetail?.slug}-${productDetail?.title}`} />
                </div>

                <div>
                    <div className='flex justify-between'>
                        <h1 className='font-semibold'>{productDetail?.title}</h1>
                        <div className='font-semibold'><span className='text-xl'>{productDetail?.price} تومان</span></div>
                    </div>

                    <hr />

                    <div>
                        <h2 className='mb-5'>مشخصات فنی</h2>
                        <div className='space-y-3'>
                            <div className='flex justify-between'>
                                <div className='text-zinc-400'>وزن</div>
                                <div>{productDetail?.weight} گرم</div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div>
                    <h2 className='mb-5'>معرفی اجمالی</h2>
                    <div dangerouslySetInnerHTML={{ __html: productDetail?.description }}></div>
                </div>

                <div className='w-full'>
                {/* onClick={() => cartActions.addOrIncreaseItem(productDetail)} */}
                    <button  className='w-full'>
                        <div className='bg-[#cfa278] justify-between rounded-3xl mx-2 my-5 flex px-7 py-3'>
                            <div className='font-semibold text-black'><span>افزودن به سبد خرید</span></div>
                                <div className='space-x-3 space-x-reverse text-xl '>
                                {
                                    cartItems.items.find(item => productDetail?.id == item.id)?.count ?
                                    <React.Fragment>
                                        <button onClick={() => cartActions.removeOrDecreaseItem(productDetail)}>-</button>
                                        <span>{cartItems.items.find(item => productDetail?.id == item.id)?.count}</span>
                                    </React.Fragment>
                                    :
                                    ''
                                }
                                <button onClick={() => cartActions.addOrIncreaseItem(productDetail)}>+</button>
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