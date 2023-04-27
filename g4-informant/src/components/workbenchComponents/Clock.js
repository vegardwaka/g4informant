import { useState, useEffect } from 'react'

export default function Clock(props){
    const [SyncTime, setSyncTime] = useState([])
    const [position, setPosition] = useState(["" + props.propcontinent,"" + props.propcapital])
    const [show, setShow] = useState(props.hide)
    const [display, setDisplay] = useState(props.display)

   /* fetches the clock API from our server that we use as a proxy on a change in the position useState */
    useEffect(() => {
        fetch(`https://g4informant.azurewebsites.net//APIClock/${position[0]}&${position[1]}`) 
        .then(response => response.json())
        .then(data => {
            setSyncTime(data)
            console.log("font fargen: " + props.fontColor)
        })
        .catch(error => console.log(error))   
    }, [position])

    /* Updates the clock when a user inputs a new position */
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
         fetch(`https://g4informant.azurewebsites.net//APIClock/${position[0]}&${position[1]}`, {
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
                    setShow(false)
                    props.setClockObj({
                        continent: outArray[0],
                        capital: outArray[1]
                    })
                    let object = {continent: outArray[0], capital: outArray[1]}
                    props.setList(props.squareid, props.elementnumber, object)
                } 
            })  
    }

    /* Updates the clock time every minute, however due to JavaScript limits it is not 100% accurate */
    useEffect(() => {
        setPosition([position[0], position[1]])
        function runClock() {
            var now = new Date() 
            var timeToNextTick = (60 - now.getSeconds()) * 1000 - now.getMilliseconds()
            setTimeout(function() {
                setPosition([position[0], position[1]])
                runClock()
            }, timeToNextTick)
        }
        runClock()
    }, [])
        

    return (
        <div 
            className={props.fulldisplay ? "API-container-fulldisplay" : "API-container"}
            onClick={props.toggle}
            style={{
                width: props.width, 
                height: props.height, 
                border: props.show ? '3px dashed black' : ''
            }} 
        >
            {show && <button className="weather-location-button" onClick={changeLocation}>Set location</button>}
            {display && <h3 className="clockbox-day">{SyncTime.dayOfWeek}</h3>}
            {display ? <h1 className="clockbox-time">{SyncTime.time}</h1> : <img src="/images/icons/clock.png" alt="clock" width="100px"/>}
            {display && <p className="clockbox-zone">{SyncTime.timeZone}</p>}
            {display && <h3 className="clockbox-date">{SyncTime.date}</h3>}
        </div>
    )     
}