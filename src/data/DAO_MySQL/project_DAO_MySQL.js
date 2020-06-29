import knex from '../../db/db_connection.js'

const db = knex.createDB()

// import factoryProject from '../models/projectModel.js'

/* ver métodos en el controller */

// getProjectById
// createProject
// getProjectStats
// getProjectStatsById
// getProjec8tActionHistory


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

// console log
function log(data) {
  console.log('\n' + '------------------------------DB response:-------------------------------' + '\n')
  console.log(data)
  console.log('\n' + '-------------------------------------------------------------------------' + '\n')
  console.log('-------------------------------------------------------------------------')
}

export default {
  getProjectById,
}



