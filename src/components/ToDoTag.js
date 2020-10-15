import React from 'react'

const ToDoTag = ({tagName, color}) => {

    return(
        <span className="tag" style={{ backgroundColor: color }}>
            {tagName}
        </span>
    )
}

export default ToDoTag