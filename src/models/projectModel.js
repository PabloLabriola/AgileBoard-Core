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
    /* ver métodos en el controller */
    constructor(id, admin, name) {
        
        let _id = id
        let _admin = admin
        let _name = name       

        this.getId = () => _id
        this.setId = id => _id = id
    
        this.getAdmin = () => _admin
        this.setAdmin = admin => _admin = admin
    
        this.getName = () => _name
        this.setName = name => _name = name           

    }   
}

export default Project;
