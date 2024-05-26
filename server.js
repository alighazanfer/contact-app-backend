import "dotenv/config"
import express from "express"
import { contactsRouter } from "./src/routes/ContactsRoute.js"
import { connectDatabase } from "./src/db/index.js"

const PORT = process.env.PORT
const server = express()

connectDatabase()

server.use(express.json())
server.use("/api/v1", contactsRouter)

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
