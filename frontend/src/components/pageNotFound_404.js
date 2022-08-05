import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'

import { takeParameterFromUrl, log } from './base';

const NotFound_404 = () => {
    log('not found this fucking page')

    return (
        <React.Fragment>

            <Helmet>
                <title>صفحه مورد نظر پیدا نشد | الحسون</title>
                <meta name="description" content='صفحه مورد نظر پیدا نشد' />
                <meta name="keywords" content="الحسون" />
                <meta name="robots" content="noindex"></meta>
            </Helmet>

            <div className="pageNotFound text-[18rem] h-[13rem] md:h-[34rem] md:absolute md:left-1/2 md:top-1/2 items-center flex md:text-[50rem]">404</div>

            <div className="basicPage wrapper-sm relative" style={{ background: '#0000008c', backdropFilter: 'blur(15px)', boxShadow: 'none', zIndex: '1' }}>
                <h1> 🤔 صفحه مورد نظر پیدا نشد </h1>
                <div class="mt-5">
                    <h2>
                        وجود ندارد یا در حال حاضر غیر فعال شده است
                    </h2>
                </div>
                <div className='mt-10'>
                    <div className='px-4 py-2 border-2 border-red-900 rounded-xl'>
                        <h2>
                            <Link to='/sort?s=trend'>
                                مشاهده بهترین کتاب های این ماه
                            </Link>
                        </h2>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default NotFound_404;