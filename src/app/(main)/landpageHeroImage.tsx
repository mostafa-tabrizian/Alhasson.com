'use client'

import Image from 'next/legacy/image'
import { useEffect, useState } from 'react'

const LandpageHeroImage = () => {
   const [screenWidth, setScreenWidth] = useState<null | number>(null)
   useEffect(() => {
      setScreenWidth(window.innerWidth)

      window.addEventListener('resize', () => {
         setScreenWidth(window.innerWidth)
      })
   }, [])

   return (
      <section className='w-screen pt-10 bg-[#0d0735] h-screen md:h-auto relative'>
         {screenWidth ? (
            screenWidth <= 768 ? (
               <Image
                  alt='الدکتور شیخ علاء الحسون'
                  layout='fill'
                  src='/image/landpageSM.jpg'
                  sizes='(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw'
                  objectFit='contain'
                  priority
                  unoptimized
               />
            ) : (
               <Image
                  alt='الدکتور شیخ علاء الحسون'
                  height={1080}
                  width={1920}
                  src='/image/landpage.jpg'
                  sizes='(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw'
                  priority
                  unoptimized
               />
            )
         ) : (
            'no screenWidth'
         )}
      </section>
   )
}

export default LandpageHeroImage
