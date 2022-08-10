import { useState, useEffect, useCallback} from 'react'
import debounce from 'lodash.debounce'
import { Link } from 'react-router-dom'
import { useCookies } from "react-cookie";
import persianDate from 'persian-date'
persianDate.toLocale('fa');

import axiosInstance from '../../components/axiosApi'
import LoadingScreen from '../../../../frontend/src/components/loadingScreen'
import { log } from '../../../../frontend/src/components/base'

const Orders = () => {
    const [loading, setLoading] = useState(true)
    const [userOrders, setUserOrders] = useState([])

    const [cookies] = useCookies(['USER_ACCESS_TOKEN']);

    useEffect(() => {
        fetchUserOrders()
    }, []);

    const fetchUserOrders = useCallback(
        debounce(
            async () => {
                if (cookies.USER_ACCESS_TOKEN) {
                    const payload = {
                        userAccessToken: cookies.USER_ACCESS_TOKEN
                    }
    
                    const now = new Date().getTime()
    
                    await axiosInstance.post(`/shop/api/user/orders?timestamp=${now}`, payload)
                        .then(res => {
                            setUserOrders(res.data)
                            setLoading(false)
                        })
                        .catch(err => {
                            log(err)
                            log(err.response)
                        })
                } else {
                    window.location.href = '/shop/login/'
                }
            }
        )
    )

    const purchasedItems = (order) => {
        const purchasedToObj = JSON.parse(order.purchased)
        let finalView = ''
        
        Object.keys(purchasedToObj).forEach((title, index) => {
            finalView += `${title} تعداد  ${purchasedToObj[title]} | `
        })

        return finalView
    }

    const returnUserOrders = () => {
        return (
            userOrders.reverse().map(order => {
                return (
                    <div>
                        <div className='flex justify-between'>
                            <h4 className='space-x-3 space-x-reverse'>
                                <span className='text-gray-500'>
                                    کد پیگیری سفارش:
                                </span>
                                <span>
                                    {order.id}
                                </span>
                            </h4>
                            <h4 className='space-x-3 space-x-reverse'>
                                <span className='text-gray-500'>
                                    وضعیت سفارش:
                                </span>
                                <span>
                                    {order.status}
                                </span>
                            </h4>
                        </div>
                        <h4 className='space-x-3 space-x-reverse'>
                            <span className='text-gray-500'>
                                تاریخ ثبت سفارش:
                            </span>
                            <span>
                                {new persianDate(order.created_at).format('DD MMMM YYYY')}
                            </span>
                        </h4>
                        <div>
                            <h4 className='text-gray-500'>عناوین خریداری شده:</h4>
                            <div className='flex space-x-3 space-x-reverse'>
                                {purchasedItems(order)}
                            </div>
                        </div>
                        <div className=''>
                            <h4 className='space-x-3 space-x-reverse'>
                                <span className='text-gray-500'>
                                    مبلغ مرسوله: 
                                </span>
                                <span>
                                    {order.price}
                                </span>
                            </h4>
                        </div>

                        <hr />
                    </div>

                )
            })
        )
    }

    return (
        <div className='mx-5 md:mx-[25rem] m-auto pb-24 space-y-10'>

            <LoadingScreen loading={loading} />
            
            <div className='relative'>
                <h1 className='font-bold text-center'>تاریخچه سفارشات</h1>
                <div className='absolute top-0 left-0'>
                    <Link to='/shop/profile/'>
                        <svg class="h-6 w-6 text-[#cfa278]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="12" x2="14" y2="12" />  <line x1="4" y1="12" x2="8" y2="16" />  <line x1="4" y1="12" x2="8" y2="8" />  <line x1="20" y1="4" x2="20" y2="20" /></svg>
                    </Link>
                </div>
            </div>

            <div>
                {
                    userOrders.length ?
                    returnUserOrders()
                    :
                    <div className='mx-auto space-y-10 text-center'>
                        <img src="/static/img/emptyCart.svg" className='mx-auto' alt="سبد خرید شما خالی است!" />
                        <div>
                            <h2>
                                شما تا این لحظه هیچ خریدی انجام نداده اید!
                            </h2>
                            <Link to='/shop/'>
                                بازگشت به فروشگاه
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
 
export default Orders