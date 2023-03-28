import {useState} from 'react'
export default function TestElement(props) {

    return (
        <div className="templateBox">
            <div
                className="div1"
                style={{height: props.height, width: props.width, backgroundColor: "red"}}>
            </div>
        </div>
    )
}