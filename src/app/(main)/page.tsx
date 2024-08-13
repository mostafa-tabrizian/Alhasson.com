import type { Metadata } from 'next'

import Bookshelf from './components/bookshelf'
import LandpageHeroImage from './landpageHeroImage'
import YouTubeFrame from './youtube'
import dbConnect from '@/utils/dbConnect'
import Book from '@/models/book'
import Lecture, { ILecture } from '@/models/lecture'
import Encyclopedia from './components/encyclopedia'

export const metadata: Metadata = {
   metadataBase: new URL('https://alhasson.com'),
   title: 'موقع الدکتور الشیخ علاء الحسّون',
   description: 'دكتوراه في علوم الحديث، ومهتم حالياً بتأليف موسوعة حديث أهل البيت (ع)',
}

async function Home() {
   await dbConnect()
   const booksData = await Book.find()
   const firstLectureData = await Lecture.aggregate([
      { $limit: 1 },
      { $sort: { createdAt: -1 } },
   ]).then((data: ILecture[]) => data[0])

   return (
      <div>
         <LandpageHeroImage />

         <div className=' bg-gradient-to-b from-[#0d0735] to-[#070515]'>
            <div className='max-w-screen-lg mx-auto'>
               <section className='py-10 mx-6 overflow-x-hidden'>
                  <h1 className='text-xl mb-5 font-thin text-center'>مؤلفات الشیخ علاء الحسّون</h1>
                  <Bookshelf books={JSON.parse(JSON.stringify(booksData))} />
               </section>

               <hr className='mx-20' />

               <section className='py-10 px-6 space-y-6'>
                  <h2 className='text-xl font-thin text-center'>محاضرات الشیخ علاء الحسّون</h2>
                  <div className='p-5'>
                     {firstLectureData ? (
                        <div className=''>
                           <div key={firstLectureData?._id} className='space-y-5'>
                              <YouTubeFrame video={JSON.parse(JSON.stringify(firstLectureData))} />

                              <h2 className='text-center'>
                                 {firstLectureData?.title}
                                 <br />
                                 {new Date(firstLectureData?.publishedAt).toLocaleDateString(
                                    'ar-EG',
                                    {
                                       year: 'numeric',
                                       month: 'long',
                                       day: 'numeric',
                                    },
                                 )}
                              </h2>
                           </div>
                        </div>
                     ) : (
                        ''
                     )}
                  </div>
               </section>

               <hr className='mx-20' />

               <Encyclopedia />
            </div>
         </div>
      </div>
   )
}

export default Home
