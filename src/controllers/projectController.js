import FactoryProject from "../models/projectModel.js";
import dao from '../data/daoDB.js'

const projectDAO = dao.Project()
const listDAO = dao.List()
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
    
    //obtengo las listas del proyecto
    let lists = await listDAO.getAllLists(id)    
    project.setLists(lists)
    let newProject = new FactoryProject(project.id, project.admin, project.name, lists)   

    // console log
    log(project);

    return res.json(project)
    //return res.json(newProject)

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
async function createProject(req, res) {
  try {
    const admin = req.body.id_admin 
    const name = req.body.project_name
    log(admin + ' ' +name );
    let project_id = await projectDAO.createProject(admin, name)

    // console log
    log(project_id);

    let project = await projectDAO.getProjectById(project_id)

    return res.json(project)

  } catch (error) {
    console.log('Project controller getStats error: ' + error);
  }
}

async function getProjectStats(req, res) {
  try {
    let stats = await projectDAO.getProjectStats()

    // console log
    log(stats);

    return res.json(stats)

  } catch (error) {
    console.log('Project controller getStats error: ' + error);
  }
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
};

/**
* @author Pablo Rondeau
*/



