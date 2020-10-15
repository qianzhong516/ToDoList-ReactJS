import React, { useEffect } from 'react'
import ToDoItem from './ToDoItem'
import ToDoTag from './ToDoTag'
import DeleteBtn from './DeleteBtn'
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
        <>
            <ul>
                {
                    items && items.map( i => !i.completed && <li key={i.id}>
                                                <ToDoItem id={i.id} completed={i.completed} name={i.name} />
                                                | <ToDoTag tagName={i.tag} />
                                                <DeleteBtn id={i.id} />
                                            </li>)
                }
            </ul>
            <h2>Completed Todos: </h2>
            <ul>
                
                {
                    items && items.map( i => i.completed && <li key={`completed-${i.id}`}>
                          <ToDoItem id={i.id} completed={i.completed} name={i.name} />
                        | <ToDoTag tagName={i.tag} />
                          <DeleteBtn id={i.id} />
                    </li>)                    
                }
            </ul>
        </>
    )
}

export default ToDoList