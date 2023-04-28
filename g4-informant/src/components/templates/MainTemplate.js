import Square from './Square'
import DisplaySquare from './DisplaySquare'

export default function MainTemplate(props) {
    let list = []
    for(let i=0; i<props.count; i++)
        list[i] = i

    function toggle(id) {}

    /* Creates the amount of squares that the template you chose contains */
    const templateCount = list.map((x,i) => 
        props.choice ?
            <Square 
                elementNumber={props.elementNumber}
                height={props.height}
                width={props.width}
                toggle={toggle}
                id={i}
                setElements={props.setElements}
                elements={props.elements}
                setWeatherObj={props.setWeatherObj}
                setNews={props.setNews}
                fontColor= {props.fontColor}
                setList={props.setList}
            />
        :
            <DisplaySquare 
                elementNumber={props.elementNumber}
                height={props.height}
                width={props.width}
                toggle={toggle}
                id={i}
                count={props.count}
                squares={props.squares}
                fulldisplay={props.fulldisplay}
                showImage={props.showImage}
                hide={props.hide}
                listData={props.listData}
            />
    )

    return (
        <div 
            className="templateBoxMain"
            style={{'background-image': `url(${props.bgImage})`,'background-repeat': 'no-repeat', 'background-size': '100% 100%', 'color': props.fontColor}}
        >
            {templateCount}
        </div>
    )
}