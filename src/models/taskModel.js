class Task {
    /* ver métodos en el controller */
    constructor(id, list, name, description, create) {
        
        let _id = id
        let _list = list
        let _name = name       
        let _description = description 
        let _create = create 

        this.getId = () => _id
        this.setId = id => _id = id
    
        this.getList = () => _list
        this.setList = list => _list = list
    
        this.getName = () => _name
        this.setName = name => _name = name           

        this.getDescription = () => _description
        this.setDescription = description => _description = description           

        this.getCreate = () => _create
        this.setCreate = create => _create = create

    }   
}

export default Task