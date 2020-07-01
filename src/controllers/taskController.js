import Task from '../models/taskModel.js'
import dao from '../data/daoFactory.js'

/**
 * @description Obtener una entidad a traves de un string con su nombre
 * @param {'project','list,'task'}
 */
const taskDAO = dao('task')

async function getTaskById(req, res) {
  try {
    const id_list = req.body.id_list
    const id_task = req.body.id_task

    console.log(id_list + id_task);
    
    let task = await taskDAO.getTaskById(id_task, id_list)

    // console log
    log(task);

    return res.json(task)

  } catch (error) {
    console.log('el error: ' + error);
  }
}

async function createTask(id_list, id_task) {
  return "hola mundo";
}

async function editTask(id_list, id_task) {
  return "hola mundo";
}



async function deleteTask(id_list, id_task) {
  return "hola mundo";
}

async function getAllTasks(req, res) {
  try {
    const id_list = req.body.id_list

    console.log(id_list);
    
    let task = await taskDAO.getTaskById(id_list)

    // console log
    log(task);

    return res.json(task)

  } catch (error) {
    console.log('el error: ' + error);
  }
}


// console log
function log(data) {
  console.log('\n' + '-------------------Project Controller result:----------------------------' + '\n');
  console.log(data);
  console.log('\n' + '-------------------------------------------------------------------------' + '\n');
}

export default {
  createTask,
  getTaskById,
  editTask,
  deleteTask,
  getAllTasks
}

/**
* @author Pablo Labriola
*/
