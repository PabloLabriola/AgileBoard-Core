import knex from "../../DB/db_connection.js";

class Project {
  /* ver métodos en el controller */
  // getProjectById
  // createProject
  // getProjectStats
  // getProjectStatsById
  // getProjectActionHistory

  async getList(idProject) {
    try {
      await knex
        .select()
        .from("list")
        .where("id_project", idProject)
        .then((rows) => {
            if (rows.length > 0) {
                return JSON.stringify(rows);
            } else {
                return "Empty project"
            }
        });
    } catch (error) {
      return error;
    }
  }
}

export default Project;
