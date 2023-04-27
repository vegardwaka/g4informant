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

    if(props.elementNumber === 1) 
        element = <Clock 
                        height="100%" 
                        width="100%" 
                        hide={true} 
                        display={true} 
                        propcontinent="Asia" 
                        propcapital="Tokyo" 
                        elementNumber={props.elementNumber} 
                        squareid={props.id} 
                        setList={props.setList}
                    />
    else if (props.elementNumber === 2) 
        element = <Weather 
                        height="100%" 
                        width="100%" 
                        hide={true} 
                        display={true} 
                        propcity="Juneau" 
                        propstate="Alaska" 
                        setWeatherObj={props.setWeatherObj} 
                        elementNumber={props.elementNumber} 
                        squareid={props.id} 
                        setList={props.setList}
                    />
    else if (props.elementNumber === 3) 
        element = <Textarea 
                        height="100%" 
                        width="100%" 
                        hide={true} 
                        elementNumber={props.elementNumber} 
                        squareid={props.id} 
                        setList={props.setList}
                    />
    else if (props.elementNumber === 4)
        element = <Image 
                        height="100%" 
                        width="100%" 
                        hide={true} 
                        imgboo={false}
                        elementNumber={props.elementNumber} 
                        squareid={props.id} 
                        setList={props.setList}
                    />
    else if (props.elementNumber === 5)
        element = <News 
                        height="100%" 
                        width="100%" 
                        channelList={true} 
                        homeChannel={false} 
                        setNews={props.setNews}
                        elementNumber={props.elementNumber} 
                        squareid={props.id} 
                        setList={props.setList}
                    />
    
    function addButton() {
        if(props.elementNumber > 0) {
            if(props.id === 0) {
                props.setElements({
                   ...props.elements,
                    e1: props.elementNumber
                })
            }
            else if(props.id === 1) {
                props.setElements({
                    ...props.elements,
                    e2: props.elementNumber
                })
            }
            else if(props.id === 2) {
                props.setElements({
                    ...props.elements,
                    e3: props.elementNumber
                })
            }
            else if(props.id === 3) {
                props.setElements({
                    ...props.elements,
                    e4: props.elementNumber
                })
            }
            else if(props.id === 4) {
                props.setElements({
                    ...props.elements,
                    e5: props.elementNumber
                })
            }
            else if(props.id === 5) {
                props.setElements({
                    ...props.elements,
                    e6: props.elementNumber
                })
            }
            
            list[props.id] = element
            setShow(false)
        }
        else {
            window.alert("Choose a element from the componentlist")
        }
    }

    function crossButton() {
        setShow(true)
        if(props.id === 0) {
            if(props.elements.e1 === 2)
                props.setWeatherObj({city: "Juneau", state: "Alaska"})
            props.elements.e1 = 0
        }
        else if(props.id === 1) {
            if(props.elements.e2 === 2)
                props.setWeatherObj({city: "Juneau", state: "Alaska"})
            props.elements.e2 = 0
        }
        else if(props.id === 2) {
            if(props.elements.e3 === 2)
                props.setWeatherObj({city: "Juneau", state: "Alaska"})
            props.elements.e3 = 0
        }
        else if(props.id === 3) {
            if(props.elements.e4 === 2)
                props.setWeatherObj({city: "Juneau", state: "Alaska"})
            props.elements.e4 = 0
        }
        else if(props.id === 4) {
            if(props.elements.e5 === 2)
                props.setWeatherObj({city: "Juneau", state: "Alaska"})
            props.elements.e5 = 0
        } 
        else if(props.id === 5) {
            if(props.elements.e6 === 2)
                props.setWeatherObj({city: "Juneau", state: "Alaska"})
            props.elements.e6 = 0
        }
    }

    return(
        <div 
            className="div1" 
            onClick={()=>props.toggle(props.id)}
            style={{width: props.width, height: props.height}}
        >
            {show ? <button className="feature-button" onClick={addButton} style={{display: show ? "block" : "none"}}>Add Feature +</button>
            : list[props.id]}
            {!show && <img src="/images/icons/cross-circle.png" alt="cross" onClick={crossButton} id="MainTemplateCross"/>}
        </div>
    )
}