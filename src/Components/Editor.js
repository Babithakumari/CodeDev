import React from "react"
// Base CSS is mandatory
import 'codemirror/lib/codemirror.css'
// Theme import
import 'codemirror/theme/material.css'
// Import languages required(HTML, CSS, Javascript)
import 'codemirror/mode/css/css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'

// import Controlled component : state management performed by user
import {Controlled as ControlledEditor} from "react-codemirror2"

// importing icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompressAlt,faExpandAlt} from '@fortawesome/free-solid-svg-icons'



// create Editor component 
const Editor = (props) =>{


    const {
        title,
        language,
        value,
        onChange
    } = props

    // onChange handler
    const handleChange = (editor,data,value) =>{
        onChange(value)

    }

    return (
        
        <div className="editor">

            <div className="editor-header">
                <span><FontAwesomeIcon icon="fa-brands fa-html5" /></span>

                <h3>{title}</h3>
                <button>0/c</button>
            </div>

            <ControlledEditor
                value={value}
                onBeforeChange={handleChange}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping:true,
                    lint:true,
                    mode:language,
                    theme:"material",
                    lineNumbers:true
                    
                }}
                />



        </div>
    )

}
export default Editor;