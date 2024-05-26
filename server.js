import express from "express"
import "dotenv/config"
import { contactsRouter } from "./src/routes/ContactsRoute.js"

const PORT = process.env.PORT
const server = express()

server.use(express.json())
server.use("/api/v1", contactsRouter)

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
