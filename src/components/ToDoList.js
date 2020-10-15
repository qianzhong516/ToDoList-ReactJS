import React, { useEffect } from 'react'
import ToDoItem from './ToDoItem'
import ToDoTag from './ToDoTag'
import DeleteBtn from './DeleteBtn'
import { selectAllItems, getAllItems } from '../reducers/toDoSlice'
import { getAllTags, selectTags } from '../reducers/tagSlice' 
import { useSelector, useDispatch } from 'react-redux'

const ToDoList = () => {

    const dispatch = useDispatch()
    const items = useSelector(selectAllItems)
    const tags = useSelector(selectTags)

    useEffect(()=>{
        
        dispatch(getAllItems())

        dispatch(getAllTags())

    },[dispatch])
    
    return(
        <>
            <h2 id="todo-list-title">Pending Tasks</h2>
            <ul id="todo-list">
                {
                    items && items.map( i => !i.completed && <li key={i.id}>
                                                <ToDoItem id={i.id} completed={i.completed} name={i.name} />
                                                <ToDoTag tagName={i.tag} color={ tags && tags.find( t => t.name === i.tag).color } />
                                                <DeleteBtn id={i.id} />
                                            </li>)
                }
            </ul>
            <h2 id="completed-list-title">Completed Tasks</h2>
            <ul id="completed-list">
                
                {
                    items && items.map( i => i.completed && <li key={`completed-${i.id}`}>
                          <ToDoItem id={i.id} completed={i.completed} name={i.name} />
                          <ToDoTag tagName={i.tag} color={ tags && tags.find( t => t.name === i.tag).color } />
                          <DeleteBtn id={i.id} />
                    </li>)                    
                }
            </ul>
        </>
    )
}

export default ToDoList