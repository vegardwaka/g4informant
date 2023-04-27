import { useState } from 'react'
import Weather from '../workbenchComponents/Weather'
import Clock from '../workbenchComponents/Clock'
import Textarea from '../workbenchComponents/Textarea'
import Image from '../workbenchComponents/Image'
import News from '../workbenchComponents/News'

export default function Square(props) {
    const[show, setShow] = useState(true)
    const[list, setList] = useState([])
    let element

    if(props.elementnumber === 1) 
        element = <Clock height="100%" width="100%" hide={true} display={true} propcontinent="Asia" propcapital="Tokyo" setClockObj={props.setClockObj}/>
    else if (props.elementnumber === 2) 
        element = <Weather height="100%" width="100%" hide={true} display={true} propcity="Juneau" propstate="Alaska" onQueryCityen={props.onQueryCityen} setWeatherObj={props.setWeatherObj}/>
    else if (props.elementnumber === 3) 
        element = <Textarea taheight="100%" tawidth="100%" hide={true} getTexts={props.getTexts}/>
    else if (props.elementnumber === 4)
        element = <Image imgheight="100%" imgwidth="100%" hide={true} setSingleImg={props.setSingleImg} imgboo={false}/>
    else if (props.elementnumber === 5)
        element = <News height="100%" width="100%" channelList={true} homeChannel={false} setNews={props.setNews}/>
    
  
    const addButton = () => {
        if(props.elementnumber > 0) {
            if(props.id === 0) {
                props.elements({
                   ...props.elementsvar,
                    e1: props.elementnumber
                })
            }
            else if(props.id === 1) {
                props.elements({
                    ...props.elementsvar,
                    e2: props.elementnumber
                })
            }
            else if(props.id === 2) {
                props.elements({
                    ...props.elementsvar,
                    e3: props.elementnumber
                })
            }
            else if(props.id === 3) {
                props.elements({
                    ...props.elementsvar,
                    e4: props.elementnumber
                })
            }
            else if(props.id === 4) {
                props.elements({
                    ...props.elementsvar,
                    e5: props.elementnumber
                })
            }
            else if(props.id === 5) {
                props.elements({
                    ...props.elementsvar,
                    e6: props.elementnumber
                })
            }
            
            list[props.id] = element
            setShow(false)
        }
       /* else {
            window.alert("Choose a element from the componentlist")
        }*/
    }

    function crossButton() {
        setShow(true)
        if(props.id === 0) {
            if(props.elementsvar.e1 === 2)
                props.setWeatherObj({city: "Juneau", state: "Alaska"})
            props.elementsvar.e1 = 0
        }
        else if(props.id === 1) {
            if(props.elementsvar.e2 === 2)
                props.setWeatherObj({city: "Juneau", state: "Alaska"})
            props.elementsvar.e2 = 0
        }
        else if(props.id === 2) {
            if(props.elementsvar.e3 === 2)
                props.setWeatherObj({city: "Juneau", state: "Alaska"})
            props.elementsvar.e3 = 0
        }
        else if(props.id === 3) {
            if(props.elementsvar.e4 === 2)
                props.setWeatherObj({city: "Juneau", state: "Alaska"})
            props.elementsvar.e4 = 0
        }
        else if(props.id === 4) {
            if(props.elementsvar.e5 === 2)
                props.setWeatherObj({city: "Juneau", state: "Alaska"})
            props.elementsvar.e5 = 0
        } 
        else if(props.id === 5) {
            if(props.elementsvar.e6 === 2)
                props.setWeatherObj({city: "Juneau", state: "Alaska"})
            props.elementsvar.e6 = 0
        }
    }

    return(
        <div 
            className="div1" 
            onClick={()=>props.toggle(props.id)}
            style={{width: props.sqwidth, height: props.sqheight}}
        >
            {show ? <button className="feature-button" onClick={addButton} style={{display: show ? "block" : "none"}}>Add Feature +</button>
            : list[props.id]}
            {show ? null : <img src="/images/icons/cross-circle.png" alt="cross" onClick={crossButton} id="MainTemplateCross"/>}
        </div>
    )
}