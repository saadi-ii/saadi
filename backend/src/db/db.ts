import mongoose from "mongoose"

// dotenv is loaded once in server.ts (the entry point).
// Do NOT import dotenv/config here to avoid double-loading.

const db = async (): Promise<void> => {
    // In serverless environments like Vercel, global variables persist across invocations.
    // We cache the Mongoose connection to prevent creating a new connection on every request.
    let cached = (global as any).mongoose;

    if (!cached) {
        cached = (global as any).mongoose = { conn: null, promise: null };
    }

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MONGODB_URI environment variable is not set");
        }

        cached.promise = mongoose.connect(uri).then((m) => {
            console.log("✅ Connected to database (Serverless Cached)");
            return m;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
}
export default db;