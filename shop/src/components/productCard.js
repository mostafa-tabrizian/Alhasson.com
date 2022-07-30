import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { log, replaceFunction, priceWithDiscount } from '../../../frontend/src/components/base'

const ProductCard = (props) => {
    return (
        props.products.map((product) => {
            return (
                <article className='m-auto'>

                    <Link
                        to={`/shop/${replaceFunction(product.title, ' ', '-')}?slug=${product.slug}`}
                        className='flex flex-col'
                    >
                        <div className=''>
                            <img
                                src={product.thumbnail}
                                width={200}
                                height={200}
                                alt={`${product.title}`}
                                className='object-cover'
                            />
                        </div>
                        <div className='my-3'>
                            <h2 className={`
                                flex
                                text-sm md:w-52 md:text-base
                            `}>
                                {product.title}
                            </h2>
                            <div className='flex justify-between w-full mt-3'>
                                <span className={`
                                    flex text-left font-semibold
                                    text-sm md:w-52 md:text-base
                                `}>
                                    {priceWithDiscount(product.price, product.discount)}   تومان
                                    {/* after discount */}
                                </span>
                                {
                                    product.discount !== 0 &&
                                    <span className={`
                                        flex text-left font-semibold bg-red-600 rounded-full px-2 text-white
                                        text-[.7rem] md:w-52 md:text-base items-center
                                    `}>
                                        {product.discount}%
                                    </span>
                                }
                            </div>
                            {
                                product.discount !== 0 &&
                                <s className={`
                                    flex justify-start font-semibold
                                    text-[.7rem] text-gray-400 decoration-slice
                                `}>
                                    {product.price}
                                    {/* before discount */}
                                </s>
                            }
                        </div>
                    </Link>
                </article>
            )
        })
    )
}

export default ProductCard;