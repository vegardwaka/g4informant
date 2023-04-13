import APIKlokke from './APIKlokke'
import Weather from './Weather'
import Logo from './Logo'
import Textarea from './Textarea'
import { useState } from 'react'

export default function CompontentsList({onQueryNumber}){
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive(current => !current)
        onQueryNumber(1)
        setIsActive2(false)
        setIsActive3(false)
    }

    const [isActive2, setIsActive2] = useState(false)
    const handleClick2 = () => {
        setIsActive2(current => !current)
        onQueryNumber(2) 
        setIsActive(false)
        setIsActive3(false)
    }

    const [isActive3, setIsActive3] = useState(false)
    const handleClick3 = () => {
        setIsActive3(current => !current)
        onQueryNumber(3) 
        setIsActive(false)
        setIsActive2(false)
    }
    if(!isActive && !isActive2 && !isActive3) {
        onQueryNumber(0)
    }

    return(
        <div className="workbench-component-list">
            <h3 className="template-title">Elements</h3>
            <div className="workbench-components">
                <APIKlokke width="100%"  toggle={handleClick} show={isActive} hide={false} display={false}/>
                <br />
                <Weather width="100%" toggle={handleClick2} show={isActive2} hide={false} display={false}/>
                <br />
                <Textarea width="100%" toggle={handleClick3} show={isActive3}/>
                <br />
                <Logo/>
            </div>
        </div>
    )
}

