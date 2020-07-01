
  class Project {

    constructor(id, admin, name, lists) {

      let _id = id
      let _admin = admin
      let _name = name
      let _lists = lists
      

      this.getId = () => _id
      this.setId = id => _id = id

      this.getAdmin = () => _admin
      this.setAdmin = admin => _admin = admin

      this.getName = () => _name
      this.setName = name => _name = name

      this.getLists = () => _lists
      this.setLists = lists => _lists = lists
    }
  }

  export default Project
