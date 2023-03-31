import { useState } from 'react'
import Weather from '../workbenchComponents/Weather'

export default function MainTemplate(props) {
    let list = []
    for(let i=0; i<props.count; i++)
        list[i] = i

    const [show, setShow] = useState(true);
    const hideButton = () => {
        setShow(false);
    };

    const templateCount = list.map(x => 
        <div 
            className="div1" 
            style={{width: props.width, height: props.height}}>
            {show ? <button className="feature-button" onClick={hideButton} style={{display: show ? "block" : "none"}}>Add Feature +</button>
            : <Weather height="100%" width="100%"/>}
            {show ? null : <p onClick={() => setShow(true)} className="MainTemplateCross">X</p>}
        </div>
    )

    return (
        <div className="templateBoxMain">
            {templateCount}
        </div>
    )
}