'use client'

import { useState } from 'react'

const Bookmark = () => {
   const [bookmark, setBookmark] = useState(false)

   return (
      <>
         <button
            className='md:hidden right-0 top-1/2 fixed p-2 bg-[#0d0735] rounded-lg'
            onClick={() => (bookmark ? setBookmark(false) : setBookmark(true))}
         >
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
               <path d='M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2' />
            </svg>
         </button>

         <div
            className={`${
               bookmark ? 'translate-x-0' : 'translate-x-[120%]'
            } md:translate-x-0 transition-transform duration-500 ease-in-out flex flex-col right-0 fixed p-6 mr-6 mt-20 md:mt-0 rounded-lg leading-8 bg-gradient-to-tr text-right from-[#3e328b] to-[#0d0735]`}
         >
            <h5 className=''>الفهرس</h5>
            <a href='#التعريف بمشروع'>التعريف بمشروع</a>
            <a href='#مراحل عمل'>مراحل عمل</a>
            <a href='#طريقة تنظيم بطاقات'>طريقة تنظيم بطاقات</a>
            <a href='#مجال استثمار بطاقات'>مجال استثمار بطاقات</a>
         </div>
      </>
   )
}

export default Bookmark
