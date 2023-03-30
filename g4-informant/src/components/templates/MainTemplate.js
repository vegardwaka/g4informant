import TestElement from "../workbenchComponents/TestElement"
import { useState } from 'react'

export default function MainTemplate(props) {
    let list = []
    for(let i=0; i<props.count; i++)
        list[i] = i

    const templateCount = list.map(x => 
        <div 
            className="div1" 
            onClick={props.swap} 
            style={{width: props.width, height: props.height}}>
            <button className="feature-button">Add Feature +</button>
        </div>
    )

    return (
        <div className="templateBoxMain">
            {templateCount}
        </div>
    )
}