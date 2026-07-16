import mongoose, { Schema, Document, Model } from "mongoose"

export interface ISkill extends Document {
    image?: string
    name?: string
    percentage?: string
}

const skillsSchema: Schema<ISkill> = new Schema({
    image: String,
    name: String,
    percentage: String,
})

const skillsModel: Model<ISkill> = mongoose.model<ISkill>("skills", skillsSchema)
export default skillsModel
