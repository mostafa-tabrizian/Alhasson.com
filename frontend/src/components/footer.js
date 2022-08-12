import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='pt-3 bg-[#e0bd87] text-[#0d0735] font-semibold'>
            <div className='grid grid-cols-2 text-center max-w-[70rem] px-[5rem] md:px-[10rem] m-auto pt-5'>
                <div className='flex flex-col space-y-3 text-right'>
                    <Link to="/">
                        الصفحة الرئیسیة
                    </Link>
                    <Link to="/السیرة-الذاتیة" alt="الدکتور-الشیخ-علاء-الحسّون">
                        السیرة الذاتیة
                    </Link>
                    <Link to="/المؤلفات" alt="المؤلفات">
                        المؤلفات 
                    </Link>
                    <Link to="/المحاضرات" alt="المحاضرات">
                        المحاضرات 
                    </Link>
                    <Link to="/موسوعة-حدیث-أهل-البیت" alt="موسوعة-حدیث-أهل-البیت">
                        موسوعة حدیث أهل البیت
                    </Link>
                    {/* <Link to="/الصور" alt="الصور">
                        الصور 
                    </Link> */}
                </div>

                <div className='flex space-x-5 space-x-reverse'>
                    <a className='pt-5' target="_blank" href="https://www.facebook.com/profile.php?id=100003133071075&fref=nf">
                        <svg className="h-8 w-8 text-[#0d0735] hover:text-[#4e3faa]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </a>
                    <a className='pt-5' target="_blank" href="https://twitter.com/Alaa354Alaa">
                        <svg className="h-8 w-8 text-[#0d0735] hover:text-[#4e3faa]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                    </a>
                    <a className='pt-5' target="_blank" href= "https://instagram.com/alaa_alhassoon">
                        <svg className="h-8 w-8 text-[#0d0735] hover:text-[#4e3faa]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                    </a>
                    <a className='pt-5' target="_blank" href="https://t.me/alhassoon">
                        <svg className="h-8 w-8 text-[#0d0735] hover:text-[#4e3faa]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
                    </a>
                </div>
            </div>

            <h4 className="flex flex-col justify-center pb-5 mt-5 text-sm text-center text-black opacity-50 copyright">
                Copyright © 2022 . All Rights Reserved
                <br />
                For More Information Please <a target="_blank" href="mailto: tabrizian.codes@gmail.com" className='underline' style={{color: 'black !important'}}>Contact Us</a>
            </h4>

        </footer>
    );
}
 
export default Footer;