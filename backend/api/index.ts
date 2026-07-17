import app from "../src/app"
import db from "../src/db/db"

// Vercel Serverless Function entry point
export default async (req: any, res: any) => {
    // Ensure the database is connected before processing the request
    await db();
    
    // Let the Express app handle the request
    return app(req, res);
};
