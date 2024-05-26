import { Schema, model } from "mongoose";

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
        unique: true
    }
}, { timestamps: true })

export const Contact = model("Contact", contactSchema)
