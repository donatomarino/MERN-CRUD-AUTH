import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.router.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

// Utilizamos el router donde se indican los endpoints
app.use("/api", authRoutes);

// Exportamos en index.js
export default app;