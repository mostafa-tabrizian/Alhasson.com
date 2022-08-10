import React, { Suspense, lazy, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { log } from '../../frontend/src/components/base'

const Index   = lazy(() => import('./pages/index'))
const Search   = lazy(() => import('./pages/search'))

const Login   = lazy(() => import('./pages/user/login'))

const Cart              = lazy(() => import('./pages/order/cart'))
const Payment     = lazy(() => import('./pages/order/payment'))
const Product           = lazy(() => import('./pages/order/product'))
const Orders      = lazy(() => import('./pages/order/orders'))

const Profile           = lazy(() => import('./pages/user/profile'))
const ProfileEdit       = lazy(() => import('./pages/user/profileEdit'))

const Header = lazy(() => import('./components/header'))
const Navbar = lazy(() => import('./components/navbar'))
const Footer = lazy(() => import('./components/footer'))

const loadingScreen = () => {
    return (
        <div className={`
            fixed left-0 backdrop-blur-3xl backdrop-brightness-75
            top-0 w-screen h-screen z-20
            flex items-center justify-center
        `}>
            <div>
                <svg class="animate-spin h-10 w-10 m-10 text-[#d5ba91]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>    
            </div>
        </div>
    )
}

const App = () => {
    return (
        <React.Fragment>
            <Suspense fallback={loadingScreen()}>  
                <Router>
                    <Header />
                    <Navbar />
                    
                    <Switch>
                        <Route path='/shop/' exact component={Index} />
                        <Route path='/shop/search/' exact component={Search} />
                        <Route path='/shop/login/' exact component={Login} />

                        <Route path='/shop/checkout/cart/' exact component={Cart} />
                        <Route path='/shop/checkout/payment/' exact component={Payment} />

                        <Route path='/shop/profile/' exact component={Profile} />
                        <Route path='/shop/profile/orders/' exact component={Orders} />
                        <Route path='/shop/profile/edit/' exact component={ProfileEdit} />

                        <Route path='/shop/:product_slug/' exact component={Product} />
                    </Switch>

                    {/* <Footer /> */}
                    
                </Router>
            </Suspense>
        </React.Fragment>
    );
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('markaz')
);