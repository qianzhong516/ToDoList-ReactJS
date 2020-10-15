import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {fetchAllItems, saveNewItem, toggleItem} from '../services/itemServices'

export const getAllItems = createAsyncThunk("toDoList/getAllItems", async () => {
    const res = await fetchAllItems()
    return res
})

export const addItem = createAsyncThunk('toDoList/saveItem', async ({name, tag}) =>{
    const res = await saveNewItem({name, tag})
    return res
})

export const toggleCompletion = createAsyncThunk('toDoList/toggle', async(id) => {
    await toggleItem(id)
    return id
})

const toDoSlice = createSlice({
    name: "toDoList",
    initialState: {
        items: null,
        status: 'idle'
    },
    reducers:{
        deleteItem: (state, action) => {

        }
    },
    extraReducers: {
        [getAllItems.fulfilled]: (state, action) => {
            state.status = 'success'
            state.items = action.payload
        },
        [addItem.fulfilled]: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        [toggleCompletion.fulfilled]: (state, action) => {
            const id = action.payload
            state.items.forEach(item => {
                if(Number(item.id) === Number(id))  
                    item.completed = !item.completed
            }) 
        }
    }
})

export const selectAllItems = state => state.toDos.items
export const selectStatus = state => state.toDos.status
export const {deleteItem} = toDoSlice.actions
export default toDoSlice.reducer