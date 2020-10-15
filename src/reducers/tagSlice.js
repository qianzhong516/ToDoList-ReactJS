import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchAllTags } from '../services/tagServices'

export const getAllTags = createAsyncThunk('tags/get/all', async () => {
    const tags = await fetchAllTags() 
    return tags
})

const tagSlice = createSlice({
    name: "tags",
    initialState: {
        tags: [],
        status: "idle"
    },
    reducers: {

    },
    extraReducers: {
        [getAllTags.fulfilled]: (state, action) => {
            state.status = "success"
            state.tags = action.payload
        }
    }
})

export const selectTags = state => state.toDoTags.tags
export default tagSlice.reducer