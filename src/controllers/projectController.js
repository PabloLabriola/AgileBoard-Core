import FactoryProject from "../models/projectModel.js";
import CustomError from '../errors/customError.js'
import dao from '../data/daoFactory.js'

/**
 * @description Obtener una entidad a traves de un string con su nombre
 * @param {'project','list,'task'}
 */
const projectDAO = dao('project')

/**
 * @description Obtener un proyecto a través de su id
 * @param {Recibe el id de un proyecto existente}
 * @validate Valida que el id del proyecto corresponda a uno existente
 * @returns {En caso de éxito devuelve un objeto proyecto con su nombre, descripción y listas}
 */
async function getProjectById(req, res) {
  try {
    const id = req.body.id
    let project = await projectDAO.getProjectById(id)

    // console log
    log(project);

    return res.json(project)

  } catch (error) {
    console.log('el error: ' + error);
  }
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


    // console log
    function log(data) {
      console.log('\n' + '-------------------Project Controller result:----------------------------' + '\n');
      console.log(data);
      console.log('\n' + '-------------------------------------------------------------------------' + '\n');
    }
    
export default {
  getProjectById,
  createProject,
  getProjectStats,
  getProjectStatsById,
  getProjectActionHistory,
  getLists,
};

