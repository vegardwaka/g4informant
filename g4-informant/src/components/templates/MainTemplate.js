import TestElement from "../workbenchComponents/TestElement"
import { useState } from 'react'

export default function MainTemplate(props) {
    const [element, setElement] = useState(false)

    let list = []
    for(let i=0; i<props.count; i++)
        list[i] = i;

    function addElement() {
        setElement(true)
    }
// {element ? <TestElement width="100%" height="100%"/> : <p>feil</p>}
    const templateCount = list.map(x => 
        
        <div 
            className="div1" 
            onClick={props.swap} 
            style={{width: props.width, height: props.height}}>
            <button className="feature-button" onClick={addElement}>Add Feature +</button>
           
        </div>
    )

    return (
        <div className="templateBoxMain">
            {templateCount}
        </div>
    )
}