import Clock from './Clock'
import Weather from './Weather'
import Textarea from './Textarea'
import Image from './Image'
import TimeEdit from './TimeEdit'
import News from './News'
import { useState } from 'react'

export default function CompontentsList({onQueryNumber}){
    const [isActive, setIsActive] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)
    const [isActive5, setIsActive5] = useState(false)
    const [isActive6, setIsActive6] = useState(false)
    const setTab = [setIsActive,setIsActive2,setIsActive3,setIsActive4,setIsActive5,setIsActive6]

    function handleClick(p_number) {
        for(let i=0; i<setTab.length; i++)
            setTab[i](false)
        setTab[p_number-1](true)
        onQueryNumber(p_number)
    }

    if(!isActive && !isActive2 && !isActive3 && !isActive4  && !isActive5  && !isActive6) {
        onQueryNumber(0)
    }

    return(
        <div className="workbench-component-list">
            <h3 className="template-title">Elements</h3>
            <div className="workbench-components">
                <Clock width="100%" toggle={() => handleClick(1)} show={isActive} hide={false} display={false} propcontinent="Asia" propcapital="Tokyo"/>
                <br />
                <Weather width="100%" toggle={() => handleClick(2)} show={isActive2} hide={false} display={false} propcity="Juneau" propstate="Alaska"/>
                <br />
                <Textarea tawidth="100%" toggle={() => handleClick(3)} show={isActive3} hide={false} dis={true} read={true}/>
                <br />
                <Image imgwidth="100%" toggle={() => handleClick(4)} show={isActive4} hide={false} imgboo={false}/>
                <br />
                <TimeEdit width="100%" toggle={() => handleClick(5)} show={isActive5}/>
                <br />
                <News width="100%" toggle={() => handleClick(6)} show={isActive6} hide={false} homeChannel={true}/>
                <br />
            </div>
        </div>
    )
}


  

