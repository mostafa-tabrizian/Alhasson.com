import type { Metadata } from 'next'

import { prisma } from '@/lib/prisma'
import YouTubeFrame from '../youtube'

import type { Lecture } from '@prisma/client'

export const metadata: Metadata = {
   metadataBase: new URL('https://alhasson.com'),
   title: 'محاضرات الدکتور الشیخ علاء الحسّون',
   description: 'دكتوراه في علوم الحديث، ومهتم حالياً بتأليف موسوعة حديث أهل البيت(ع)',

   openGraph: {
      title: 'محاضرات الدکتور الشیخ علاء الحسّون',
      description: 'دكتوراه في علوم الحديث، ومهتم حالياً بتأليف موسوعة حديث أهل البيت(ع)',
      url: 'https://alhasson.com/lectures',
      siteName: 'موقع الدکتور الشیخ علاء الحسّون',
      locale: 'ar',
      type: 'website',
   },
}

const Lectures = async () => {
   const lectures: Lecture[] = await prisma.lecture.findMany()

   return (
      <div className='bg-gradient-to-b min-h-screen py-10 md:py-24 px-6 from-[#0d0735] to-[#070515]'>
         <h1 className='title mt-14 text-center'>محاضرات الشیخ علاء الحسّون</h1>

         <div className='max-w-screen-lg mx-auto mt-10 justify-center'>
            {lectures?.map((lecture) => {
               return (
                  <div key={lecture.id} className=''>
                     <div key={lecture?.id} className='space-y-5'>
                        <YouTubeFrame video={lecture} />

                        <h2 className='text-center'>
                           {lecture?.title}
                           <br />
                           {new Date(lecture?.publishedAt).toLocaleDateString('ar-EG', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                           })}
                        </h2>
                     </div>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default Lectures
