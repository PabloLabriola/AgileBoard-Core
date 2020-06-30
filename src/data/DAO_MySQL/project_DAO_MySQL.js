import knex from '../../db/db_connection.js'

const db = knex.createDB()


/* ver métodos en el controller */

// getProjectById
// createProject
// getProjectStats
// getProjectStatsById
// getProjectActionHistory

/**
 * @description Obtener un proyecto a través de su id
 * @param {Recibe el id de un proyecto existente}
 * @validate Valida que el id del proyecto corresponda a uno existente
 * @returns {En caso de éxito devuelve un objeto proyecto con sus properties}
 */
async function getProjectById(id) {
  try {
    let result = await db
      .select()
      .from('projects')
      .where('id_project', id)
      .then(row => {
        if (row.length > 0) {
          let data = row[0]

          let project = {
            id_project: data.id_project,
            id_admin: data.id_admin,
            project_name: data.project_name
          }
          // console log
          log(project)

          return project
        } else {
          return "Empty project"
        }
      }).catch((err) => {
        console.log(err);
        return err
      })

    return result

  } catch (error) {
    return 'DB err: ' + error;
  }
}

/**
 * @description Crea un proyecto nuevo en la tabla 'projects'
 * @param {Recibe una clave de admin y un nombre de proyecto}
 * @returns {En caso de éxito devuelve el ID del proyecto creado}
 */
async function createProject(admin, name) {
  try {
    let result = await db('projects')
      .insert
      ({ id_admin: admin, project_name: name })
    my_log('New project ID: ' + result)
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
  getProjectById,
  createProject
}



