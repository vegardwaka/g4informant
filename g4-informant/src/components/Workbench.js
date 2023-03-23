import {useState} from 'react';
import APIKlokke from "./workbenchData/APIKlokke"

export default function Workbench() {
    const [count, setCount] = useState(0);
    const [klokke, setKlokke] = useState("");

    function APIKlokke(){
        fetch("http://worldtimeapi.org/api/ip")
        .then((response) => response.json())
        .then((data) => {
            setKlokke(data.datetime);
        });
    };

    function handleClickAdd() {
        setCount(count + 1)
   
    }

    function handleClickSub() {
        setCount(count - 1)
    }

    return (
        <div className="workbench-container">
            <h1>Velkommen til din arbeidsbenk</h1>
            <p>Denne er WIP (work in progress)</p>
            <p>Her kommer det noe.</p>
            <div className="workbench-box">
                <h2 className="workbench-counter">{count}</h2>
                <button onClick={handleClickAdd} className="workbench-button-add">+</button>
                <button onClick={handleClickSub} className="workbench-button-sub">-</button>
            </div>
            <div className="workbench-box">
                <h2 className="workbench-counter">{klokke} </h2>
                <button onClick={APIKlokke} className="workbench-button-add">+</button>
            </div>
        </div>
    )
}