export default function Textarea(props) {
    return(
        <div className="textbox-component" onClick={props.toggle} style={{height:props.heighten, width:props.widthen, border:props.show ? '3px dashed black' : ''}}>
            <textarea rows="12" cols="40"/>
        </div>
    )
}