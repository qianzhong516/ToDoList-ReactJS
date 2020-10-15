import React from 'react'

const ToDoItem = ({completed, name}) => {
    return(
        <>
            { completed && <input type="checkbox" checked /> }
            { !completed && <input type="checkbox" /> } 
            <span>{name}</span>
        </>
    )
}

export default ToDoItem