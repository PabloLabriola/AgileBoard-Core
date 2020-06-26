import Project from "../models/projectModel.js";
import CustomError from '../errors/customError.js'
const projectModel = new Project();
import Projectoo from "../DAO_MySQL/project_dao_mysql.js";

/**
 * @description Obtener un proyecto a través de su id
 * @param {Recibe el id de un proyecto existente}
 * @validate Valida que el id del proyecto corresponda a uno existente
 * @returns {En caso de éxito devuelve un objeto proyecto con su nombre, descripción y listas}
 */
async function getProjectById(req, res) {
  console.log('req: ' + req.body.id)
  await Projectoo.pt()
  res.json(req.body.id)
  // const result = await projectModel.getProjectById(req.body.id) 
  // console.log(result)
  // res.json(result)

    /* try {      

        // var result = new Project(id, admin, name)
        const result = projectModel.getProjectById(req.body.id)   
        res.status(200)
        res.send(result)

    } catch (error) {
        // throw new CustomError(500, 'error al obtener el proyecto', error)
        console.log(error);
        
    } */

}

/**
 * @description Crear un proyecto
 * @param {Recibe el nombre del nuevo proyecto}
 * @param {Recibe una descripción del nuevo proyecto}
 * @validate Valida que el nombre del proyecto no exista previamente
 * @returns {En caso de éxito devuelve un objeto proyecto con su nombre y descripción}
 */
async function createProject(name, description) {
  return "Hola mundo";
}

async function getProjectStats(id) {
  return "Hola mundo";
}

async function getProjectStatsById(id) {
  return "Hola mundo";
}

async function getProjectActionHistory(id) {
  return "Hola mundo";
}

function getLists(res, req) {
  // const lists = await projectModel.getList(req.body.idProject);
  // return JSON.stringify(lists);
  return "hola mudno"
}

export default {
  getProjectById,
  createProject,
  getProjectStats,
  getProjectStatsById,
  getProjectActionHistory,
  getLists,
};
