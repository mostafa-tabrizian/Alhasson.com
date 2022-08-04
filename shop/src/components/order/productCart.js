import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import CartStore from '../../store/cartStore'

import { log, replaceFunction } from '../../../../frontend/src/components/base'

const ProductCart = (props) => {
    const [cartItems, cartActions] = CartStore()

    const priceWithDiscount = (price, discount) => {
        return price - ((price * discount) / 100)
    }
    
    return (
        cartItems.items.map((product) => {
            const productData = props.allProducts.find((each) => each.id === product.id)
            return (
                <div className='flex'>
                    <Link
                        to={`/shop/${productData && replaceFunction(productData?.title, ' ', '-')}?slug=${productData?.slug}`}
                        className='flex flex-col'
                    >
                        <div className='w-[6rem] h-auto ml-5'>
                            <img
                                src={productData?.image}
                                alt={productData?.title}
                                className='rounded-md'
                            />
                        </div>
                    </Link>
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-col space-y-1'>
                            <h2 className={`
                                flex
                                text-base md:w-52 md:text-base
                            `}>
                                {productData?.title}
                            </h2>
                        </div>
                        
                        <div>
                            {
                                productData?.discount !== 0 &&
                                <span className={`
                                    flex text-left font-semibold w-fit bg-red-600 rounded-full px-2 text-white mb-3
                                    text-[.7rem] md:w-52 md:text-base items-end
                                `}>
                                    {productData?.discount}%
                                </span>
                            }
                            
                            <div className='flex justify-between'>
                                <span className={`
                                    flex text-left font-semibold
                                    text-sm md:w-52 md:text-base
                                `}>
                                    {priceWithDiscount(productData?.price, productData?.discount) * product.count}   تومان
                                </span>
            
                                <div className='flex'>
                                    <button onClick={() => cartActions.addOrIncreaseItem(productData)}>
                                        <svg class="h-6 w-6 text-[#8a6541]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                                    </button>
            
                                    <span className='mx-3 font-semibold'>
                                        {product.count}
                                    </span>
            
                                    <button onClick={() => cartActions.removeOrDecreaseItem(productData)}>
                                        <svg class="h-6 w-6 text-[#8a6541]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                </div>      
            )
        })
    )
    
}
 
export default ProductCart;