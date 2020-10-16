import React, { useEffect } from 'react'
import {getAllTags, selectTags} from '../reducers/tagSlice'
import { useSelector, useDispatch } from 'react-redux'

const TagSelect = () => {
    
    const dispatch = useDispatch()
    const tags = useSelector(selectTags)
    
    useEffect(()=>{
        
        dispatch(getAllTags())

    },[dispatch])

    const handleSelectOnChange = (event) => {
        let options = document.querySelectorAll('option')
        
        let currentOption
        for( let i=0; i < options.length; i++){
            if(options[i].value === event.target.value)
                currentOption = options[i]
        }

        let currentColor = currentOption.style.backgroundColor

        let select = document.querySelector('#tag-select')
        select.style.backgroundColor = currentColor
    }

    return(
        <>
            
                <select id="tag-select" onChange={handleSelectOnChange}>
                    <option value="null">Select a tag</option>
                    { tags && tags.map( (t, i) =>
                        <option key={i} value={t.name} style={{ backgroundColor: t.color}}>{t.name}</option>
                    )}
                </select>
           
        </>
    )

}

export default TagSelect