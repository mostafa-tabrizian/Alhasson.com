'use client'

import { Book } from '@prisma/client'
import BookCard from '@/app/components/bookCard'

const Bookshelf = ({ books }: { books: Book[] }) => {
   books.sort((a, b) => b.publishedAt - a.publishedAt)

   return (
      <div className='p-5'>
         <div className='grid grid-cols-2 md:grid-cols-4'>
            {books?.map((book) => {
               return (
                  <div key={book.id}>
                     <BookCard book={book} />
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default Bookshelf
