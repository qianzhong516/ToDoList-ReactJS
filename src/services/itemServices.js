import axios from 'axios'

const baseURL = "http://localhost:3001"


const fetchAllItems = async () => {
    const res = await axios.get(`${baseURL}/get/items`)
    console.log(res.data)
    return res.data
}

const saveNewItem = async(name) => {
    const res = await axios.post(`${baseURL}/add/item`, {name})
    return res.data
}

export {fetchAllItems, saveNewItem}
