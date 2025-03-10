import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

// next en lugar que retorna una respuesta le indicas que si hay un token continua la ejecución si no responde un mensaje de error 
export const authRequired = (req, res, next) => {
    const {token} = req.cookies;
    
    // Si no hay token, responde con un mensaje de error
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied!" });
    }
    
    // Verificar il token
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if(err) return res.status(401).json({ message: "Token is not valid!" });

        req.user = user;
        next();
    }
)};