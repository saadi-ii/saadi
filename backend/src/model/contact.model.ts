import mongoose, { Schema, Document, Model } from "mongoose"

export interface IContact extends Document {
    name?: string
    email?: string
    details?: string
    budget?: string
}

const contactSchema: Schema<IContact> = new Schema({
    name: String,
    email: String,
    details: String,
    budget: String,
})

const contactModel: Model<IContact> = mongoose.model<IContact>("contact", contactSchema)
export default contactModel
