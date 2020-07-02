import dao from '../data/daoDB.js'

const listDAO = dao.List()

/**
 * @description Obtener una lista
 * @param {Recibe los ids de una lista y de un proyecto}
 * @returns {En caso de éxito, devuelve un objeto lista con sus properties}
 */
async function getListById(req, res)  {
    try {        
        const id_list = req.body.id_list
        const id_project = req.body.id_project
        
        let list = await listDAO.getListById(id_list, id_project)
    
        // console log
        log(list);
    
        return res.json(list)
    
      } catch (error) {
        console.log('el error: ' + error);
      }

}

async function createList(req, res) {
    try {
        const id_project = req.body.id_project
        const list_name = req.body.list_name        
        
        let id_list = await listDAO.createList(id_project, list_name)
    
        // console log
        log(id_list);
    
        let list = await listDAO.getListById(id_list,id_project)
    
        return res.json(list)
    
      } catch (error) {
        console.log('el error: ' + error);
      }

}

async function editListName(req, res) {
    try {
        const id_list = req.body.id_list        
        const id_project = req.body.id_project    
        const list_name = req.body.list_name
        
        await listDAO.editListName(id_list, id_project, list_name)     
    
        // console log
        let list = await listDAO.getListById(id_list,id_project)
        log(list);
    
        return res.json(list)
    
      } catch (error) {
        console.log('el error: ' + error);
      }
}

async function deleteList(req, res){
    try {        
        const id_list = req.body.id_list    
        const id_project = req.body.id_project
        
        await listDAO.deleteList(id_list, id_project)
    
        // console log
        log(id_list);   
    
        return res.json(id_list)
    
      } catch (error) {
        console.log('el error: ' + error);
      }
}

async function getAllLists(req, res){
    try {                
        const id_project = req.body.id_project
        
        let list = await listDAO.getAllLists(id_project)
    
        // console log
        log(list);
    
        return res.json(list)
    
      } catch (error) {
        console.log('el error: ' + error);
      }
    
}

// console log
function log(data) {
  console.log('\n' + '-------------------List Controller result:----------------------------' + '\n');
  console.log(data);
  console.log('\n' + '-------------------------------------------------------------------------' + '\n');
}

export default {
    getListById,
    createList,
    editListName,
    deleteList,
    getAllLists}

/**
* @author Pablo Rondeau
*/