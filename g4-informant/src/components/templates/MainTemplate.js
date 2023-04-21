import Square from './Square'
import DisplaySquare from './DisplaySquare'
import { useState } from 'react' 

export default function MainTemplate(props) {
    const [show, setShow] = useState(true)
    
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
                elements={props.elements}
                elementsvar={props.elementsvar}
                setClockObj={props.setClockObj}
                setWeatherObj={props.setWeatherObj}
                setImage={props.setImage}
                setImageName={props.setImageName}
               
            />
        :
            <DisplaySquare 
                elementnumber={props.number}
                sqheight={props.heighten}
                sqwidth={props.widthen}
                toggle={toggle}
                id={i}
                sizen={props.count}
                state={props.state}
                city={props.city}
                continent={props.continent}
                capital={props.capital}
                squares={props.squares}
                tatext={props.tatext}
                fulldisplay={props.fulldisplay}
                newsnumber={props.newsnumber}
            
            />
    )

    return (
        <div 
            className={show ? "templateBoxMain" : "templateBoxVerticalMain"}
            style={{'background-image': `url(${props.bgImage})`,'background-repeat': 'no-repeat', 'background-size': '100% 100%'}}
        >
            {templateCount}
        </div>
    )
}