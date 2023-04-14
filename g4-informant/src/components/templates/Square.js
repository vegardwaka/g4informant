import { useState } from 'react'
import Weather from '../workbenchComponents/Weather'
import APIKlokke from '../workbenchComponents/APIKlokke'
import Textarea from '../workbenchComponents/Textarea'
import Image from '../workbenchComponents/Image'
import TimeEdit from '../workbenchComponents/TimeEdit'
import News from '../workbenchComponents/News'

export default function Square(props) {
    const[show, setShow] = useState(true)
    const [list, setList] = useState([])
    let element
    
    if(props.elementnumber === 1) 
        element = <APIKlokke height="100%" width="100%" hide={true} display={true} propcontinent="Asia" propcapital="Tokyo"/>
    else if (props.elementnumber === 2) 
        element = <Weather height="100%" width="100%" hide={true} display={true} propcity="Juneau" propstate="Alaska" onQueryCityen={props.onQueryCityen}/>
    else if (props.elementnumber === 3) 
        element = <Textarea taheight="100%" tawidth="100%" />
    else if (props.elementnumber === 4)
        element = <Image imgheight="100%" imgwidth="100%" hide={true}/>
    else if (props.elementnumber === 5)
        element = <TimeEdit height="100%" width="100%" />
    else if (props.elementnumber === 6)
        element = <News height="100%" width="100%"/>
    
    
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