import app from "./src/app"
import db from "./src/db/db"
import "dotenv/config"

const PORT = process.env.PORT ?? 7000

// Await DB connection before starting the server so the app doesn't serve
// requests when the database is not yet connected.
db()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err: unknown) => {
        console.error("Failed to connect to database:", err)
        process.exit(1) // Exit cleanly instead of running without a DB
    })
