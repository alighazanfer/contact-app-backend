import "dotenv/config"
import { Contact } from "../models/contactModel.js"

export class contactsController {
    static getAllContacts = async (req, res) => {
        try {
            const allContacts = await Contact.find();
            res.status(200).json(allContacts);
        } catch (err) {
            res.status(500).json({ message: "Server Error. Please try again." })
        }
    }

    static getContact = async (req, res) => {
        try {
            const { id } = req.params
            const contact = await Contact.findById(id)

            if (!contact) {
                return res.status(404).json({ error: "Contact not found" });
            }

            res.status(200).json(contact);
        } catch (err) {
            res.status(500).json({ error: "Server Error. Please try again." })
        }
    }

    static createContact = async (req, res) => {
        try {
            const { name, number } = req.body;

            if (!name || !number) {
                return res.status(400).json({ error: "All fields are mandatory" });
            }

            const newContact = new Contact({ name, number });
            await newContact.save();

            res.status(201).json(newContact);
        } catch (error) {
            res.status(500).json({ error: "Server Error. Please try again." })
        }
    }

    static updateContact = async (req, res) => {
        try {
            const { id } = req.params;
            const { name, number } = req.body;

            if (!name || !number) {
                return res.status(400).json({ error: "All fields are mandatory" });
            }

            const updatedContact = await Contact.findByIdAndUpdate(
                id,
                { name, number },
                { new: true }
            );

            if (!updatedContact) {
                return res.status(404).json({ error: "Contact not found" });
            }

            res.status(201).json(updatedContact);
        } catch (err) {
            res.status(500).json({ error: "Server Error. Please try again." })
        }
    }
    
    static deleteContact = async (req, res) => {
        try {
            const { id } = req.params;

            const deletedContact = await Contact.findByIdAndDelete(id);

            if (!deletedContact) {
                return res.status(404).json({ error: "Contact not found" });
            }

            res.status(201).json({ message: "Contact deleted" });
        } catch (err) {
            res.status(500).json({ error: "Server Error. Please try again." })
        }
    }
}
