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

export default { getAll, createNew }