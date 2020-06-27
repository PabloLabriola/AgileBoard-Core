class List {
    /* ver métodos en el controller */
    constructor(id, project, name) {
        
        let _id = id
        let _project = project
        let _name = name       

        this.getId = () => _id
        this.setId = id => _id = id
    
        this.getProject = () => _project
        this.setProject = project => _project = project
    
        this.getName = () => _name
        this.setName = name => _name = name           

    }   
}

export default List