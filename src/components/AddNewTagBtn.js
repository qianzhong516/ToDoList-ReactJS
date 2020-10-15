import React from 'react'

const AddNewTagBtn = ({showTagForm, updateFn}) => {

    const ToggleBtn = (event) => {
        event.preventDefault()
        updateFn(!showTagForm)
    }

    return(
        <>
        {
            showTagForm ?   <a href="/cancel" className="cancel" onClick={ToggleBtn} >Cancel</a> :
                            <a href="/add-tag" className="add-new-tag" onClick={ToggleBtn} >Add new</a>
        }
       </>
    )
}

export default AddNewTagBtn