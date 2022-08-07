
import React, { useState, useEffect, useRef, useCallback } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import debounce from 'lodash.debounce'
import { useCookies } from "react-cookie";

import CartStore from '../../store/cartStore'
import { log } from '../../../../frontend/src/components/base'
import LoadingScreen from '../../../../frontend/src/components/loadingScreen'
import axiosInstance from '../../components/axiosApi'
import { message } from 'antd'
import UserStore from '../../store/userStore';

const Payment = () => {
    const [loading, setLoading] = useState(true)
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalDiscount, setTotalDiscount] = useState(0)
    const [couponDiscount, setCouponDiscount] = useState(0)
    const [shippingCost, setShippingCost] = useState(15_000)
    const [allProductsData, setAllProductsData] = useState([])
    
    const [cookies, setCookie, removeCookie] = useCookies(['USER_ACCESS_TOKEN', 'USER_REFRESH_TOKEN']);
    
    const allProductsDataRef = useRef([])
    const couponCodeRef = useRef(null)

    const [cartItems, cartActions] = CartStore()
    const [userProfile, userActions] = UserStore()

    useEffect(() => {
        setLoading(true)
        fetchData()
        setLoading(false)
    }, []);

    useEffect(() => {
        ifNotLoggedInRedirectToLoginPage()
    }, [userProfile])
    
    useEffect(() => {
        calculatePrice()
    }, [cartItems, allProductsData]);

    const ifNotLoggedInRedirectToLoginPage = async () => {
        if (!userProfile.userDetail) {
            window.location.href = '/shop/login/'
        }
    }

    const fetchData = async () => {
        const now = new Date().getTime()

        await axios.get(`/api/productView/?timestamp=${now}`)
            .then(res => {
                setAllProductsData(res.data)
                allProductsDataRef.current = res.data
            })
            .catch(err => {
                log(err.response)
            })
    }

    const completeOrder = async () => {
        const payload = {
            userAccessToken: cookies.USER_ACCESS_TOKEN,
            purchased_items: cartItems.items,
            price: totalPrice,
            discount: totalDiscount,
        }

        await axiosInstance.post('/shop/api/order/submit', payload)
            .then(res => {
                if (res.data = "order completed successfully") {
                    setLoading(true)
                    message.success('خرید شما با موفقیت ثبت شد')
                    setTimeout(() => {
                        cartActions.resetCart()
                        window.location.reload()
                        // redirect to order info in history
                    }, 1000);
                    // send us a message for noticing the order
                } else {
                    log('its res')
                    log(res)
                    message.error('خطایی رخ داده است. لطفا بعدا تلاش کنید.')
                }
            })
            .catch(err => {
                message.error('خطایی رخ داده است. لطفا بعدا تلاش کنید.')
                log(err)
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

    const checkCouponCode = useCallback(
        debounce(
            async () => {
                const couponCode =  couponCodeRef.current.value
        
                const payload = {
                    code: couponCode,
                }
        
                await axiosInstance.post('/shop/api/coupon', payload)
                    .then(res => {
                        if (res.data == 'کد تخفیف وجود ندارد') {
                            message.error('کد تخفیف وجود ندارد')
                        } else {
                            const discountAmount = res.data
                            setCouponDiscount(((totalPrice - totalDiscount) * discountAmount) / 100)
                        }
                    })
            }
        )
    )

    return (
        <React.Fragment>
            <LoadingScreen loading={loading} />

            <div className='mx-5 md:mx-[25rem] m-auto pb-20 space-y-10'>
                <div className='relative'>
                    <h1 className='font-bold text-center'>روش پرداخت</h1>
                    <div className='absolute top-0 left-0'>
                        <Link to='/shop/checkout/cart/'>
                            <svg class="h-6 w-6 text-[#cfa278]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="12" x2="14" y2="12" />  <line x1="4" y1="12" x2="8" y2="16" />  <line x1="4" y1="12" x2="8" y2="8" />  <line x1="20" y1="4" x2="20" y2="20" /></svg>
                        </Link>
                    </div>
                </div>

                <div className='flex justify-center'>
                    {/* <div className='flex items-center justify-center px-2 py-5 text-center rounded-lg shadow-primary'>درگاه پرداخت بانک سامان</div> */}
                    {/* <div className='flex items-center justify-center px-3 py-4 text-center rounded-lg shadow-light'>زرین پال</div> */}
                    {/* <div className='flex items-center justify-center px-3 py-4 text-center rounded-lg shadow-light'>پرداخت درب منزل</div> */}
                    <div className='flex items-center justify-center px-3 py-4 text-center rounded-lg shadow-light'>در حال حاضر درگاه پرداخت آنلاین غیرفعال می‌باشد، پرداخت از درب منزل انجام می‌گردد</div>
                </div>

                <hr />

                <div className='flex justify-between'>
                    <div>کد تخفیف</div>
                    <div className='flex'>
                        <input type="text" ref={couponCodeRef}  className='pl-3 ml-3 text-black border rounded-lg ltr' />
                        <button onClick={checkCouponCode}>
                            <svg class="h-6 w-6 text-[#cfa278]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                        </button>
                    </div>
                </div>

                <hr />

                <div className='space-y-5'>
                    <div className='flex justify-between'>
                        <div className='text-zinc-400'>تخفیف کالا ها</div>
                        <div className='font-semibold text-red-400'>{totalDiscount + couponDiscount} تومان</div>
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
                        <div className='font-semibold'>{(totalPrice - (totalDiscount + couponDiscount)) + shippingCost} تومان</div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <button onClick={completeOrder} className='bg-[#cfa278] w-full py-2 rounded-xl font-semibold'>
                        {/* پرداخت */}
                        ثبت نهایی سفارش
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Payment;