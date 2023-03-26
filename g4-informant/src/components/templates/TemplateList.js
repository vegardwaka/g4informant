import Template from './Template'
import Workbench from '../Workbench'
import { useState } from 'react'
import MainTemplate from "./MainTemplate"

export default function TemplateList() {
    const [tall, setTall] = useState(0)
    const [hoyde, setHoyde] = useState('')
    const [bredde, setBredde] = useState('')
    const [isActive, setIsActive] = useState(false)
    const [isActive2, setIsActive2] = useState(true)
    
    function templateStyles(tallet, hoys, breds) {
        setTall(tallet)
        setHoyde(hoys)
        setBredde(breds)
        handleClick()
    }

    const handleClick = () => {
        setIsActive(true)
        setIsActive2(false)
    }

    const handleClick2 = () => {
        setIsActive(false)
        setIsActive2(true)
        setTall(0)
        setHoyde('')
        setBredde('')
    }

    
    return (
        <div className="workbench-template-list"  /* style={{display: isActive2 ? 'block' : 'none'}} */ >
            <button className="prev-button" onClick={handleClick2} style={{display: isActive ? 'block' : 'none'}}>prev</button> 
            <h3 className="template-title">Templates</h3>
            <div className="workbench-templates">
                <Template 
                    antall="4"
                    hoy="50%"
                    bredde="50%"
                    swap={() => templateStyles(4, "50%", "50%")}
                />
                <Template 
                    antall="6" 
                    hoy="50%"
                    bredde="33.3%"
                    swap={() => templateStyles(6, "50%", "33.3%")}
                />
                <Template 
                    antall="2" 
                    bredde="50%" 
                    hoy="100%"
                    swap={() => templateStyles(2, "100%", "50%")}
                />
                <Template 
                    antall="2" 
                    bredde="100%" 
                    swap={() => templateStyles(2, "50%", "100%")}
                />
                <Template 
                    antall="4"
                
                />
                <Template 
                    antall="4"
                    
                />
                <Template 
                    antall="4"
                    
                />
            </div>
        </div>
    )
}