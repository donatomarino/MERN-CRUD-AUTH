// Importar aplicaciónes cuando las exportas utilizando: export default app
import app from "./app.js";
// Importar función cuando en lugar de exportarla como la anterior, la exportas sin el default
import { connectDB } from "./db.js";

connectDB();
app.listen(3001);
console.log('Server on port', 3001);