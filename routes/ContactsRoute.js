import express from "express"
import { contactsController } from "../controllers/ContactsController.js"

export const contactsRouter = express.Router()

contactsRouter.get("/contacts", contactsController.getAllContacts)
contactsRouter
    .get("/contact/:id", contactsController.getContact)
    .post("/contact/:id", contactsController.createContact)
    .put("/contact/:id", contactsController.updateContact)
    .delete("/contact/:id", contactsController.deleteContact)
