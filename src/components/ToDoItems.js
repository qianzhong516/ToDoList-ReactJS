import React from 'react'

const ToDoItem = ({completed, name}) => {
    return(
        <>
            <input type="checkbox" checked = {completed && true} />
            <span>{name}</span>
        </>
    )
}

export default ToDoItem