import React from 'react'
import { addItem } from '../reducers/toDoSlice'
import { useDispatch } from 'react-redux'
import TagSelect from './TagSelect'

const AddItemForm = () => {

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = document.querySelector('input[name=toDoName]').value
        const tag = document.querySelector('#tag-select').value
        dispatch(addItem({name, tag}))
        
        // clear input
        document.querySelector('input[name=toDoName]').value = ""
    }

    return(
        <form id="add-to-do" onSubmit={handleSubmit}>
            <div className="form-control"><label>Task Name: </label><input type="text" name="toDoName" /></div>
            <div className="form-control"><label>Tag: </label><TagSelect /><br/></div>
            <input type="submit" value="Add To do" />
        </form>
    )
}

export default AddItemForm