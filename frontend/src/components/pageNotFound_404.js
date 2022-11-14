import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'

import { log } from './base';

const NotFound_404 = () => {
    return (
        <React.Fragment>

            <Helmet>
                <title>صفحه مورد نظر پیدا نشد | الحسون</title>
                <meta name="description" content='صفحه مورد نظر پیدا نشد' />
                <meta name="keywords" content="الحسون" />
                <meta name="robots" content="noindex"></meta>
            </Helmet> 

            <h1 className="pageNotFound text-[18rem] h-[13rem] md:h-[34rem] md:absolute md:left-1/2 md:top-1/2 items-center flex md:text-[50rem]">404</h1>
            <h1> صفحه مورد نظر پیدا نشد </h1>
            
        </React.Fragment>
    );
}

export default NotFound_404;