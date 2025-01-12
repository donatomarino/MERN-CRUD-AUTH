import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Incriptamos la contraseña
        const passwordHash = await bcrypt.hash(password, 10);

        // Creamos el user según el modelo mongoose 
        const newUser = new User({
            username,
            email,
            password: passwordHash
        });

        // Guardamos una costante para coger todos los datos del user y no solamente username, email, password. 
        // El .save permite guardar el user en mongo
        const userSaved = await newUser.save();

        // Llamamos a la función para crear el token
        const token = await createAccessToken({id: userSaved.id});

        // Guardamos el token en el cookie
        res.cookie('token', token)
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updateAt: userSaved.updatedAt
        });
    } catch (e) {
        console.log("Error", e);
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscamos el usuario
        const userFound = await User.findOne({email});
        // Si no encuentra ningun usuario sale el message de error
        if(!userFound) return res.status(400).json({ message: "User not found"});

        // Compara si la password insertada corresponde a la del user indicado
        const isMatch = await bcrypt.compare(password, userFound.password);
        // Si la password no coincide, devuelve error
        if(!isMatch) return res.status(400).json({ message: "Incorrect password"});

        // Llamamos a la función para crear el token
        const token = await createAccessToken({id: userFound._id});

        // Guardamos el token en el cookie
        res.cookie('token', token)
        res.json({
            id: userFound.id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updateAt: userFound.updatedAt
        });
    } catch (e) {
        console.log("Error", e);
    }
}

export const logout = (req, res) => {
    // Cuando haces logout se borra el token del cookie
    res.cookie('token', "",  {
        expires: new Date(0) 
    })
    return res.sendStatus(200);
} 
