import express from 'express';
import morgan from 'morgan';
// Para parsear los cookie como objecto (Equivale a un JSON parse)
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.router.js';
import taskRoutes from './routes/tasks.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Utilizamos el router donde se indican los endpoints añadiendo /api al principio
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

// Exportamos en index.js
export default app;