import Square from './Square'
import DisplaySquare from './DisplaySquare'

export default function MainTemplate(props) {
    let list = []
    for(let i=0; i<props.count; i++)
        list[i] = i

    function toggle(id) {
        console.log("ID:" + id)
    }

    const templateCount = list.map((x,i) => 
        props.choice ?
            <Square 
                elementnumber={props.number}
                sqheight={props.heighten}
                sqwidth={props.widthen}
                toggle={toggle}
                id={i}
                sizen={props.count}
            />
        :
            <DisplaySquare 
                elementnumber={props.number}
                sqheight={props.heighten}
                sqwidth={props.widthen}
                toggle={toggle}
                id={i}
                sizen={props.count}
                tall1={props.tall1}
                elementtall={props.elementtall}
                state={props.state}
                city={props.city}
                continent={props.continent}
                capital={props.capital}
                squares={props.squares}
                tatext={props.tatext}
                fulldisplay={props.fulldisplay}
            />
    )

    return (
        <div className="templateBoxMain">
            {templateCount}
        </div>
    )
}