import {useState} from "react"

export default function Textarea(props) {
    const [text, setText] = useState('')
    const [show, setShow] = useState(props.hide)

    function handleChange(event) {
        setText(event.target.value)
        props.getTexts(event.target.value)
    }

    return(
        <div 
            className={props.fulldisplay ? "API-container-fulldisplay" : "API-container"}
            onClick={props.toggle} 
            style={{height:props.taheight, width:props.tawidth, border:props.show ? '3px dashed black' : ''}}
        >
            {show ? <textarea 
                rows="12" 
                cols="40" 
                readOnly={props.read}
                value={props.dis ? props.tatext : text}
                onChange={handleChange}
                style={{resize: props.dis ? "none" : "", border:"none", background:"none"}}
            /> : <h1>TextArea</h1>}
        </div>
    )
}

// , border:"none", background:"none"