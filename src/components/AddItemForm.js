import React from 'react'
import { addItem } from '../reducers/toDoSlice'
import { useDispatch } from 'react-redux'
import TagSelect from './TagSelect'

const AddItemForm = () => {

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = document.querySelector('input[name=toDoName]').value
        dispatch(addItem(name))
        
        // clear input
        document.querySelector('input[name=toDoName]').value = ""
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="toDoName" />
            <TagSelect />
            <input type="submit" />
        </form>
    )
}

export default AddItemForm