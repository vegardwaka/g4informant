import { useState } from 'react'
import Weather from '../workbenchComponents/Weather'
import Clock from '../workbenchComponents/Clock'
import Textarea from '../workbenchComponents/Textarea'
import Image from '../workbenchComponents/Image'
import News from '../workbenchComponents/News'

export default function DisplaySquare(props) {
    const [list, setList] = useState([])
    
    for(let i=0; i<props.sizen; i++) {
        let element
        if(props.squares[i].elementNr > 0) {
            if(props.squares[i].elementNr === 1) 
                element = <Clock 
                                height="100%" 
                                width="100%" 
                                hide={false} 
                                display={true} 
                                propcapital={props.listData[i].capital} 
                                propcontinent={props.listData[i].continent} 
                                fulldisplay={true}
                            />
            else if (props.squares[i].elementNr === 2) 
                element = <Weather 
                                height="100%" 
                                width="100%" 
                                hide={false} 
                                display={true} 
                                propcity={props.listData[i].city} 
                                propstate={props.listData[i].state} 
                                fulldisplay={true}
                            />
            else if (props.squares[i].elementNr === 3) 
                element = <Textarea 
                                tawidth="100%" 
                                taheight="100%" 
                                hide={true} 
                                dis={true} 
                                read={true} 
                                tatext={props.listData[i].tatext} 
                                fulldisplay={true}
                            />
            else if (props.squares[i].elementNr === 4)
                element = <Image 
                                imgwidth="100%" 
                                imgheight="100%" 
                                fulldisplay={true} 
                                imageName={props.listData[i].imagen} 
                                imgboo={props.imgboo} 
                                hide={props.hide}
                            />
            else if (props.squares[i].elementNr === 5)
                element = <News 
                                width="100%" 
                                height="100%" 
                                homeChannel={false} 
                                channelList={false} 
                                newsnumber={props.listData[i].newsNumber} 
                                fulldisplay={true}
                            />
        } else {
            element = <h1>{ }</h1>
        }
        list[i] = element
    }
 
    return ( 
        <div 
            className={props.fulldisplay ? "div1-full-screen" : "div1-display"}
            onClick={()=>props.toggle(props.id)}
            style={{width: props.sqwidth, height: props.sqheight}}
        >
            {list[props.id]}
        </div>
    )
}
