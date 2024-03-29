import {useState} from "react"

export default function Textarea(props) {
    const [text, setText] = useState('')
    const [show, setShow] = useState(props.hide)
   /* Saves the user input everytime they type a letter into the box */
    function handleChange(event) {
        setText(event.target.value)
        let object = {tatext: event.target.value}
        props.setList(props.squareid,  props.elementNumber, object)
    }

    return(
        <div 
            className={props.fulldisplay ? "API-container-fulldisplay" : "API-container"}
            onClick={props.toggle} 
            style={{
                height:props.height, 
                width:props.width, 
                border:props.show ? '3px dashed black' : ''
            }}
        >
            {show ? <textarea 
                        rows="12" 
                        cols="40" 
                        readOnly={props.read}
                        value={props.dis ? props.tatext : text}
                        onChange={handleChange}
                        style={{resize: props.dis ? "none" : "", border:"none", background:"none", color:sessionStorage.getItem("font")}}
                    /> 
                : 
                    <img src="/images/icons/text.png" alt="textarea" width="100px"/>
            }
        </div>
    )
}
