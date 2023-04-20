export default function TemplateVertical(props) {
    let list = []
    for(let i=0; i<props.count; i++)
        list[i] = i

    function toggle(id) {
        props.swap()
    }

    const templateCount = list.map(x => 
        <div 
            className="div1" 
            style={{width: props.width, height: props.height}}
            onClick={toggle} 
        >
        </div>
    )
    
    return (
        <div className="templateBoxVertical">
            {templateCount}
        </div>
    )
}