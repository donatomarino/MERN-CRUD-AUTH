import { TOKEN_SECRET } from "../config.js";
import jwt from 'jsonwebtoken';

export async function createAccessToken(payload){
    // Creamos el token
    return new Promise((resolved, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET, // Clave del token
            {
                expiresIn: "1d", // Cuando expira el token
            },
            (err, token) => {
                if(err) reject(err);
                resolved(token);
            }
        );
    })
}