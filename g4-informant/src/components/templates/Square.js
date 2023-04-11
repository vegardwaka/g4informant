import { useState } from 'react'
import Weather from '../workbenchComponents/Weather'
import APIKlokke from '../workbenchComponents/APIKlokke'
import Textarea from '../workbenchComponents/Textarea'

export default function Square(props) {
    const[show, setShow] = useState(true)
    const [lister, setLister] = useState([])
    let element;
    const [huskeListe, setHuskeListe] = []
    let tallet;
    
    if(props.elementnumber === 1) {
        element = <APIKlokke height="100%" width="100%"/>
        tallet = 1
    } 
    else if (props.elementnumber === 2) {
        element = <Weather height="100%" width="100%"/>
        tallet = 2
    }
    else if (props.elementnumber === 3) {
        element = <Textarea widthen="100%" heighten="100%"/>
        tallet = 3
    }

    const hideButton = () => {
        if(props.elementnumber > 0) {
            lister[props.id] = element
           // huskeListe[props.id] = tallet
            //setHuskeListe([...huskeListe])
           // console.log("Listen: " + huskeListe)
            //console.log("index en: " + lister) 
            //console.log("ID: " + props.id) 
            setShow(false);
        }
    }
    
    return(
        <div 
            className="div1" 
            onClick={()=>props.toggle(props.id)}
            style={{width: props.widthen, height: props.heighten}}
        >
            {show ? <button className="feature-button" onClick={hideButton} style={{display: show ? "block" : "none"}}>Add Feature +</button>
            : lister[props.id]}
            {show ? null : <p onClick={() => setShow(true)} className="MainTemplateCross">X</p>}
        </div>
    )
}