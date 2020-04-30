import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const getAll = () => {
    return axios.get(baseUrl)
}

const remove = (url) => {
    return axios.delete(url)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`,newObject)
    
}
export default {
    create: create,
    getAll: getAll,
    remove: remove,
    update: update
}