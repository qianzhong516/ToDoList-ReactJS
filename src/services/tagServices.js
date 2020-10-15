import axios from 'axios'

const baseURL = "http://localhost:3001"

const fetchAllTags = async() => {
    const res = await axios.get(`${baseURL}/get/tags`)
    return res.data
}

export {fetchAllTags}