import mongoose from "mongoose";

// Creamos el schema para la validación y inserción de datos.
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true, // Para que quite los espacios 
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true, // Cada email es unico
    },
    password: {
        type: String,
        required: true,
    }
})

export default mongoose.model('User', userSchema);