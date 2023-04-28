export default function Template(props) {
    let list = []
    for(let i=0; i<props.count; i++)
        list[i] = i
        
/* When you press a template in the TemplateList it gathers the data tied to the selected template and displays it in MainTemplate */
    function toggle(id) {
        props.swap()
    }

    const templateCount = list.map(x => 
        <div
            className="div1" 
            style={{width:props.width, height:props.height}}
            onClick={toggle}
        >
        </div>
    )

    return (
        <div className="templateBox">
            {templateCount}
        </div>
    )
}