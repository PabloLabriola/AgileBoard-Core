import express from 'express'
import project from "../controllers/projectController.js";
import list from "../controllers/listController.js"
import task from "../controllers/taskController.js"
import mailer from "../controllers/mailer.js"

const router = express.Router();

/**
* @description Rutas del proyecto
*/
router.post('/createProject', project.createProject)
router.get('/getProject', project.getProjectById)
router.get('/getProjectStats', project.getProjectStats)

/**
* @description Rutas de las listas
*/
router.get('/getLists', list.getListById)
router.get('/getTask', task.getTaskById)
router.delete('/deleteTaskFromList', task.deleteTask)

/**
* @description Rutas de las tareas
*/
router.post('/editTaskFromList', task.editTask)
router.post('/createTaskInList', task.createTask)
router.get('/getAllTasksFromList', task.getAllTasks)


/**
* @description Rutas del envío de mails
*/
router.post('/testMailer', mailer.sendMail)

/**
* @description Rutas de las estadísticas
*/
router.get('/getProjectStats', project.getProjectStats)


export default router 

/**
* @description Router
* @author Dario Di Gulio
*/
