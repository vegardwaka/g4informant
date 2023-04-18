import {useState} from "react"

export default function Textarea(props) {
    const [text, setText] = useState('')

    function handleChange(event) {
        setText(event.target.value)
        console.log(event.target.value)
        sessionStorage.setItem("taText", text)
    }

    

    return(
        <div className="API-container" onClick={props.toggle} style={{height:props.taheight, width:props.tawidth, border:props.show ? '3px dashed black' : ''}}>
            <textarea 
                rows="12" 
                cols="40" 
                readOnly={props.read}
                value={props.dis ? props.tatext : text}
                onChange={handleChange}
                style={{resize: props.dis ? "none" : ""}}
            />
        </div>
    )
}