import mongoose, { Schema, Document, Model } from "mongoose"

export interface IPersonal extends Document {
    image?: string
    name?: string
    about?: string
    phone?: number
    email?: string
    address?: string
    age?: string
    birthday?: string
    degree?: string
    frelance?: string
    nationality?: string
    study?: string
}

const personalSchema: Schema<IPersonal> = new Schema({
    image: String,
    name: String,
    about: String,
    phone: Number,
    email: String,
    address: String,
    age: String,
    birthday: String,
    degree: String,
    frelance: String,
    nationality: String,
    study: String,
})

const personalModel: Model<IPersonal> = mongoose.model<IPersonal>("personal", personalSchema)
export default personalModel
