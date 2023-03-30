

export default function TemplateVertical(props) {
    let list = []
    for(let i=0; i<props.count; i++)
        list[i] = i

    const templateCount = list.map(x => 
        <div 
            className="div2" 
            onClick={props.swap } 
            style={{width: props.width, height: props.height}}>
        </div>
    )
    
    return (
        <div className="templateBoxVertical">
            {templateCount}
        </div>
    )
}