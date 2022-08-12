import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { log, replaceFunction } from '../../../../frontend/src/components/base'
import { priceWithDiscount, currencyFormat } from '../base'

const ProductCard = (props) => {
    return (
        props.products.map((product) => {
            return (
                <article className=''>

                    <Link
                        to={`/shop/${replaceFunction(product.title, ' ', '-')}?id=${product.id}`}
                        className='flex flex-col'
                    >
                        <div className=''>
                            <LazyLoadImage
                                src={product.thumbnail}
                                alt={`${product.title}`}
                                className='object-cover h-[16rem] rounded-lg'
                                effect="blur"
                            />
                        </div>
                        <div className='my-3'>
                            <h2 className={`
                                flex
                                text-sm md:w-52 md:text-base
                            `}>
                                {product.title}
                            </h2>
                            <div className='flex w-full mt-3 space-x-3 space-x-reverse md:'>
                                <span className={`
                                    flex text-left font-semibold
                                    text-sm md:w-auto md:text-base
                                `}>
                                    {currencyFormat(priceWithDiscount(product.price, product.discount))}   تومان
                                    {/* after discount */}
                                </span>
                                {
                                    product.discount !== 0 &&
                                    <span className={`
                                        flex text-left font-semibold bg-red-600 rounded-full px-2 text-white
                                        text-[.7rem] md:w-auto md:text-base items-center
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
                                    {currencyFormat(product.price)}
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