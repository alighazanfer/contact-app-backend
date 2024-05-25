export class contactsController {
    static getAllContacts = (req, res) => {
        res.status(200).json({ message: "All contacts" })
    }

    static getContact = (req, res) => {
        res.status(200).json({ message: "single Contact" })
    }

    static createContact = (req, res) => {
        const {name, number} =  req.body
        if (!name || !number) throw new Error("All fields are mendatory")
        res.status(201).json({ name, number })
    }

    static updateContact = (req, res) => {
        res.status(201).json({ message: "Contact updated" })
    }
    
    static deleteContact = (req, res) => {
        res.status(201).json({ message: "Contact deleted" })
    }
}
