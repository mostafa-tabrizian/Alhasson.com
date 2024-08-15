import { IBook } from '@/models/book'
import Image from 'next/image'
import Link from 'next/link'

const BookCard = ({ book }: { book: IBook }) => {
   return (
      <div className='my-3'>
         <Link href={`/${book.title}`}>
            <div className='w-40 md:w-48 h-60 md:h-72 relative rounded hoverGold'>
               <Image
                  className='rounded object-cover'
                  src={`https://tabrizian.storage.iran.liara.space/alhasson/image/book/${book?.cover}`}
                  fill
                  sizes='(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw'
                  alt={book?.title}
                  priority
               />
            </div>
         </Link>
      </div>
   )
}

export default BookCard
