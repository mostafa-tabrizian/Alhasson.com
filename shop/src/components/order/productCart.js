import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import CartStore from '../../store/cartStore'
import { log, replaceFunction } from '../../../../frontend/src/components/base'
import { priceWithDiscount, currencyFormat } from '../base'

const ProductCart = (props) => {
    const [cartItems, cartActions] = CartStore()

    
    return (
        cartItems.items.map((product) => {
            const productData = props.allProducts.find((each) => each.id === product.id)
            return (
                <div className='flex'>
                    <Link
                        to={`/shop/${productData && replaceFunction(productData?.title, ' ', '-')}?id=${productData?.id}`}
                        className='flex flex-col'
                    >
                        <div className='w-[6rem] h-auto ml-5'>
                            <LazyLoadImage
                                src={productData?.image}
                                alt={productData?.title}
                                className='rounded-md'
                                effect="blur"
                            />
                        </div>
                    </Link>
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-col space-y-1'>
                            <h2 className={`
                                flex
                                text-base md:w-52 mb-3 md:text-base
                            `}>
                                {productData?.title}
                            </h2>
                        </div>
                        
                        <div>
                            <div className='flex items-center justify-between'>
                                <div className='flex space-x-3 space-x-reverse'>
                                    <span className={`
                                        flex text-left font-semibold
                                        text-sm md:text-base
                                    `}>
                                        {currencyFormat(priceWithDiscount(productData?.price, productData?.discount) * product.count)}   تومان
                                    </span>
                                    {
                                        productData?.discount !== 0 &&
                                        <span className={`
                                            flex text-left font-semibold w-fit bg-red-600 rounded-full px-2 text-white mb-3
                                            text-[.7rem] md:text-base items-end
                                        `}>
                                            {productData?.discount}%
                                        </span>
                                    }
                                </div>
            
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