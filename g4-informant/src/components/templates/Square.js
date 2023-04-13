import { useState } from 'react'
import Weather from '../workbenchComponents/Weather'
import APIKlokke from '../workbenchComponents/APIKlokke'
import Textarea from '../workbenchComponents/Textarea'

export default function Square(props) {
    const[show, setShow] = useState(true)
    const [list, setList] = useState([])
    let element
    
    if(props.elementnumber === 1) {
        element = <APIKlokke height="100%" width="100%" hide={true} display={true}/>
    } 
    else if (props.elementnumber === 2) {
        element = <Weather height="100%" width="100%" hide={true} display={true}/>
    }
    else if (props.elementnumber === 3) {
        element = <Textarea tawidth="100%" taheight="100%"/>
    }

    const hideButton = () => {
        if(props.elementnumber > 0) {
            list[props.id] = element
            setShow(false)
        }
    }
    
    return(
        <div 
            className="div1" 
            onClick={()=>props.toggle(props.id)}
            style={{width: props.sqwidth, height: props.sqheight}}
        >
            {show ? <button className="feature-button" onClick={hideButton} style={{display: show ? "block" : "none"}}>Add Feature +</button>
            : list[props.id]}
            {show ? null : <p onClick={() => setShow(true)} className="MainTemplateCross">X</p>}
        </div>
    )
}