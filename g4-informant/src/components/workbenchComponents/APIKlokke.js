import { useState, useEffect } from 'react'

export default function APIKlokke(props){
    const [SyncTime, setSyncTime] = useState([])
    const [position, setPosition] = useState(["" + props.propcontinent,"" + props.propcapital])
    const [show, setShow] = useState(props.hide)
    const [display, setDisplay] = useState(props.display)
 //  console.log("Continent: " + props.propcontinent)
 //   console.log("Capital: " + props.propcapital)

    useEffect(() => {
        fetch(`http://localhost:3001/APIClock/${position[0]}&${position[1]}`) 
        .then(response => response.json())
        .then(data => {
            console.log(data.time)
            setSyncTime(data)
        })
        .catch(error => console.log(error))   
    }, [position])

    function changeLocation() {
        const out = prompt("Please write continent and capital separated by a space.", "Europe Oslo")
        const outArray = out.split(" ")
        if(outArray.length > 2) {
            alert("Location not found, please write continent and capital separated by a space.")
            return
        }
        if(outArray.length < 2) {
            alert("Location not found, please write continent and capital separated by a space.")
            return
        }
         fetch(`http://localhost:3001/APIClock/${position[0]}&${position[1]}`, {
            method: 'GET'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data')
                } else {  
                return response.json()}
            })
            .then(data => { 
                if(data.length === 0) {
                    alert("Location not found, please write continent and capital separated by a space.")
                    return
                }
                else {
                    setPosition([outArray[0], outArray[1]])
                    console.log("array " + outArray[0], outArray[1])
                    console.log(position[0], position[1])
                    setShow(false)
                    props.setClockObj({
                        continent: outArray[0],
                        capital: outArray[1]
                    })
                } 
            })  
    }

    useEffect(() => {
        setPosition([position[0], position[1]])
        function runClock() {
            var now = new Date();
            var timeToNextTick = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
            setTimeout(function() {
                setPosition([position[0], position[1]])
                runClock();
            }, timeToNextTick);
        }
        runClock()
    }, [])
        

    return (
        <div 
            className={props.fulldisplay ? "API-container-fulldisplay" : "API-container"}
            style={{width: props.width, height: props.height, border: props.show ? '3px dashed black' : ''}} 
            onClick={props.toggle}
        >
            {show && <button className="weather-location-button" onClick={changeLocation}>Set location</button>}
            {display ? <h3 className="clockbox-day">{SyncTime.dayOfWeek}</h3> : null}
            {display ? <h1 className="clockbox-time">{SyncTime.time}</h1> : <h1>Clock</h1>}
            {display ? <p className="clockbox-zone">{SyncTime.timeZone}</p> : null}
            {display ? <h3 className="clockbox-date">{SyncTime.date}</h3> : null}
        </div>
    )     
}