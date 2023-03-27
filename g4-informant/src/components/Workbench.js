import { useState } from 'react';
import Template from "./templates/Template"
import MainTemplate from "./templates/MainTemplate"
import TemplateList from "./templates/TemplateList"
import ComponentList from "./workbenchComponents/ComponentsList"

export default function Workbench() {
    const [tall, setTall] = useState(0)
    const [hoyde, setHoyde] = useState('')
    const [bredde, setBredde] = useState('')
    const [isActive, setIsActive] = useState(false)
    const [isActive2, setIsActive2] = useState(true)
    const [render, setRender] = useState(true)

    const handleClick2 = () => {
        setIsActive(false)
        setIsActive2(true)
        setTall(0)
        setHoyde('')
        setBredde('')
    }



    function templateStyles(tallet, hoys, breds) {
        setTall(tallet)
        setHoyde(hoys)
        setBredde(breds)
        //handleClick()
    }

    return (
      <div>
        <h2 className="workbench-title">Welcome to your workbench</h2>
        <div className="workbench">
            
            {render ? <TemplateList/> : <ComponentList/>}

            <div className="workbench--screen">
                <MainTemplate  antall={tall} hoy={hoyde} bredde={bredde}/>
            </div>
        </div>
    </div>
    )
}