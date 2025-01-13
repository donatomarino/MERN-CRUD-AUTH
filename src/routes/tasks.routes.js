import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, getTask, createTask, deleteTask, updateTask } from "../controllers/task.controller.js";

const router = Router();

// Tasks CRUD
router.get('/tasks', authRequired, getTasks );
router.get('/tasks/:id', authRequired, getTask);
router.post('/tasks/:id', authRequired, createTask);
router.delete('/tasks/:id', authRequired, deleteTask);
router.put('/tasks/:id', authRequired, updateTask);

export default router;