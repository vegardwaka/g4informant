export default function Textarea(props) {
    return(
        <div className="API-container" onClick={props.toggle} style={{height:props.taheight, width:props.tawidth, border:props.show ? '3px dashed black' : ''}}>
            <textarea rows="12" cols="40" style={{resize: props.dis ? "none" : ""}}/>
        </div>
    )
}