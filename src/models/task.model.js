import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now, // fecha actual
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, // Hace referencia al id de un usuario
        ref: "User", // Hace referencia al modelo User
        required: true,
    }
}, {
    timestamps: true
})

export default mongoose.model("Task", taskSchema);