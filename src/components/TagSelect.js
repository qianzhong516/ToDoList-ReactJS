import React, { useEffect } from 'react'
import {getAllTags, selectTags} from '../reducers/tagSlice'
import { useSelector, useDispatch } from 'react-redux'

const TagSelect = () => {
    
    const dispatch = useDispatch()
    const tags = useSelector(selectTags)
    
    useEffect(()=>{
        
        dispatch(getAllTags())

    },[dispatch])

    return(
        <>
            { tags && tags.map( (t, i) =>
                <select id="tag-select" style={{ backgroundColor: t.color}}>
                    <option key={i} value={t.name}>{t.name}</option>
                </select>
            )}
        </>
    )

}

export default TagSelect