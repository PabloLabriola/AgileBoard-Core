import DAO_MySQL from './DAO_MySQL/DAO_MySQL.js'


export default function dao(param) {
    return DAO_MySQL.DAO_MySQL(param)
}