import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Badge } from 'antd';

import { log, isItDesktop } from '../../../frontend/src/components/base'
import CartStore from '../store/cartStore'

const Navbar = ({ history }) => {
    const [path, focusPath] = useState(null)

    const [cartItems] = CartStore()

    useEffect(() => {
        const listen = history.listen(() => {
            window.scrollTo(0, 0);
            focusPath(window.location.pathname)
        });

        return () => {
            listen();
        }
    })

    return (
        !isItDesktop() &&
        <div className='fixed bottom-0 left-0 z-10 flex justify-center w-screen p-3 space-x-16 space-x-reverse bg-white rounded-t-lg shadow-light'>
            <Link to='/shop/'><div><svg class={`h-8 w-8 hover:text-[#cead94] ${path == '/' ? 'text-[#946958]' : 'text-gray-400'}`}  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <rect x="10" y="12" width="4" height="4" /></svg></div></Link>
            <Link to='/shop/checkout/cart/'>
                <Badge count={cartItems.items.length} color="#cfa278">
                    <div><svg class={`h-8 w-8 hover:text-[#cead94] ${path == '/cart' ? 'text-[#946958]' : 'text-gray-400'}`}  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg></div>
                </Badge>
            </Link>
            <Link to='/shop/profile/'><div><svg class={`h-8 w-8 hover:text-[#cead94] ${path == '/profile' ? 'text-[#946958]' : 'text-gray-400'}`}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg></div></Link>
        </div>
    );
}
 
export default withRouter(Navbar);