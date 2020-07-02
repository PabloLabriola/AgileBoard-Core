import dao from '../data/daoDB.js'


const taskDAO = dao.Task()

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

async function createTask(req, res) {
  try {
    const id_list = req.body.id_list
    const name_task = req.body.name_task
    const description_task = req.body.description_task    
    
    let id_task = await taskDAO.createTask(id_list, name_task, description_task)

    // console log
    log(id_task);

    let task = await taskDAO.getTaskById(id_task, id_list)

    return res.json(id_task)

  } catch (error) {
    console.log('el error: ' + error);
  }
}

async function editTask(req, res) {
  try {
    const id_task = req.body.id_task
    const id_list = req.body.id_list
    const name_task = req.body.name_task
    const description_task = req.body.description_task    
    
    await taskDAO.editTaskName(id_list, id_task, name_task)
    await taskDAO.editTaskDescription(id_list, id_task, description_task)

    // console log
    log(id_task);

    let task = await taskDAO.getTaskById(id_task, id_list)

    return res.json(task)

  } catch (error) {
    console.log('el error: ' + error);
  }
}

async function deleteTask(req, res) {
  try {
    const id_task = req.body.id_task
    const id_list = req.body.id_list    
    
    await taskDAO.deleteTask(id_task, id_list)

    // console log
    log(id_task);   

    return res.json(id_task)

  } catch (error) {
    console.log('el error: ' + error);
  }
}

async function getAllTasks(req, res) {
  try {
    const id_list = req.body.id_list

    console.log(id_list);
    
    let task = await taskDAO.getAllTasks(id_list)

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
* @author Pablo Rondeau
*/
