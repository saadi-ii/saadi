import mongoose from "mongoose"

// dotenv is loaded once in server.ts (the entry point).
// Do NOT import dotenv/config here to avoid double-loading.

const db = async (): Promise<void> => {
    const uri = process.env.MONGODB_URI
    if (!uri) {
        throw new Error("MONGODB_URI environment variable is not set")
    }

    console.log("URI exists:", !!process.env.MONGODB_URI);

await mongoose.connect(uri);

console.log("Connected to database");
    console.log("Connected to database")
}

export default db
