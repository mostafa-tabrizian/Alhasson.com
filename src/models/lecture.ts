import mongoose from 'mongoose'

export interface ILecture {
   _id: string
   title: string
   source: string
   description: string
   publishedAt: Date
   createdAt: Date
   updatedAt: Date
}

const LectureSchema = new mongoose.Schema({
   title: String,
   source: String,
   description: String,
   publishedAt: Date,
})

LectureSchema.set('timestamps', true)

export default mongoose.models.Lecture || mongoose.model('Lecture', LectureSchema)
