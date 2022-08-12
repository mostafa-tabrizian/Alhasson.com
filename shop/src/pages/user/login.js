import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'

import { log } from '../../../../frontend/src/components/base'
import LoginForm from "../../components/user/loginForm";

const Login = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>‌الحسون | ورود</title>
            </Helmet>

            <div className='w-screen h-screen'>
                <div className="mx-auto mt-[50%] md:mt-[10%] w-11/12 md:w-5/12 text-center top-[10%]">
                    <h1 className="text-[3rem] mb-5 text-center text-[#ac272e] ">
                        ورود به فروشگاه الحسون
                    </h1>

                    <div className='grid md:grid-cols-2'>
                        <div className='flex flex-col my-auto'>
                            <LoginForm />
                            <button className='mt-5 text-gray-500'><Link to='/shop/'>برگشت به صفحه اصلی</Link></button>
                        </div>
                    </div>


                </div>
            </div>


        </React.Fragment>
    );
}

export default Login;