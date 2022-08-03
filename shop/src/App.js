import React, { Suspense, lazy, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { log } from '../../frontend/src/components/base'

const Index   = lazy(() => import('./pages/index'))

const Login   = lazy(() => import('./pages/user/login'))

const Cart              = lazy(() => import('./pages/order/cart'))
const PaymentMethod     = lazy(() => import('./pages/order/paymentMethod'))
const Product           = lazy(() => import('./pages/order/product'))
const OrderHistory      = lazy(() => import('./pages/order/orderHistory'))
const userMessages      = lazy(() => import('./pages/user/messages'))

const Profile           = lazy(() => import('./pages/user/profile'))
const ProfileSetting       = lazy(() => import('./pages/user/profileSetting'))

const Header = lazy(() => import('./components/header'))
const Navbar = lazy(() => import('./components/navbar'))
const Footer = lazy(() => import('./components/footer'))

const App = () => {
    return (
        <React.Fragment>
            <Suspense>  
                <Router>
                    <Header />
                    <Navbar />
                    
                    <Switch>
                        <Route path='/shop/' exact component={Index} />
                        <Route path='/shop/login' exact component={Login} />
                        <Route path='/shop/order-history/' exact component={OrderHistory} />
                        <Route path='/shop/cart/' exact component={Cart} />
                        <Route path='/shop/payment-method/' exact component={PaymentMethod} />
                        <Route path='/shop/profile/' exact component={Profile} />
                        <Route path='/shop/setting/' exact component={ProfileSetting} />
                        <Route path='/shop/messages/' exact component={userMessages} />
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