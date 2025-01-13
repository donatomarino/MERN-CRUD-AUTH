import Task from '../models/task.model.js';

/**
 * Buscamos tasks 
 * @param {*} req 
 * @param {*} res 
 */
export const getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

/**
 * Creamos un nuevo task
 * @param {*} req 
 * @param {*} res 
 */
export const createTask = async (req, res) => {
    const { title, description, date } = req.body;

    const newTask = new Task({
        title,
        description,
        date,
    });

    // Guardamos el task
    const savedTask = await newTask.save();
    res.json(savedTask);
};

/**
 * Buscamos un singolo task por su id
 * @param {*} req 
 * @param {*} res 
 */
export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ nessage: 'Task not found' });
    res.json(task);
};


/**
 * Eliminamos un task por su id
 * @param {*} req 
 * @param {*} res 
*/
export const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) return res.status(404).json({ nessage: 'Task not found' });
    res.json({ message: 'Task updated' });
};

/**
 * Actualizamos un task por su id
 * @param {*} req 
 * @param {*} res 
 */
export const updateTask = async (req, res) => {
    // El req.body serían los datos que queremos actualizar
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // Para que devuelva el task actualizado
    });

    if (!task) return res.status(404).json({ nessage: 'Task not found' });
    res.json({ message: 'Task updated' });
};

