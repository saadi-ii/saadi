import mongoose from "mongoose"

// // dotenv is loaded once in server.ts (the entry point).
// // Do NOT import dotenv/config here to avoid double-loading.

// const db = async (): Promise<void> => {
//     const uri = process.env.MONGODB_URI
//     if (!uri) {
//         throw new Error("MONGODB_URI environment variable is not set")
//     }
    
//     await mongoose.connect(uri)
//     console.log("Connected to database")
// }



const db = async (): Promise<void> => {
    const uri = process.env.MONGODB_URI
    
    console.log("URI exists:", !!uri)
    
    if (!uri) {
        throw new Error("MONGODB_URI environment variable is not set")
    }
    
    await mongoose.connect(uri)
    
    console.log("✅ Connected to database")
}
export default db