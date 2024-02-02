import Image from 'next/legacy/image'
import Link from 'next/link'
import type { Metadata } from 'next'

import { prisma } from '@/lib/prisma'
import Bookshelf from './components/bookshelf'
import LandpageHeroImage from './landpageHeroImage'
import YouTubeFrame from './youtube'

async function getFirstLecture() {
   return await prisma.lecture.findFirst()
}

export const metadata: Metadata = {
   metadataBase: new URL('https://alhasson.com'),
   title: 'موقع الدکتور الشیخ علاء الحسّون',
   description: 'دكتوراه في علوم الحديث، ومهتم حالياً بتأليف موسوعة حديث أهل البيت (ع)',
}

async function Home() {
   const books = await prisma.book.findMany()
   const lecture = await getFirstLecture()

   return (
      <div>
         <LandpageHeroImage />

         <div className=' bg-gradient-to-b from-[#0d0735] to-[#070515]'>
            <div className='max-w-screen-lg mx-auto'>
               <section className='py-10 mx-6 overflow-x-hidden'>
                  <h1 className='text-xl mb-5 font-thin text-center'>مؤلفات الشیخ علاء الحسّون</h1>
                  <Bookshelf books={books} />
               </section>

               <hr className='mx-20' />

               <section className='py-10 px-6 space-y-6'>
                  <h2 className='text-xl font-thin text-center'>محاضرات الشیخ علاء الحسّون</h2>
                  <div className='p-5'>
                     {lecture ? (
                        <div className=''>
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
                     ) : (
                        ''
                     )}
                  </div>
               </section>

               <hr className='mx-20' />

               <section className='pt-10 pb-20 px-6'>
                  <div className='grid md:flex md:flex-row-reverse'>
                     <div className='flex relative mx-6 mb-6 justify-center w-[19rem] h-[28rem] md:w-[60rem] md:h-[33.4rem]'>
                        <Image
                           layout='fill'
                           objectFit='contain'
                           className='rounded-lg'
                           src='/image/marefe.jpg'
                           alt='الدکتور الشیخ علاء الحسّون'
                        />
                     </div>
                     <div className='pr-4 text-right border-r  border-[#e5c698]'>
                        <h2 className='text-xl font-thin text-[#e5c698]'>
                           التعريف بمشروع إحياء حديث أهل البيت
                           <span className='text-[#e5c698] mr-2'>(علیهم السلام)</span>
                        </h2>
                        <p className='text-justify'>
                           يستهدف هذا المشروع عرض معلومات حديث أهـل البيـت (علیهم السلام) وفـق
                           منهجية خـلق الصـور المعرفية الشامـلة والمــتكاملة عن طـريق تـنظيـم
                           المقـاطع الجزئيـة المترابـطة التي بيّـنها أهل البيـت (علیهم السلام) في
                           مختلف المواضيع.
                           <Link
                              aria-label='مزید عن المشروع إحياء حديث أهل البيت'
                              href='hadith-of-ahl-al-bayt'
                           >
                              <button className='flex justify-start w-full text-[#e5c698] text-shadow'>
                                 ...للمزید
                              </button>
                           </Link>
                        </p>
                     </div>
                  </div>
               </section>
            </div>
         </div>
      </div>
   )
}

export default Home
