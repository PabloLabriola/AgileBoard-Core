import express from 'express'
import project from "../controllers/projectController.js";
import list from "../controllers/listController.js"

const router = express.Router();

/**
* @description Rutas del proyecto
*/
router.get('/getProject', project.getProjectById)
router.get('/getProjectActionHistory', project.getProjectActionHistory)
router.get('/getLists', project.getLists)
router.post('/createProject', project.createProject)

/**
* @description Rutas de las listas
*/
router.get('/getTaskFromList', list.getTaskFromList)
router.delete('/deleteTraskFromList', list.deleteTraskFromList)

/**
* @description Rutas de las tareas
*/
router.post('/editTaskFromList', task.editTaskFromList)
router.post('/createTaskInList', task.createTaskInList)

/**
* @description Rutas de las estadísticas
*/
router.get('/getProjectStats', project.getProjectStats)
router.get('/getProjectStatsById', project.getProjectStatsById)


export default router 

/**
* @description Router
* @author Dario Di Gulio
*/
