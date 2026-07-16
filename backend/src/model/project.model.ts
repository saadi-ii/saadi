import mongoose, { Schema, Document, Model } from "mongoose"

export interface IProject extends Document {
    image?: string
    projectName?: string
    url?: string
    description?: string
}

const projectSchema: Schema<IProject> = new Schema({
    image: String,
    projectName: String,
    url: String,
    description: String,
})

const projectModel: Model<IProject> = mongoose.model<IProject>("project", projectSchema)
export default projectModel
