import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

import { log } from './base'

const Header = ({ history }) => {
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        listen();
    }, []);
    
    const listen = history.listen(() => {
        setMenu(false)
    });

    return (
        <header>
            <div className="relative justify-between hidden m-8 md:flex">
                <div className='flex items-center space-x-10 space-x-reverse'>
                    <img className='w-12' src="/static/img/inTheNameOfGod.png" alt="الدکتور-الشیخ-علاء-الحسّون" />
                    <Link to="/">
                        الصفحة الرئیسیة
                    </Link>
                    <Link to="/السیرة-الذاتیة" alt="الدکتور-الشیخ-علاء-الحسّون">
                        السیرة الذاتیة
                    </Link>
                    <Link to="/المؤلفات" alt="المؤلفات">
                        المؤلفات 
                    </Link>
                    <a href="/shop/" alt="شراء الکتب">
                        شراء الکتب  
                    </a>
                    <Link to="/المحاضرات" alt="المحاضرات">
                        المحاضرات
                    </Link>
                    <Link to="/موسوعة-حدیث-أهل-البیت" alt="موسوعة-حدیث-أهل-البیت">
                        موسوعة حدیث أهل البیت
                    </Link>
                    {/* <Link className='hover:text-[#4e3faa]' to="/الصور" alt="الصور">
                        الصور
                    </Link> */}
                </div>
                <div className='flex items-center'>
                    <svg className="absolute w-6 h-6 mr-2 text-blue-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
                    <input type="text" className='rounded-lg text-blue-900 pr-12 py-1 w-[16rem]' placeholder="بحث عن کتاب أو محاضرة" onKeyDown={(e) => {
                        if (e.key == 'Enter') {
                            document.location.href = `/بحث?q=${e.target.value}`
                        }
                    }}/>
                </div>
            </div>

            <div className="md:hidden">
                <div className='flex justify-center'>
                    {/* <img className="inTheNameOfGod_m" alt="الدکتور-الشیخ-علاء-الحسّون" src={require("/static/img/inTheNameOfGod_m.png")} /> */}
                </div>

                <div>
                    <button className='fixed p-2 bg-[#0d0735] rounded-bl-lg z-10' onClick={() => {menu ? setMenu(false) : setMenu(true)}} type='button'>
                        {/* <img src='/static/img/menu.svg' alt="" /> */}
                        {
                            menu ?
                            <svg class="h-12 w-12 text-[#e0bd87]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                            :
                            <svg class="h-12 w-12 text-[#e0bd87]"  width="48" height="48" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="6" x2="20" y2="6" />  <line x1="4" y1="12" x2="20" y2="12" />  <line x1="4" y1="18" x2="20" y2="18" /></svg>
                        }
                    </button>
                    <div className={`flex justify-center fixed right-1/2 z-10 transition-transform ease-in-out duration-500 translate-x-1/2 ${menu ? 'translate-y-0' : 'translate-y-[-100%]'}`}>
                        <div className='bg-gradient-to-tr from-[#3e328b] to-[#0d0735] rounded-b-lg py-6 text-center w-[13rem] flex flex-col'>
                            <Link className='hover:text-[#4e3faa]' to="/">
                                الصفحة الرئیسیة
                            </Link>
                            <Link className='hover:text-[#4e3faa]' to="/السیرة-الذاتیة" alt="الدکتور-الشیخ-علاء-الحسّون">
                                السیرة الذاتیة
                            </Link>
                            <Link className='hover:text-[#4e3faa]' to="/المؤلفات" alt="المؤلفات">
                                المؤلفات 
                            </Link>
                            <a href="/shop/" alt="shop">
                                شراء الکتب    
                            </a>
                            <Link className='hover:text-[#4e3faa]' to="/المحاضرات" alt="المحاضرات">
                                المحاضرات 
                            </Link>
                            <Link className='hover:text-[#4e3faa]' to="/موسوعة-حدیث-أهل-البیت" alt="موسوعة-حدیث-أهل-البیت">
                                 موسوعة حدیث أهل البیت 
                            </Link>
                            {/* <Link className='hover:text-[#4e3faa]' to="/الصور" alt="الصور">
                                الصور
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>


        </header>
    );
}

export default withRouter(Header);