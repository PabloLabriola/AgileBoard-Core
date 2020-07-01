// import ListModel from "../models/listModel.js";
import dao from '../data/daoDB.js'

/**
 * @description Obtener una entidad a traves de un string con su nombre
 * @param {'project','list,'task'}
 */
const listDAO = dao.List()


// const list = new ListModel();

function createList() {
}
function getListById() {
}

function editListName() {
}
function deleteList() {
}
function getAllLists() {
}


export default {
createList,
getListById,
editListName,
deleteList,
getAllLists
}

/**
* @author Pablo Labriola
*/