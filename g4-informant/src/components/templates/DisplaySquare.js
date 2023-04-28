import { useState } from 'react'
import Weather from '../workbenchComponents/Weather'
import Clock from '../workbenchComponents/Clock'
import Textarea from '../workbenchComponents/Textarea'
import Image from '../workbenchComponents/Image'
import News from '../workbenchComponents/News'

export default function DisplaySquare(props) {
    const [list, setList] = useState([])
    
    /* Checks which squares contain a element or not and adds them to each DisplaySquare in the information screen. This is used to make the information screen viewable in profile and through URL*/
    for(let i=0; i<props.count; i++) {
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
                                width="100%" 
                                height="100%" 
                                hide={true} 
                                dis={true} 
                                read={true} 
                                tatext={props.listData[i].tatext} 
                                fulldisplay={true}
                            />
            else if (props.squares[i].elementNr === 4)
                element = <Image 
                                height="100%" 
                                width="100%" 
                                fulldisplay={true} 
                                imageName={props.listData[i].image} 
                                showImage={props.showImage} 
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
            style={{width: props.width, height: props.height}}
        >
            {list[props.id]}
        </div>
    )
}
