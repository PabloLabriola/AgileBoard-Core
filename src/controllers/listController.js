import ListModel from "../models/listModel.js";
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
