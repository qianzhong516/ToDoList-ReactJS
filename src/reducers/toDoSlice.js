import '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {fetchAllItems} from '../services'

export const getAllItems = createAsyncThunk("toDoList/getAllItems", async () => {
    const res = await fetchAllItems()
    return res
})

const toDoSlice = createSlice({
    name: "toDoList",
    initialState: {
        items: null,
        status: 'idle'
    },
    reducers:{
        addItem: (state, action) => {

        },
        deleteItem: (state, action) => {

        },        
        toggleCompletion: (state, action) => {

        }
    },
    extraReducers: {
        [getAllItems.fulfilled]: (state, action) => {
            state.status = 'success'
            state.items = action.payload
        }
    }
})


export const selectAllItems = state => state.toDos.items
export const selectStatus = state => state.toDos.status
export const {addItem, deleteItem, toggleCompletion} = toDoSlice.actions
export default toDoSlice.reducer