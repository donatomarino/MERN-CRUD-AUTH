import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
// Exportamos en index.js
export default app;