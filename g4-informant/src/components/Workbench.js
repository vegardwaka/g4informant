import { useState } from 'react';
import APIKlokke from "./workbenchData/APIKlokke"
import Weather from "./workbenchComponents/Weather"
import Template from "./templates/Template"

export default function Workbench() {
    const [klokke, setKlokke] = useState("");
    const [tall, setTall] = useState(4);

    function APIKlokke(){
        fetch("http://worldtimeapi.org/api/ip")
        .then((response) => response.json())
        .then((data) => {
            setKlokke(data.datetime);
        });
    };

    function testing() {
        setTall(2);
    }
    

    return (
      <div>
        <h2 className="workbench-title">Welcome to your workbench</h2>
        <div className="workbench">
            <div className="workbench-template-list">
                <h3 className="template-title">Templates</h3>
                <div className="workbench-templates">
                    <Template 
                        antall="4"
                        test={testing}
                    />
                    <Template 
                        antall="6" 
                        bredde="33.3%"
                        test={testing}
                    />
                    <Template 
                        antall="2" 
                        bredde="50%" 
                        hoy="100%"
                        test={testing}
                    />
                    <Template 
                        antall="2" 
                        bredde="100%" 
                        test={testing}
                    />
                    <Template 
                        antall="4"
                        test={testing}
                    />
                    <Template 
                        antall="4"
                        test={testing}
                    />
                    <Template 
                        antall="4"
                        test={testing}
                    />
                </div>
            </div>
            <div className="workbench--screen">
                <Template  antall={tall}/>
            </div>
        </div>
    </div>
    )
}