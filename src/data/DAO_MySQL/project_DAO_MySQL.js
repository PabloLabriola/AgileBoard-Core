import knex from '../../db/db_connection.js'
// import Project from "../models/projectModel.js";

const db = knex.createDB()

// import factoryProject from '../models/projectModel.js'

/* ver métodos en el controller */

// getProjectById
// createProject
// getProjectStats
// getProjectStatsById
// getProjectActionHistory


async function getProjectById(id) {
  try {
    await db
      .select()
      .from('projects')
      .where('id_project', id)
      .then(row => {
        if (row.length > 0) {

          let result = row[0]

          let project = {
            id_project: result.id_project,
            id_admin: result.id_admin,
            project_name: result.project_name
          }

          console.log('\n' + '------------------------------DB response:-------------------------------' + '\n')
          console.log(project)
          console.log('\n' + '-------------------------------------------------------------------------' + '\n')
          console.log('-------------------------------------------------------------------------')

          return project

        } else {
          return "Empty project"
        }
      }).catch((err) => {
        console.log(err);

      });
  } catch (error) {
    return 'DB err: ' + error;
  }
}



export default {
  getProjectById
}






