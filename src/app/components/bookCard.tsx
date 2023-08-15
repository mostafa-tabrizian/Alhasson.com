import { Book } from '@prisma/client'
import Image from 'next/legacy/image'
import Link from 'next/link'

const BookCard = ({ book }: { book: Book }) => {
   return (
      <div className='my-3'>
         <Link href={`/${book.title}`}>
            <div className='w-40 md:w-48 h-60 md:h-72 relative rounded hoverGold'>
               <Image
                  className='rounded'
                  src={`/image/book/${book?.cover}`}
                  layout='fill'
                  sizes='(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw'
                  alt={book?.title}
                  objectFit='cover'
                  priority
               />
            </div>
         </Link>
      </div>
   )
}

export default BookCard
