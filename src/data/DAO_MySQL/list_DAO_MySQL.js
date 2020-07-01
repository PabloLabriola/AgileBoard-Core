import knex from '../../db/db_connection.js'

const db = knex.createDB()

// ver métodos en el controller

// getListById,
// createList,
// editListName,
// deleteList,
// getAllLists

/**
 * @description Obtener una lista
 * @param {Recibe los ids de una lista y de un proyecto}
 * @returns {En caso de éxito, devuelve un objeto lista con sus properties}
 */
async function getListById(id_list, id_project) {
  try {
    let result = await db
      .select()
      .from("lists")
      .where('id_list', id_list)
      .andWhere('id_project', id_project)
      .then(arr => {

        if (arr.length > 0) {

          const LIST = arr[0]

          return {
            id_list: LIST.id_list,
            id_project: LIST.id_project,
            list_name: LIST.list_name,
          }
        } else {
          return {}
        }
      }).catch((err) => {
        console.log(err);
        return err
      })

    // console log
    my_log('list: ' + JSON.stringify(result))
    // function return
    return result
    // exception
  } catch (error) {
    return 'DB err: ' + error;
  }
}

/**
 * @description Crea una lista nueva en la tabla 'lists'
 * @param {Recibe un id de proyecto y un nombre}
 * @returns {En caso de éxito devuelve el ID de la lista creada}
 */
async function createList(id_project, list_name) {
  try {
    let result = await db('lists')
      .insert
      ({ id_project: id_project, list_name: list_name })
    my_log('New list ID: ' + result)
    return result
  } catch (error) {
    return 'DB err: ' + error;
  }
}

/**
 * @description funcion para cambiar el nombre de una lista
 * @param {Recibe un id de lista, un id de tarea y un nuevo nombre}
 * @returns [List]
 */
async function editListName(id_list, id_project, new_name) {
  try {
    let result = await db('lists')
      .where('id_list', id_list)
      .andWhere('id_project', id_project)
      .update
      ({ list_name: new_name }, ['id_list', 'id_project', 'list_name'])

    my_log('List updated: ' + result)
    return result
  } catch (error) {
    return 'DB err: ' + error;
  }
}

/**
* @description Borra una lista de la BD
* @param {Recibe un id de lista y un id de proyecto}
* @returns Rows affected
*/
async function deleteList(id_list, id_project) {
  try {
    let result = await db('lists')
      .where('id_list', id_list)
      .andWhere('id_project', id_project)
      .del()

    my_log('Rows affected: ' + result)
    return result
  } catch (error) {
    return 'DB err: ' + error;
  }
}

/**
 * @description Devuelve un array con todas las listas de un proyecto
 * @param {Recibe un id de proyecto}
 * @returns [lists]
 */
async function getAllLists(id_project) {
  {
    try {
      let result = await db('lists')
        .select()
        .from('lists')
        .where('id_project', id_project)
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
}


// console log
function my_log(data) {
  console.log('\n' + '------------------------------DB response:-------------------------------' + '\n')
  console.log(data)
  console.log('\n' + '-------------------------------------------------------------------------' + '\n')
  console.log('-------------------------------------------------------------------------')
}


export default {
  getListById,
  createList,
  editListName,
  deleteList,
  getAllLists
}

/**
* @author Pablo Labriola
*/