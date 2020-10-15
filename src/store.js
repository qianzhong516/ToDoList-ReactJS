import {configureStore} from '@reduxjs/toolkit'
import toDoReducer from './reducers/toDoSlice'
import tagReducer from './reducers/tagSlice'

export default configureStore({
    reducer: {
        toDos: toDoReducer,
        toDoTags: tagReducer
    }
})