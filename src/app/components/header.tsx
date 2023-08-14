'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from "next/legacy/image"

const Header = () => {
   const [menu, setMenu] = useState(false)

   const pathname = usePathname()
   useEffect(() => setMenu(false), [pathname])

   return (
      <header>
         <div className='fixed w-full px-3 md:p-6 rounded-lg bg-[#0d07357e] backdrop-blur-xl top-0 right-0 z-10'>
            <Image
               width={0}
               height={0}
               className='rounded mx-auto mb-5 hidden md:block'
               src={'/image/besmellah.png'}
               sizes='100rem'
               style={{ width: '10%', height: 'auto' }}
               alt='بسم الله الرحمن الرحیم'
            />
            <div className='items-center space-x-10 hidden justify-center md:flex'>
               <Link className='text-orange-200' href='/hadith-of-ahl-al-bayt'>
                  موسوعة حدیث أهل البیت
               </Link>
               <Link className='text-orange-200' href='/lectures'>
                  المحاضرات
               </Link>
               <Link className='text-orange-200' href='/books'>
                  المؤلفات
               </Link>
               <Link className='text-orange-200' href='/autobiography'>
                  السیرة الذاتیة
               </Link>
               <Link className='text-orange-200' href='/'>
                  الصفحة الرئیسیة
               </Link>
               {/* <Link href="/الصور" >
                           الصور
                     </Link> */}
            </div>

            <div className='md:hidden flex justify-end items-center'>
               <Image
                  width={0}
                  height={0}
                  className='absolute left-1/2 -translate-x-1/2 md:hidden'
                  src={'/image/besmellah.png'}
                  sizes='100rem'
                  style={{ width: '40%', height: 'auto' }}
                  alt='بسم الله الرحمن الرحیم'
               />
               <button
                  onClick={() => {
                     menu ? setMenu(false) : setMenu(true)
                  }}
                  type='button'
               >
                  {menu ? (
                     <svg
                        className='h-12 w-12 text-[#e0bd87]'
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
                        className='h-12 w-12 text-[#e0bd87]'
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
               <Link href='/'>الصفحة الرئیسیة</Link>
               <Link href='/autobiography'>السیرة الذاتیة</Link>
               <Link href='/books'>المؤلفات</Link>
               <Link href='/lectures'>المحاضرات</Link>
               <Link href='/hadith-of-ahl-al-bayt'>موسوعة حدیث أهل البیت</Link>
            </div>
         </div>
      </header>
   )
}

export default Header
