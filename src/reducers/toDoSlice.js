import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {fetchAllItems, saveNewItem} from '../services/itemServices'

export const getAllItems = createAsyncThunk("toDoList/getAllItems", async () => {
    const res = await fetchAllItems()
    return res
})

export const addItem = createAsyncThunk('toDoList/saveItem', async ({name, tag}) =>{
    const res = await saveNewItem({name, tag})
    return res
})

const toDoSlice = createSlice({
    name: "toDoList",
    initialState: {
        items: null,
        status: 'idle'
    },
    reducers:{
        deleteItem: (state, action) => {

        },        
        toggleCompletion: (state, action) => {

        }
    },
    extraReducers: {
        [getAllItems.fulfilled]: (state, action) => {
            state.status = 'success'
            state.items = action.payload
        },
        [addItem.fulfilled]: (state, action) => {
            state.items = [...state.items, action.payload]
        }
    }
})

export const selectAllItems = state => state.toDos.items
export const selectStatus = state => state.toDos.status
export const {deleteItem, toggleCompletion} = toDoSlice.actions
export default toDoSlice.reducer