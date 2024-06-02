// import { Metadata } from 'next'
import Image from 'next/legacy/image'
import type { Metadata } from 'next'
import book from '@/models/book'
import dbConnect from '@/utils/dbConnect'

type Props = {
   params: { bookTitle: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const book = await getBook(params.bookTitle)

   return {
      metadataBase: new URL('https://alhasson.com'),
      title: book?.title,
      description: book?.description,
      openGraph: {
         title: book?.title,
         description: book?.description,
         url: 'https://alhasson.com/' + book?.title,
         siteName: 'موقع الدکتور الشیخ علاء الحسّون',
         images: [
            {
               url: 'https://alhasson.com/image/book/' + book?.cover,
               width: 800,
               height: 600,
            },
         ],
         locale: 'ar',
         type: 'website',
      },
   }
}

const getBook = async (bookTitle: string) => {
   await dbConnect()
   return await book.findOne({
      title: decodeURI(bookTitle),
   })
}

const Book = async ({ params }: { params: { bookTitle: string } }) => {
   const book = await getBook(params.bookTitle)

   const jsonLd = [
      {
         '@context': 'https://schema.org/',
         '@type': 'Product',
         name: `کتاب ${book?.title}`,
         description: book?.description,
         image: 'https://alhasson.com/image/book/' + book?.cover,
         offers: {
            '@type': 'Offer',
            price: 0,
            priceCurrency: 'IRR',
         },
      },
      {
         '@context': 'http://schema.org',
         '@type': 'Book',
         id: `https://alhsson.com/${book?.title}`,
         url: `https://alhsson.com/${book?.title}`,
         name: `کتاب ${book?.title}`,
         image: `https://alhsson.com/image/book/${book?.cover}`,
         author: {
            '@type': 'Person',
            name: 'الدکتور شیخ علاء الحسون',
            sameAs: [
               'https://instagram.com/alaa_alhassoon',
               'https://t.me/alhassoon',
               'https://www.facebook.com/profile.php?id=100003133071075&fref=nf',
               'https://twitter.com/Alaa354Alaa',
            ],
         },
         publisher: {
            '@type': 'Organization',
            name: 'مرکز حدیث أهل البیت',
         },
         genre: 'Islamic religious',
         workExample: [
            {
               '@type': 'Book',
               id: `https://alhsson.com/${book?.title}`,
               url: `https://alhsson.com/${book?.title}`,
               datePublished: book?.publishedAt,
               isbn: book?.isbn,
               publisher: {
                  '@type': 'Organization',
                  name: book?.publisher,
               },
               bookFormat: 'Ebook',
               inLanguage: 'ar',
               bookEdition: 'بی دی اف | داکیومنت',
               potentialAction: {
                  '@type': 'ReadAction',
                  target: {
                     '@type': 'EntryPoint',
                     urlTemplate: `https://alhsson.com/${book?.title}`,
                     actionPlatform: [
                        'http://schema.org/DesktopWebPlatform',
                        'http://schema.org/IOSPlatform',
                        'http://schema.org/AndroidPlatform',
                     ],
                     inLanguage: 'ar',
                  },
                  expectsAcceptanceOf: {
                     '@type': 'Offer',
                     category: 'free',
                     price: '0',
                     priceCurrency: 'IRR',
                     eligibleRegion: {
                        '@type': 'Country',
                        name: 'IR',
                     },
                  },
               },
            },
         ],
      },
   ]

   return (
      <>
         <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
         />

         <div className='bg-gradient-to-b min-h-screen flex justify-cneter items-center py-10 px-6 from-[#070515] to-[#0d0735]'>
            {book ? (
               <div className='max-w-screen-lg mx-auto relative md:flex mt-14 md:my-52'>
                  <a href={`/image/book/${book?.cover}`} target='_blank' rel='noreferrer'>
                     <div className='relative hoverGold w-[19rem] h-[28rem] md:w-[23.4rem] md:h-[35rem] mx-6 md:mx-0'>
                        <Image
                           layout='fill'
                           objectFit='contain'
                           className='rounded'
                           src={`/image/book/${book?.cover}`}
                           alt={book?.title}
                           priority
                        />
                     </div>
                  </a>
                  <div className='max-w-screen-sm md:ml-10'>
                     <h1 className='title my-6'> {book?.title} </h1>
                     <div className='md:flex flex-row-reverse flex-wrap grid space-x-5 justify-evenly'>
                        <div className='flex space-x-3 mb-2 items-center justify-end'>
                           <h2>
                              <span className='text-sm font-thin'>الناشر</span> : {book?.publisher}
                           </h2>
                        </div>

                        <div className='flex space-x-3 mb-2 items-center justify-end'>
                           <h2>
                              <span className='text-sm font-thin'>تاريخ النشر</span> :{' '}
                              {Math.floor(book?.publishedAt)}
                           </h2>
                        </div>

                        <div className='flex space-x-3 mb-2 items-center justify-end'>
                           <h2>
                              <span className='text-sm font-thin'>عدد الصفحات</span> : {book?.pages}
                           </h2>
                        </div>
                     </div>
                     <div className='flex items-center justify-end mt-5'>
                        {book?.WORDFile && (
                           <a
                              href={`/doc/${book?.WORDFile}`}
                              target='_blank'
                              rel='noreferrer'
                              className='relative w-11 h-11'
                           >
                              <Image
                                 layout='fill'
                                 objectFit='contain'
                                 className='hidden md:block'
                                 alt='ملف ورد'
                                 src='/image/icon-word.png'
                              />
                           </a>
                        )}
                        {book?.PDFFile && (
                           <a
                              href={`/pdf/${book?.PDFFile}`}
                              target='_blank'
                              rel='noreferrer'
                              className='relative w-11 h-11'
                           >
                              <Image
                                 layout='fill'
                                 objectFit='contain'
                                 className='hidden md:block'
                                 alt='ملف بی دی اف'
                                 src='/image/icon-pdf.png'
                              />
                           </a>
                        )}
                        {book?.HTMLFILE && (
                           <a
                              href={`/html/${book?.HTMLFILE}`}
                              target='_blank'
                              rel='noreferrer'
                              className='relative w-11 h-11'
                           >
                              <Image
                                 layout='fill'
                                 objectFit='contain'
                                 className='hidden md:block'
                                 alt='ملف اش تی ام ال'
                                 src='/image/icon-html.png'
                              />
                           </a>
                        )}
                     </div>

                     <br />
                     <hr />

                     <div className='text-right'>
                        <h3>: هذا الکتاب</h3>
                        <br />
                        <p
                           className='text-justify'
                           dangerouslySetInnerHTML={{ __html: book.description }}
                        ></p>
                     </div>
                  </div>
               </div>
            ) : (
               <h1>لم يتم العثور على الكتاب المطلوب </h1>
            )}
         </div>
      </>
   )
}

export default Book
