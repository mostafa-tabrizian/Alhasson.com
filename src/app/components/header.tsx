'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
   const [menu, setMenu] = useState(false)

   const pathname = usePathname()
   useEffect(() => setMenu(false), [pathname])

   return (
      <header>
         <div className='fixed w-full md:p-6 rounded-lg bg-[#0d07357e] backdrop-blur-xl top-0 right-0 z-10'>
            <div className='items-center space-x-10 hidden justify-center md:flex'>
               <Link className='text-[#e5c698]' href='/hadith-of-ahl-al-bayt'>
                  موسوعة حدیث أهل البیت
               </Link>
               <Link className='text-[#e5c698]' href='/lectures'>
                  المحاضرات
               </Link>
               <Link className='text-[#e5c698]' href='/books'>
                  المؤلفات
               </Link>
               <Link className='text-[#e5c698]' href='/autobiography'>
                  السیرة الذاتیة
               </Link>
               <Link className='text-[#e5c698]' href='/'>
                  الصفحة الرئیسیة
               </Link>
            </div>

            <div className='md:hidden grid justify-end items-center'>
               <button
                  onClick={() => {
                     menu ? setMenu(false) : setMenu(true)
                  }}
                  type='button'
                  className='flex justify-end'
                  aria-label='القائمة'
               >
                  {menu ? (
                     <svg
                        className='h-12 w-12 text-[#e5c698]'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                     >
                        {' '}
                        <path stroke='none' d='M0 0h24v24H0z' />{' '}
                        <line x1='18' y1='6' x2='6' y2='18' />{' '}
                        <line x1='6' y1='6' x2='18' y2='18' />
                     </svg>
                  ) : (
                     <svg
                        className='h-12 w-12 text-[#e5c698]'
                        width='48'
                        height='48'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                     >
                        {' '}
                        <path stroke='none' d='M0 0h24v24H0z' />{' '}
                        <line x1='4' y1='6' x2='20' y2='6' />{' '}
                        <line x1='4' y1='12' x2='20' y2='12' />{' '}
                        <line x1='4' y1='18' x2='20' y2='18' />
                     </svg>
                  )}
               </button>
            </div>
         </div>
         <div
            className={`flex md:hidden justify-center fixed right-1/2 z-10 transition-transform ease-in-out duration-500 translate-x-1/2 ${
               menu ? 'translate-y-0' : 'translate-y-[-100%]'
            }`}
         >
            <div className='bg-gradient-to-tr space-y-3 from-[#3e328b] to-[#0d0735] rounded-b-lg py-6 text-center w-[13rem] flex flex-col'>
               <Link aria-label='الصفحة الرئیسیة' href='/'>
                  الصفحة الرئیسیة
               </Link>
               <Link aria-label='السیرة الذاتیة' href='/autobiography'>
                  السیرة الذاتیة
               </Link>
               <Link aria-label='المؤلفات' href='/books'>
                  المؤلفات
               </Link>
               <Link aria-label='المحاضرات' href='/lectures'>
                  المحاضرات
               </Link>
               <Link aria-label='موسوعة حدیث أهل البیت' href='/hadith-of-ahl-al-bayt'>
                  موسوعة حدیث أهل البیت
               </Link>
            </div>
         </div>
      </header>
   )
}

export default Header
