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

const App = () => {
    return (
        <React.Fragment>
            <Suspense fallback=''>  
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