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
        <select>
            { tags && tags.map( (t, i) => <option key={i} value="t">{t}</option>)}
        </select>
    )

}

export default TagSelect