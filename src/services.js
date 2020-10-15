import axios from 'axios'

const baseURL = "http://localhost:3001"


const fetchAllItems = async () => {
    const res = await axios.get(`${baseURL}/get/items`)
    console.log(res.data)
    return res.data
}

export {fetchAllItems}
