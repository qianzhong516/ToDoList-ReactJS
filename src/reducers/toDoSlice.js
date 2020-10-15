import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {fetchAllItems, saveNewItem, toggleItem, deleteToDoItem} from '../services/itemServices'

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

export const deleteToDo = createAsyncThunk('toDoList/delete/item', async(id) => {
    await deleteToDoItem(id)
    return id
})

const toDoSlice = createSlice({
    name: "toDoList",
    initialState: {
        items: null,
        status: 'idle'
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
                if( item.id === id )  
                    item.completed = !item.completed
            }) 
        },
        [deleteToDo.fulfilled]: (state, action) => {
            const id = action.payload
            state.items = state.items.filter( i => i.id !== id )
        }
    }
})

export const selectAllItems = state => state.toDos.items
export const selectStatus = state => state.toDos.status
export default toDoSlice.reducer