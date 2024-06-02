import type { Metadata } from 'next'

import Bookshelf from '../components/bookshelf'
import book from '@/models/book'
import dbConnect from '@/utils/dbConnect'

// export const revalidate = 0;

export const metadata: Metadata = {
   metadataBase: new URL('https://alhasson.com'),
   title: 'مؤلفات | الدکتور الشیخ علاء الحسّون',
   description: 'دكتوراه في علوم الحديث، ومهتم حالياً بتأليف موسوعة حديث أهل البيت(ع)',

   openGraph: {
      title: 'مؤلفات | الدکتور الشیخ علاء الحسّون',
      description: 'دكتوراه في علوم الحديث، ومهتم حالياً بتأليف موسوعة حديث أهل البيت(ع)',
      url: 'https://alhasson.com/books',
      siteName: 'موقع الدکتور الشیخ علاء الحسّون',
      locale: 'ar',
      type: 'website',
   },
}

const Books = async () => {
   await dbConnect()
   const books = await book.find()

   return (
      <div className='bg-gradient-to-b py-10 md:py-24 min-h-screen px-6 from-[#0d0735] to-[#070515]'>
         <div className='max-w-screen-lg mx-auto'>
            <h1 className='title my-14 text-center'>مؤلفات الشیخ علاء الحسّون</h1>
            <Bookshelf books={books} />
         </div>
      </div>
   )
}

export default Books
