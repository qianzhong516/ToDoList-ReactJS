import axios from 'axios'

const baseURL = process.env.NODE_ENV === "production" ? "" : "http://localhost:3001"


const fetchAllItems = async () => {
    const res = await axios.get(`${baseURL}/get/items`)
    return res.data
}

const saveNewItem = async({name, tag}) => {
    console.log('axios received name: ', name, ' and tag: ',tag)
    const res = await axios.post(`${baseURL}/add/item`, {name, tag})
    return res.data
}

const toggleItem = async(id) => {
    const res = await axios.put(`${baseURL}/toggle/item`, {id})
    return res.data
}

const deleteToDoItem = async(id) => {
    const res = await axios.put(`${baseURL}/delete/item`, {id})
    return res.data
}

export {fetchAllItems, saveNewItem, toggleItem, deleteToDoItem}
