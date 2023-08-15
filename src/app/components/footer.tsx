import React from 'react'
import Link from 'next/link'

const Footer = () => {
   return (
      <footer className='py-6 bg-[#e5c698] text-[#0d0735] font-semibold'>
         <div className='flex mb-10 max-w-screen-md mx-auto justify-around items-center text-center'>
            <div className='flex flex-col space-y-3'>
               <Link className='hover:text-[#4e3faa]' href='/'>
                  الصفحة الرئیسیة
               </Link>
               <Link className='hover:text-[#4e3faa]' href='/autobiography'>
                  السیرة الذاتیة
               </Link>
               <Link className='hover:text-[#4e3faa]' href='/books'>
                  المؤلفات
               </Link>
               <Link className='hover:text-[#4e3faa]' href='/lectures'>
                  المحاضرات
               </Link>
               <Link className='hover:text-[#4e3faa]' href='/hadith-of-ahl-al-bayt'>
                  موسوعة حدیث أهل البیت
               </Link>
            </div>

            <div className='flex flex-col items-center'>
               <a target='_blank' href='https://instagram.com/alaa_alhassoon' rel='noreferrer'>
                  <svg
                     className='h-8 w-8 mt-5 text-[#0d0735] hover:text-[#4e3faa]'
                     viewBox='0 0 24 24'
                     fill='none'
                     stroke='currentColor'
                     strokeWidth='2'
                     strokeLinecap='round'
                     strokeLinejoin='round'
                  >
                     {' '}
                     <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />{' '}
                     <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />{' '}
                     <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
                  </svg>
               </a>
               <a target='_blank' href='https://t.me/alhassoon' rel='noreferrer'>
                  <svg
                     className='h-8 w-8 mt-5 text-[#0d0735] hover:text-[#4e3faa]'
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
                     <path d='M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4' />
                  </svg>
               </a>
               <a
                  target='_blank'
                  href='https://www.facebook.com/profile.php?id=100003133071075&fref=nf'
                  rel='noreferrer'
               >
                  <svg
                     className='h-8 w-8 mt-5 text-[#0d0735] hover:text-[#4e3faa]'
                     viewBox='0 0 24 24'
                     fill='none'
                     stroke='currentColor'
                     strokeWidth='2'
                     strokeLinecap='round'
                     strokeLinejoin='round'
                  >
                     {' '}
                     <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
                  </svg>
               </a>
               <a target='_blank' href='https://twitter.com/Alaa354Alaa' rel='noreferrer'>
                  <svg
                     className='h-8 w-8 mt-5 text-[#0d0735] hover:text-[#4e3faa]'
                     viewBox='0 0 24 24'
                     fill='none'
                     stroke='currentColor'
                     strokeWidth='2'
                     strokeLinecap='round'
                     strokeLinejoin='round'
                  >
                     {' '}
                     <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
                  </svg>
               </a>
            </div>
         </div>

         <p className='text-center flex flex-col justify-center opacity-50 text-sm text-black mt-5'>
            <span>حقوق النشر © {new Date().getFullYear()} . جميع الحقوق محفوظة</span>
            <span>لمزيد من المعلومات يرجى </span>
            <a
               target='_blank'
               href='mailto: tabrizian.codes@gmail.com'
               className='underline'
               style={{ color: 'black !important' }}
               rel='noreferrer'
            >
               <span>الاتصال بنا</span>
            </a>
         </p>
      </footer>
   )
}

export default Footer
