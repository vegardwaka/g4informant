import APIKlokke from './APIKlokke'
import Weather from './Weather'
import Textarea from './Textarea'
import Image from './Image'
import TimeEdit from './TimeEdit'
import News from './News'
import { useState } from 'react'

export default function CompontentsList({onQueryNumber}){
    const [isActive, setIsActive] = useState(false)
    
    const handleClick = () => {
        setIsActive(current => !current)
        onQueryNumber(1)
        setIsActive2(false)
        setIsActive3(false)
        setIsActive4(false)
        setIsActive5(false)
        setIsActive6(false)
    }

    const [isActive2, setIsActive2] = useState(false)
    const handleClick2 = () => {
        setIsActive2(current => !current)
        onQueryNumber(2) 
        setIsActive(false)
        setIsActive3(false)
        setIsActive4(false)
        setIsActive5(false)
        setIsActive6(false)
    }

    const [isActive3, setIsActive3] = useState(false)
    const handleClick3 = () => {
        setIsActive3(current => !current)
        onQueryNumber(3) 
        setIsActive(false)
        setIsActive2(false)
        setIsActive4(false)
        setIsActive5(false)
        setIsActive6(false)
    }
    const [isActive4, setIsActive4] = useState(false)
    const handleClick4 = () => {
        setIsActive4(current => !current)
        onQueryNumber(4) 
        setIsActive(false)
        setIsActive2(false)
        setIsActive3(false)
        setIsActive5(false)
        setIsActive6(false)
    }
    const [isActive5, setIsActive5] = useState(false)
    const handleClick5 = () => {
        setIsActive5(current => !current)
        onQueryNumber(5) 
        setIsActive(false)
        setIsActive2(false)
        setIsActive3(false)
        setIsActive4(false)
        setIsActive6(false)
    }
    const [isActive6, setIsActive6] = useState(false)
    const handleClick6 = () => {
        setIsActive6(current => !current)
        onQueryNumber(6) 
        setIsActive(false)
        setIsActive2(false)
        setIsActive3(false)
        setIsActive4(false)
        setIsActive5(false)
    }
    if(!isActive && !isActive2 && !isActive3 && !isActive4 && !isActive5 && !isActive6) {
        onQueryNumber(0)
    }

    return(
        <div className="workbench-component-list">
            <h3 className="template-title">Elements</h3>
            <div className="workbench-components">
                <APIKlokke width="100%" toggle={handleClick} show={isActive} hide={false} display={false} propcontinent="Asia" propcapital="Tokyo"/>
                <br />
                <Weather width="100%" toggle={handleClick2} show={isActive2} hide={false} display={false} propcity="Juneau" propstate="Alaska"/>
                <br />
                <Textarea tawidth="100%" toggle={handleClick3} show={isActive3} hide={false} dis={true} read={true}/>
                <br />
                <Image imgwidth="100%" toggle={handleClick4} show={isActive4} hide={false}/>
                <br />
                <TimeEdit width="100%" toggle={handleClick5} show={isActive5}/>
                <br />
                <News width="100%" toggle={handleClick6} show={isActive6} hide={false} homeChannel={true}/>
                <br />
            </div>
        </div>
    )
}

