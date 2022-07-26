import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { log } from '../../../frontend/src/components/base'

const Header = () => {
    return (
        <header>
            <div className="relative justify-between m-8 md:flex">
                <div className='items-center hidden space-x-10 space-x-reverse md:flex'>
                    <img className='w-12' src="/static/img/inTheNameOfGod.png" alt="الدکتور-الشیخ-علاء-الحسّون" />
                    <a href="/">
                        الصفحة الرئیسیة
                    </a>
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

        </header>
    );
}

export default Header;