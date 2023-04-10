import APIKlokke from './APIKlokke'
import Weather from './Weather'
import { useState } from 'react'

export default function CompontentsList({onQueryNumber}){
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(current => !current)
        onQueryNumber(1)
        setIsActive2(false)
    }

    const [isActive2, setIsActive2] = useState(false)

    const handleClick2 = () => {
        setIsActive2(current => !current)
        onQueryNumber(2) 
        setIsActive(false)
    }

    return(
        <div className="workbench-component-list">
            <h3 className="workbench-title">Elements</h3>
            <div className="workbench-components">
                <APIKlokke width="100%"  toggle={handleClick} show={isActive}/>
                <Weather width="100%" toggle={handleClick2} show={isActive2}/>
            </div>
        </div>
    )
}