'use client'

import BookCard from '@/app/components/bookCard'
import { IBook } from '@/models/book'

const Bookshelf = ({ books }: { books: IBook[] }) => {
   books.sort((a, b) => b.publishedAt - a.publishedAt)

   return (
      <div className='grid grid-cols-2 w-fit rtl mx-auto gap-x-6 md:grid-cols-4'>
         {books?.map((book) => {
            return (
               <div key={book._id}>
                  <BookCard book={book} />
               </div>
            )
         })}
      </div>
   )
}

export default Bookshelf
