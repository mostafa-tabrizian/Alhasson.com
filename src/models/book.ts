import mongoose from 'mongoose'

export interface IBook {
   _id: string
   title: string
   cover: string
   publishedAt: number
   publisher: string
   pages: number
   description: string
   isbn: string
   PDFFile: string
   WORDFile: string
   HTMLFILE: string
   createdAt: Date
   updatedAt: Date
}

const BookSchema = new mongoose.Schema({
   title: String,
   cover: String,
   publishedAt: Number,
   publisher: String,
   pages: Number,
   description: String,
   isbn: String,
   PDFFile: String,
   WORDFile: String,
   HTMLFILE: String,
})

BookSchema.set('timestamps', true)

export default mongoose.models.Book || mongoose.model('Book', BookSchema)
