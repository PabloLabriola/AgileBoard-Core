import project_DAO_MySQL from "./project_DAO_MySQL.js";
import task_DAO_MySQL from "./task_DAO_MySQL.js";
import list_DAO_MySQL from "./list_DAO_MySQL.js";

function DAO_MySQL(param) {
    if (param === undefined) console.log('dao undefined');
    
    if (param === 'project') {
        return project_DAO_MySQL
    } else if (param === 'list') {
        return task_DAO_MySQL
    } else if (param === 'task') {
        return list_DAO_MySQL
    }
}

export default {
    DAO_MySQL
}

/**
* @author Pablo Labriola
*/