import pool from '../database.js'

export class contactsController {
    static getAllContacts = async (req, res) => {
        try {
            const { rows } = await pool.query("SELECT * FROM contacts")
            res.status(200).json({ data: rows })
        } catch (err) {
            res.status(500).json({ message: "Server Error. Please try again." })
        }
    }

    static getContact = async (req, res) => {
        try {
            const { id } = req.params;
            const { rows } = await pool.query("SELECT * FROM contacts WHERE id = $1", [id])
            if (rows.length === 0) {
                return res.status(404).json({ error: "Contact not found" });
            }
            res.status(200).json({ data: rows })
        } catch (err) {
            res.status(500).json({ error: "Server Error. Please try again." })
        }
    }

    static createContact = async (req, res) => {
        try {
            const { name, number } =  req.body
            if (!name || !number) {
                return res.status(404).json({ error: "All fields are mendatory" })
            }
            const { rows } = await pool.query("INSERT INTO contacts (name, number) VALUES ($1, $2) RETURNING *", [name, number]);
            res.status(201).json({ data: rows[0] });
        } catch (error) {
            res.status(500).json({ error: "Server Error. Please try again." })
        }
    }

    static updateContact = async (req, res) => {
        try {
            const { id } = req.params;
            const { name, number } = req.body;
            const { rows } = await pool.query("UPDATE contacts SET name = $1, number = $2 WHERE id = $3 RETURNING *", [name, number, id]);
            if (rows.length === 0) {
              return res.status(404).json({ error: "Contact not found" });
            }
            res.status(200).json(rows[0]);
        } catch (err) {
            res.status(500).json({ error: "Server Error. Please try again." })
        }
    }
    
    static deleteContact = async (req, res) => {
        try {
            const { id } = req.params;
            const { rows } = await pool.query('DELETE FROM contacts WHERE id = $1 RETURNING *', [id]);
            if (rows.length === 0) {
              return res.status(404).json({ error: "Contact not found" });
            }
            res.status(200).json({ message: "Contact deleted" });
        } catch (err) {
            res.status(500).json({ error: "Server Error. Please try again." })
        }
    }
}
