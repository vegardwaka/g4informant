export default function Template(props) {
    let list = []
    for(let i=0; i<props.count; i++)
        list[i] = i

    const templateCount = list.map(x => 
        <div 
            className="div1" 
            onClick={props.swap } 
            style={{width: props.width, height: props.height}}>
        </div>
    )

    return (
        <div className="templateBox" >
            {templateCount}
        </div>
    )
}