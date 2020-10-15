import React from 'react'
import { deleteToDo } from '../reducers/toDoSlice'
import { useDispatch } from 'react-redux'

const DeleteBtn = ({id}) => {
    
    const dispatch = useDispatch()

    const handleDeleteItem = (event) => {
        const id = event.target.dataset.id
        dispatch(deleteToDo(id))
    }

    return(
        <button data-id={id} className="delete-btn" onClick={handleDeleteItem}>Delete</button>
    )
}

export default DeleteBtn