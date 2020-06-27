import ListModel from "../models/listModel.js";
import dao from '../data/daoFactory.js'

/**
 * @description Obtener una entidad a traves de un string con su nombre
 * @param {'project','list,'task'}
 */
const listDAO = dao('list')


const list = new ListModel();

async function getTaskFromList(id_list) {
  return "hola mundo";
}

async function editTaskFromList(id_list, id_task) {
  return "hola mundo";
}

async function deleteTraskFromList(id_list, id_task){
    return "hola mundo";
}

export default {
  getTaskFromList,
  editTaskFromList,
  deleteTraskFromList,
};
