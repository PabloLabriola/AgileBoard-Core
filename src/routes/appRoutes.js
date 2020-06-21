import express from 'express'
import project from "../controllers/projectController";

const router = express.Router();

/**
* @description Rutas del proyecto
*/
router.get('/getProject', project.getProjectById)
router.get('/getProjectActionHistory', project.getProjectActionHistory)
router.get('/getLists', project.getLists)
router.post('/createProject', project.createProject)

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
