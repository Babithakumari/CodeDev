import React from "react"
import {useState} from "react"

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
    
    const [open,setOpen] = useState(true)

    // handle open/close button
    const handleClick = () => {
        const newOpen = !open
        setOpen(newOpen)
    }



    return (
        
        <div className={`editor-container ${open?'':"toggleView"}`}>

            <div className="editor-header">

                {title}
                <button 
                    className="expand-collapse-btn"
                    onClick={handleClick}
                >
                    <FontAwesomeIcon icon={open?faCompressAlt:faExpandAlt}/>
                </button>
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