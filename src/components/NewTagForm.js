import React, { useEffect } from 'react'
import { saveTag } from '../reducers/tagSlice'
import { useDispatch } from 'react-redux'

const NewTagForm = ({updateFn}) => {
    
    const dispatch = useDispatch()

    useEffect(()=>{

        let stylesheet = document.createElement('link')
        stylesheet.rel = "stylesheet"
        stylesheet.href = "/assets/la_color_picker.css"
        window.document.head.appendChild(stylesheet)

        let script = document.createElement('script')
        script.src="/assets/la_color_picker.js"
        window.document.body.appendChild(script)
        
    },[])

    const addNewTag = (event) => {
        event.preventDefault()
        const tag = {
            name: document.querySelector('input[name=tag-name]').value,
            color: document.querySelector('#colorPicker').value
        }
        console.log('saving tag', tag)
        dispatch(saveTag(tag))

        document.querySelector('input[name=tag-name]').value=""
        document.querySelector('#colorPicker').value=""
        
        // hide the NewTagForm
        updateFn(false)
    }

    return(
        <div id="tag-form">
            <input type="text" className="inp" placeholder="Pick a color" id="colorPicker"/>
            <div className="palette" id="colorPalette"></div>
            <input type="text" name="tag-name" />
            <a href="/confirm" onClick={addNewTag}>Confirm</a>
        </div>
    )
}

export default NewTagForm