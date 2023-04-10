import { useState } from 'react'
import Weather from '../workbenchComponents/Weather'
import APIKlokke from '../workbenchComponents/APIKlokke'

export default function Square(props) {
    const[show, setShow] = useState(true)
    
    const hideButton = () => {
        if(props.elementnumber > 0) {
            setShow(false);
        }
    }

    let element;
    if(props.elementnumber === 0) {
        <h1>Choose a component</h1>
    }
    else if(props.elementnumber === 1) {
        element = <APIKlokke height="100%" width="100%"/>
    } 
    else if (props.elementnumber === 2) {
        element = <Weather height="100%" width="100%"/>
    } 
    
    return(
        <div 
            className="div1" 
            onClick={()=>props.toggle(props.id)}
            style={{width: props.widthen, height: props.heighten}}
        >
            {show ? <button className="feature-button" onClick={hideButton} style={{display: show ? "block" : "none"}}>Add Feature +</button>
            : element}
            {show ? null : <p onClick={() => setShow(true)} className="MainTemplateCross">X</p>}
        </div>
    )
}