import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div className='mx-auto space-y-10 text-center'>
            <img src="/static/img/emptyCart.svg" className='mx-auto' alt="سبد خرید شما خالی است!" />
            <div>
                <h1>
                    سبد خرید شما خالی است!
                </h1>
                <Link to='/shop/'>
                    بازگشت به فروشگاه
                </Link>
            </div>
        </div>
    );
}
 
export default EmptyCart;
