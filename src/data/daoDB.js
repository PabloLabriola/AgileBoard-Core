import project_DAO_MySQL from "./DAO_MySQL/project_DAO_MySQL.js";
import list_DAO_MySQL from "./DAO_MySQL/list_DAO_MySQL.js";
import task_DAO_MySQL from "./DAO_MySQL/task_DAO_MySQL.js";

function Project() {
    return project_DAO_MySQL
}

function List() {
    return list_DAO_MySQL
}

function Task() {
    return task_DAO_MySQL
}

export default {
    Project,
    List,
    Task
}

/**
* @author Pablo Labriola
*/