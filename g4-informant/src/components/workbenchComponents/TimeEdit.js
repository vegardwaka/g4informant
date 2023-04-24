import { useState } from 'react'

export default function TimeEdit(props) {
    const [show, setShow] = useState(props.hide)

    // SOAP API kall

    return(
        <div 
            className={props.fulldisplay ? "API-container-fulldisplay" : "API-container"}
            onClick={props.toggle}
            style={{
                width: props.width, 
                height: props.height, 
                border: props.show ? '3px dashed black' : ''
            }} 
        >
            <img src="/images/icons/calendar-lines.png" alt="textarea" width="100px"/>
        </div>
    )
}