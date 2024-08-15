import type { Metadata } from 'next'
import YouTubeFrame from '../youtube'
import lecture, { ILecture } from '@/models/lecture'
import dbConnect from '@/utils/dbConnect'

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
   await dbConnect()
   const lectures: ILecture[] = await lecture.find()

   return (
      <div className='bg-gradient-to-b min-h-screen py-10 md:py-24 px-6 from-[#0d0735] to-[#070515]'>
         <h1 className='title mt-14 text-center'>محاضرات الشیخ علاء الحسّون</h1>

         <div className='max-w-screen-lg mx-auto mt-10 justify-center'>
            {lectures?.map((lecture) => {
               return (
                  <div key={lecture._id} className=''>
                     <div key={lecture?._id} className='space-y-5'>
                        <YouTubeFrame video={JSON.parse(JSON.stringify(lecture))} />

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
