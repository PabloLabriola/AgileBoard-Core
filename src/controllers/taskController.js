import Task from '../models/taskModel.js'
import dao from '../data/daoFactory.js'

/**
 * @description Obtener una entidad a traves de un string con su nombre
 * @param {'project','list,'task'}
 */
const taskDAO = dao('task')