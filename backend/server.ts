import app from "./src/app"
import db from "./src/db/db"
import "dotenv/config"

const PORT = process.env.PORT

db()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err: unknown) => {
        console.error("Failed to connect to database:", err)
        process.exit(1)
    })
