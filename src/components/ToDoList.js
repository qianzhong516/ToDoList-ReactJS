import React, { useEffect } from 'react'
import ToDoItems from './ToDoItems'
import { selectAllItems, selectStatus, getAllItems } from '../reducers/toDoSlice'
import { useSelector, useDispatch } from 'react-redux'

const ToDoList = () => {

    const dispatch = useDispatch()
    const items = useSelector(selectAllItems)
    const status = useSelector(selectStatus)

    useEffect(()=>{

        if(status === "idle"){
            dispatch(getAllItems())
        }

    },[status, dispatch])
    
    
    return(
        <ul>
            {
                items && items.map( i => <li key={i.id}><ToDoItems completed={i.completed} name={i.name} /></li>)
            }
        </ul>
    )
}

export default ToDoList