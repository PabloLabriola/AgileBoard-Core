import express from 'express'
import project from "../controllers/projectController.js";
import list from "../controllers/listController.js"
import task from "../controllers/taskController.js"
import mailer from "../controllers/mailer.js"

const router = express.Router();

/**
* @description Rutas del proyecto
*/
router.get('/getProject', project.getProjectById)
router.get('/getProjectStats', project.getProjectStats)
router.post('/createProject', project.createProject)

/**
* @description Rutas de las listas
*/
router.get('/getList', list.getListById)
router.get('/getAllListsFromProject', list.getAllLists)
router.post('/createListInProject', list.createList)
router.post('/editListName', list.editListName)
router.delete('/deleteList', list.deleteList)
/**
* @description Rutas de las tareas
*/
router.get('/getTask', task.getTaskById)
router.get('/getAllTasksFromList', task.getAllTasks)
router.post('/editTaskFromList', task.editTask)
router.post('/createTaskInList', task.createTask)
router.delete('/deleteTaskFromList', task.deleteTask)

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
