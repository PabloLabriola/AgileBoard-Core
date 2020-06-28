
  class Project {

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

  export default Project
