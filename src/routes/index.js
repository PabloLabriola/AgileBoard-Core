import express from 'express'
import project from "../controllers/projectController.js";
import list from "../controllers/listController.js"
import task from "../controllers/taskController.js"

const router = express.Router();

/**
* @description Rutas del proyecto
*/
router.get('/getProject', project.getProjectById)
router.get('/getLists', list.getListById)
router.post('/createProject', project.createProject)

/**
* @description Rutas de las listas
*/
router.get('/getTask', task.getTaskById)
router.delete('/deleteTaskFromList', task.deleteTask)

/**
* @description Rutas de las tareas
*/
router.post('/editTaskFromList', task.editTask)
router.post('/createTaskInList', task.createTask)
router.get('/getAllTasksFromList', task.getAllTasks)



/**
* @description Rutas de las estadísticas
*/
router.get('/getProjectStats', project.getProjectStats)


export default router 

/**
* @description Router
* @author Dario Di Gulio
*/
