import React, { useEffect } from 'react'
import { saveTag } from '../reducers/tagSlice'
import { useDispatch } from 'react-redux'

const NewTagForm = ({updateFn}) => {
    
    const dispatch = useDispatch()

    useEffect(()=>{

        let stylesheet = document.createElement('link')
        stylesheet.rel = "stylesheet"
        stylesheet.href = `/assets/la_color_picker.css`
        window.document.head.appendChild(stylesheet)

        let script = document.createElement('script')
        script.src=`/assets/la_color_picker.js`
        window.document.body.appendChild(script)
        
    },[])

    const addNewTag = (event) => {
        event.preventDefault()
        const tag = {
            name: document.querySelector('input[name=tag-name]').value,
            color: document.querySelector('#colorPicker').value
        }
        console.log('saving tag', tag)

        if(tag.name!=="" && tag.color!==""){
            dispatch(saveTag(tag))

            document.querySelector('input[name=tag-name]').value=""
            document.querySelector('#colorPicker').value=""
            
            // hide the NewTagForm
            updateFn(false)
        }else{
            alert("input tag name or tag color!")
        }

    }

    return(
        <div id="tag-form">
            <input type="text" className="inp" placeholder="Color" id="colorPicker"/>
            <div className="palette" id="colorPalette"></div>
            <input type="text" name="tag-name" />
            <a href="/confirm" onClick={addNewTag} className="confirm">Confirm</a>
        </div>
    )
}

export default NewTagForm