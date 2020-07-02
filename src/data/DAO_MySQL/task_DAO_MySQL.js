import knex from '../../db/db_connection.js'

const db = knex.createDB()

// ver métodos en el controller

// createTask,
// getTask,
// editTaskName,
// editTaskDescription,
// deleteTask,
// getAllTasks

/**
 * @description Obtener una tarea
 * @param {Recibe los ids de una lista y de una tarea}
 * @returns {En caso de éxito, devuelve un objeto tarea con sus properties}
 */
async function getTaskById(id_task, id_list) {
  try {
    let result = await db
      .select()
      .from("tasks")
      .where('id_task', id_task)
      .andWhere('id_list', id_list)
      .then(arr => {

        if (arr.length > 0) {

          const TASK = arr[0]

          return {
            id_task: TASK.id_task,
            id_list: TASK.id_list,
            task_name: TASK.task_name,
            task_description: TASK.task_description,
            task_created_at: TASK.task_created_at
          }
        } else {
          return {}
        }
      }).catch((err) => {
        console.log(err);
        return err
      })

    // console log
    my_log('task: ' + JSON.stringify(result))
    // function return
    return result
    // exception
  } catch (error) {
    return 'DB err: ' + error;
  }
}

/**
 * @description Crea una tarea nueva en la tabla 'tasks'
 * @param {Recibe una lista, un nombre y una descripcion}
 * @returns {En caso de éxito devuelve el ID de la tarea creada}
 */
async function createTask(id_list, task_name, task_description, timestamp) {
  try {
    let result = await db('tasks')
      .insert
      ({ id_list: id_list, task_name: task_name, task_description: task_description, task_created_at: timestamp })
    my_log('New task ID: ' + result)
    return result
  } catch (error) {
    return 'DB err: ' + error;
  }
}

/**
 * @description funcion para cambiar el nombre de una tarea
 * @param {Recibe un id de lista, un id de tarea y un nuevo nombre}
 */
async function editTaskName(id_list, id_task, new_name) {
  try {
    let result = await db('tasks')
      .where('id_list', id_list)
      .andWhere('id_task', id_task)
      .update
      ({task_name: new_name})
    my_log('Task updated: ' + result)
    return result
  } catch (error) {
    return 'DB err: ' + error;
  }
}

/**
 * @description funcion para cambiar la descripcion de una tarea
 * @param {Recibe un id de lista, un id de tarea y una nueva descripcion}
 */
async function editTaskDescription(id_list, id_task, new_desc) {
  try {
    let result = await db('tasks')
      .where('id_list', id_list)
      .andWhere('id_task', id_task)
      .update
      ({task_description:new_desc})

    my_log('Task updated: ' + result)
    return result
  } catch (error) {
    return 'DB err: ' + error;
  }
}

/**
 * @description Borra una tarea de la BD
 * @param {Recibe un id de lista}
 * @returns [tasks]
 */
async function deleteTask(id_task, id_list) {
  try {
    let result = await db('tasks')
      .where('id_task', id_task)
      .andWhere('id_list', id_list)
      .del()

    my_log('Rows affected: ' + result)
    return result
  } catch (error) {
    return 'DB err: ' + error;
  }
}

/**
 * @description Devuelve un array con todas las tareas de una lista
 * @param {Recibe un id de lista}
 * @returns [tasks]
 */
async function getAllTasks(id_list) {
  try {
    let result = await db('tasks')
      .select()
      .from("tasks")
      .where('id_list', id_list)
      .then((arr) => {
        if (arr.length > 0) {       // knex always returns an array of recs
          return arr
        } else {
          return {}
        }
      })
    my_log('Arr: ' + result)
    return result
  } catch (error) {
    return 'DB err: ' + error;
  }
}

// console log
function my_log(data) {
  console.log('\n' + '------------------------------DB response:-------------------------------' + '\n')
  console.log(data)
  console.log('\n' + '-------------------------------------------------------------------------' + '\n')
  console.log('-------------------------------------------------------------------------')
}


export default {
  getTaskById,
  createTask,
  editTaskName,
  editTaskDescription,
  deleteTask,
  getAllTasks
};

/**
* @author Pablo Labriola
*/