// import ListModel from "../models/listModel.js";
import dao from '../data/daoDB.js'

/**
 * @description Obtener una entidad a traves de un string con su nombre
 * @param {'project','list,'task'}
 */
const listDAO = dao.List()


// const list = new ListModel();

/**
 * @description Obtener una lista
 * @param {Recibe los ids de una lista y de un proyecto}
 * @returns {En caso de éxito, devuelve un objeto lista con sus properties}
 */
async function getListById(id_list, id_project) {
}


function createList(list_name) {
}


function editListName(id_list, id_project, new_name) {
}
function deleteList(id_list, id_project) {
}
function getAllLists(id_project) {
}


export default {
    getListById,
    createList,
    editListName,
    deleteList,
    getAllLists
}

/**
* @author Pablo Labriola
*/