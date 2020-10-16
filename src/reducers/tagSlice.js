import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchAllTags, saveNewTag } from '../services/tagServices'

export const getAllTags = createAsyncThunk('tags/get/all', async () => {
    const tags = await fetchAllTags() 
    return tags
})

export const saveTag = createAsyncThunk('tags/add/tag', async(tag) => {
    const res = await saveNewTag(tag)
    return res
})

const tagSlice = createSlice({
    name: "tags",
    initialState: {
        tags: null
    },
    extraReducers: {
        [getAllTags.fulfilled]: (state, action) => {
            state.tags = action.payload
        },
        [saveTag.fulfilled]: (state, action) => {
            state.tags = [...state.tags, action.payload]
        }
    }
})

export const selectTags = state => state.toDoTags.tags
export default tagSlice.reducer