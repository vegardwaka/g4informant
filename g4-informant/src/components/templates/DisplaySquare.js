import { useState } from 'react'
import Weather from '../workbenchComponents/Weather'
import APIKlokke from '../workbenchComponents/APIKlokke'
import Textarea from '../workbenchComponents/Textarea'
import Image from '../workbenchComponents/Image'

export default function DisplaySquare(props) {
    const[show, setShow] = useState(true)
    const [list, setList] = useState([])
    
    /*
    const hideButton = () => {
        if(props.elementnumber > 0) {
            list[props.id] = element
            setShow(false)
        }
    } */

    for(let i=0; i<props.sizen; i++) {
        let element
        if(props.squares[i].elementNr > 0) {
            if(props.squares[i].elementNr === 1) 
                element = <APIKlokke height="100%" width="100%" hide={false} display={true} propcapital={props.capital} propcontinent={props.continent}/>
            else if (props.squares[i].elementNr === 2) 
                element = <Weather height="100%" width="100%" hide={false} display={true} propcity={props.city} propstate={props.state}/>
            else if (props.squares[i].elementNr === 3) 
                element = <Textarea tawidth="100%" taheight="100%"/>
            else if (props.squares[i].elementNr === 4)
                element = <Image imgwidth="100" imgheight="100%"/>
        } else {
            element = <h1>TOM</h1>
        }
        list[i] = element
    }
 
    return(
        <div 
            className="div1" 
            onClick={()=>props.toggle(props.id)}
            style={{width: props.sqwidth, height: props.sqheight}}
        >
            {list[props.id]}
        </div>
    )
}

/* 
{show ? <button className="feature-button" onClick={hideButton} style={{display: show ? "block" : "none"}}>Add Feature +</button>
    : list[props.id]}
    {show ? null : <p onClick={() => setShow(true)} className="MainTemplateCross">X</p>}
*/