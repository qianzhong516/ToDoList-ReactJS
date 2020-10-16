import React, { useState } from 'react'
import { addItem } from '../reducers/toDoSlice'
import { useDispatch } from 'react-redux'
import TagSelect from './TagSelect'
import NewTagForm from './NewTagForm'
import AddNewTagBtn from './AddNewTagBtn'

const AddItemForm = () => {

    const dispatch = useDispatch()
    const [showTagForm, setShowTagForm] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = document.querySelector('input[name=toDoName]').value
        const tag = document.querySelector('#tag-select').value

        if(name!=="" && tag!=="null")
            dispatch(addItem({name, tag}))
        else
            alert("Please input a name or tag!")
        
        // clear input
        document.querySelector('input[name=toDoName]').value = ""
    }

    return(
        <form id="add-to-do" onSubmit={handleSubmit}>
            <div className="form-control"><label>Task Name: </label><input type="text" name="toDoName" /></div>
            <div className="form-control">
                <label>Tag: </label>{ showTagForm ?  <NewTagForm updateFn={setShowTagForm} /> : <TagSelect />} 
                <AddNewTagBtn showTagForm={showTagForm} updateFn={setShowTagForm}/>
                
            </div>
            { showTagForm ? <input type="submit" value="Add To do" disabled /> : 
                            <input type="submit" value="Add To do" />   }
        </form>
    )
}

export default AddItemForm