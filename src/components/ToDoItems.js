import React from 'react'
import { toggleCompletion }  from '../reducers/toDoSlice'
import { useDispatch } from 'react-redux'

const ToDoItem = ({id, completed, name}) => {
    
    const dispatch = useDispatch()
    
    const handleToggleCompletion = (event) => {
        const id = event.target.dataset.id
        console.log("toggled input id: ", id)
        dispatch(toggleCompletion(id))
    }

    return(
        <>
            { completed && <input data-id={id} type="checkbox" checked onChange={handleToggleCompletion}/> }
            { !completed && <input data-id={id} type="checkbox" onChange={handleToggleCompletion} /> } 
            <span>{name}</span>
        </>
    )
}

export default ToDoItem