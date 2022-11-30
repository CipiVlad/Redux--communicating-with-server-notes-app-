import axios from "axios";

const baseUrl = 'http://localhost:3001/notes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}
const createNew = async (content) => {
    const object = { content, imoprtant: false }
    const respone = await axios.post(baseUrl, object)
    return respone.data
}

const destroyNote = async (id) => {

    const response = await axios.delete(`${baseUrl + '/' + id}`)
    return response.data
}
// await destroyNote(9)
export default { getAll, createNew, destroyNote }