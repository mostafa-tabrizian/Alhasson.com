import React, { Suspense, lazy, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import { log } from '../../frontend/src/components/base'

const Index   = lazy(() => import('./pages/index'))
const Product = lazy(() => import('./pages/product'))

const Login   = lazy(() => import('./pages/login'))
const OrderHistory      = lazy(() => import('./components/profile/orderHistory'))
const Cart              = lazy(() => import('./components/order/cart'))
const PaymentMethod     = lazy(() => import('./components/order/paymentMethod'))
const Profile           = lazy(() => import('./components/profile/profile'))
const EditProfile       = lazy(() => import('./components/profile/editProfile'))

const Header = lazy(() => import('./components/header'))
const Navbar = lazy(() => import('./components/navbar'))
const Footer = lazy(() => import('./components/footer'))

const antIcon = <LoadingOutlined style={{ fontSize: 150, color: 'white' }} spin />;

const loadingScreen = (
    <div className={`fixed grid justify-center items-center h-screen w-screen bg-gradient-to-b from-[#0d0735] to-[#070515]`}>
        <div className='space-y-5 top-1/2'>
            <Spin indicator={antIcon} />
        </div>
    </div>
)

const App = () => {
    return (
        <React.Fragment>
            <Suspense fallback={loadingScreen}>
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
                        <Route path='/shop/edit-profile/' exact component={EditProfile} />
                        <Route path='/shop/:product_slug' exact component={Product} />
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