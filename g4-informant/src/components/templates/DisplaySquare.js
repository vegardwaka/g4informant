import { useState } from 'react'
import Weather from '../workbenchComponents/Weather'
import APIKlokke from '../workbenchComponents/APIKlokke'
import Textarea from '../workbenchComponents/Textarea'
import Image from '../workbenchComponents/Image'

export default function DisplaySquare(props) {
    const[show, setShow] = useState(true)
    const [list, setList] = useState([])
    let element
    
    if(props.elementnumber === 1) 
        element = <APIKlokke height="100%" width="100%" hide={true} display={true}/>
    else if (props.elementnumber === 2) 
        element = <Weather height="100%" width="100%" hide={true} display={true}/>
    else if (props.elementnumber === 3) 
        element = <Textarea tawidth="100%" taheight="100%"/>
    else if (props.elementnumber === 4)
        element = <Image imgwidth="100" imgheight="100%"/>
    
    const hideButton = () => {
        if(props.elementnumber > 0) {
            list[props.id] = element
            setShow(false)
        }
    }

    if(props.tall1 === 0 && props.elementtall === 9) {
        list[props.tall1] = <Weather height="100%" width="100%" hide={false} display={true} propcity={props.city} propstate={props.state}/>
        list[1] = <APIKlokke height="100%" width="100%" hide={false} display={true} propcapital={props.capital} propcontinent={props.continent}/>
        list[2] = <Textarea tawidth="100%" taheight="100%"/>
        list[3] = <Weather height="100%" width="100%" hide={false} display={true} propcity="Stavanger" propstate="Rogaland"/>
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