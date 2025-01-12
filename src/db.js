import mongoose from "mongoose";

// Conección a la base de datos
export const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost/merndb');
        console.log(">>> DB is connected");
    } catch(e){
        console.log("Error de conexión: ", e);
    }
}