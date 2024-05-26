import express from "express"
import cors from "cors"
import "dotenv/config"
import { contactsRouter } from "./src/routes/ContactsRoute.js"
import { connectDatabase } from "./src/db/index.js"
import { STRING_LIMIT } from "./src/constants/index.js"

const PORT = process.env.PORT
const server = express()

connectDatabase()

server.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }))
server.use(express.json({ limit: STRING_LIMIT }))
server.use(express.static("public"))
server.use("/api/v1", contactsRouter)

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
