import {configureStore} from '@reduxjs/toolkit'
import toDoReducer from './reducers/toDoSlice'

export default configureStore({
    reducer: {
        toDos: toDoReducer
    }
})