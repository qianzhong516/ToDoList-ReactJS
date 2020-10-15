import axios from 'axios'

const baseURL = "http://localhost:3001"

const fetchAllTags = async() => {
    const res = await axios.get(`${baseURL}/get/tags`)
    return res.data
}

const saveNewTag = async(tag) => {
    const res = await axios.post(`${baseURL}/add/tag`, tag)
    return res.data
} 

export {fetchAllTags, saveNewTag}