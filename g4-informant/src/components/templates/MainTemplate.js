import Square from './Square'

export default function MainTemplate(props) {
    let list = []
    for(let i=0; i<props.count; i++)
        list[i] = i

    function toggle(id) {
        console.log("ID:" + id)
    }

    const templateCount = list.map((x,i) => 
        <Square 
            elementnumber={props.number}
            sqheight={props.heighten}
            sqwidth={props.widthen}
            toggle={toggle}
            id={i}
            sizen={props.count}
        />
    )

    return (
        <div className="templateBoxMain">
            {templateCount}
        </div>
    )
}