import Clock from './Clock'
import Weather from './Weather'
import Textarea from './Textarea'
import Image from './Image'
import News from './News'
import { useState } from 'react'

export default function CompontentsList(props){
    const [isActive, setIsActive] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)
    const [isActive5, setIsActive5] = useState(false)
    const setTab = [setIsActive,setIsActive2,setIsActive3,setIsActive4,setIsActive5]

    function handleClick(p_number) {
        for(let i=0; i<setTab.length; i++)
            setTab[i](false)
        setTab[p_number-1](true)
        props.setElementNumber(p_number)
    }

    if(!isActive && !isActive2 && !isActive3 && !isActive4  && !isActive5) {
        props.setElementNumber(0)
    }

    return(
        <div className="workbench-component-list">
            <h3 className="template-title">Elements</h3>
            <div className="workbench-components">
                <Clock 
                    width="100%" 
                    toggle={() => handleClick(1)} 
                    show={isActive} 
                    hide={false} 
                    display={false} 
                    propcontinent="Asia" 
                    propcapital="Tokyo"
                />
                <br />
                <Weather 
                    width="100%" 
                    toggle={() => handleClick(2)} 
                    show={isActive2} 
                    hide={false} 
                    display={false} 
                    propcity="Juneau" 
                    propstate="Alaska"
                />
                <br />
                <Textarea 
                    width="100%" 
                    toggle={() => handleClick(3)} 
                    show={isActive3} 
                    hide={false} 
                    dis={true} 
                    read={true}
                />
                <br />
                <Image 
                    width="100%" 
                    toggle={() => handleClick(4)} 
                    show={isActive4} 
                    hide={false} 
                    imgboo={false}
                />
                <br />
                <News 
                    width="100%" 
                    toggle={() => handleClick(5)} 
                    show={isActive5} 
                    hide={false} 
                    homeChannel={true}
                />
                <br />
            </div>
        </div>
    )
}


  

