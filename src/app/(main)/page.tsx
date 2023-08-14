import Image from "next/legacy/image"
import Link from 'next/link'
import type { Metadata } from 'next'

import { prisma } from '@/lib/prisma'
import Bookshelf from './components/bookshelf'

async function getBooks() {
   return await prisma.book.findMany().then((res) => res)
}

async function getFirstLecture() {
   return await prisma.lecture.findFirst().then((res) => res)
}

export const metadata: Metadata = {
   metadataBase: new URL('https://alhasson.com'),
   title: 'موقع الدکتور الشیخ علاء الحسّون',
   description: 'دكتوراه في علوم الحديث، ومهتم حالياً بتأليف موسوعة حديث أهل البيت(ع)',
}

async function Home() {
   const books = await getBooks()
   const lecture = await getFirstLecture()

   return (
      <div>
         <section className='w-full pt-10 md:pt-20 bg-[#070515] h-full relative'>
            <Image
               className='md:hidden'
               alt='الدکتور شیخ علاء الحسون'
               src='/image/landpageSM2.jpg'
               width={0}
               height={0}
               sizes='100vw'
               style={{ width: '100%', height: 'auto' }}
               priority
               unoptimized
            />
            <Image
               className='hidden md:block'
               alt='الدکتور شیخ علاء الحسون'
               src='/image/landpage.jpg'
               width={0}
               height={0}
               sizes='100vw'
               style={{ width: '100%', height: 'auto' }}
               priority
               unoptimized
            />
         </section>
         <div className=' bg-gradient-to-b from-[#0d0735] to-[#070515]'>
            <div className='max-w-screen-lg mx-auto'>
               <section className='py-10 mx-6 overflow-x-hidden'>
                  <div className='flex justify-between'>
                     <Link href='books'>مشاهدة الجمیع</Link>
                     <h1>المؤلفات</h1>
                  </div>

                  <Bookshelf books={books} />
               </section>

               <section className='py-10 px-6'>
                  <div className='flex justify-between'>
                     <Link href='lectures'>مشاهدة الجمیع</Link>
                     <h1>المحاضرات</h1>
                  </div>
                  <div className='p-5'>
                     {lecture ? (
                        <div className=''>
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
                     ) : (
                        ''
                     )}
                  </div>
               </section>

               <section className='pt-10 pb-20 px-6'>
                  <div className='grid md:flex md:flex-row-reverse'>
                     <div className='flex mx-6 mb-6 justify-center md:w-[70vw]'>
                        <Image
                           width={0}
                           height={0}
                           sizes='100vw'
                           style={{ width: '100%', height: 'auto' }}
                           className='rounded-lg'
                           src='/image/marefe.jpg'
                           alt='الدکتور-الشیخ-علاء-الحسّون'
                        />
                     </div>
                     <div className='pr-4 text-right border-r border-orange-200'>
                        <h1 className='text-orange-200'>
                           التعريف بمشروع إحياء حديث أهل البيت
                           <span className='text-orange-200 mr-2'>(علیهم السلام)</span>
                        </h1>
                        <p className='text-justify'>
                           يستهدف هذا المشروع عرض معلومات حديث أهـل البيـت (علیهم السلام) وفـق
                           منهجية خـلق الصـور المعرفية الشامـلة والمــتكاملة عن طـريق تـنظيـم
                           المقـاطع الجزئيـة المترابـطة التي بيّـنها أهل البيـت (علیهم السلام) في
                           مختلف المواضيع.
                           <Link href='hadith-of-ahl-al-bayt'>
                              <button className='flex justify-start w-full text-orange-200 text-shadow'>
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
