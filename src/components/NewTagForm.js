import React, { useEffect } from 'react'

const NewTagForm = () => {
    
    useEffect(()=>{

        let stylesheet = document.createElement('link')
        stylesheet.rel = "stylesheet"
        stylesheet.href = "/assets/la_color_picker.css"
        window.document.head.appendChild(stylesheet)
        
        let script = document.createElement('script')
        script.src="/assets/la_color_picker.js"
        window.document.body.appendChild(script)
        
    },[])

    return(
        <>
            <input type="text" className="inp" id="colorPicker"/>
            <div className="palette" id="colorPalette"></div>
        </>
    )
}

export default NewTagForm