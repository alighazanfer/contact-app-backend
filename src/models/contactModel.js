import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true,
        unique: true
    }
})

export const Contact = mongoose.model("Contact", contactSchema)
