import express, { Request, Response, Application, NextFunction } from "express"
import cors from "cors"
import personalModel from "./model/personal.model"
import contactModel from "./model/contact.model"
import skillsModel from "./model/skills.model"
import projectModel from "./model/project.model"

const app: Application = express()

app.use(express.json())
app.use(cors({
    // In production, replace process.env.FRONTEND_URL with your deployed frontend URL
    origin: process.env.FRONTEND_URL
        ? [process.env.FRONTEND_URL]
        : ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST"],
    credentials: true,
}))

app.post("/contact", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { name, email, details, budget } = req.body as {
            name?: string
            email?: string
            details?: string
            budget?: string
        }

        if (!name || !email || !details || !budget) {
            res.status(400).json({ message: "All fields are required." })
            return
        }

        await contactModel.create({ name, email, details, budget })
        res.status(201).json({ message: "created..." })
    } catch (err) {
        next(err)
    }
})

app.get("/about", async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const data = await personalModel.find()
        res.status(200).json({ data })
    } catch (err) {
        next(err)
    }
})

app.get("/skills", async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const data = await skillsModel.find()
        res.status(200).json({ data })
    } catch (err) {
        next(err)
    }
})

app.get("/project", async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const data = await projectModel.find()
        res.status(200).json({ data })
    } catch (err) {
        next(err)
    }
})

// Global error handler — catches any error passed to next()
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction): void => {
    console.error("Server error:", err)
    res.status(500).json({ message: "Internal server error" })
})

export default app
