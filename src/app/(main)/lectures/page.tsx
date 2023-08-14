import type { Metadata } from 'next'

import { prisma } from '@/lib/prisma'

async function getLectures() {
   return await prisma.lecture.findMany().then((res) => res)
}

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
   const lectures = await getLectures()

   return (
      <div className='bg-gradient-to-b min-h-screen py-10 md:py-24 px-6 from-[#0d0735] to-[#070515]'>
         <h1 className='title mt-14'>المحاضرات</h1>

         <div className='flex flex-wrap gap-x-4 mt-10 justify-center'>
            {lectures?.map((lecture) => {
               return (
                  <div key={lecture.id} className=''>
                     <div key={lecture?.id} className='space-y-5'>
                        <div
                           className='flex justify-center'
                           dangerouslySetInnerHTML={{ __html: lecture?.source }}
                        ></div>
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
