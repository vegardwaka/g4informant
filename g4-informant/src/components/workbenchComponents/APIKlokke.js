import { useState, useEffect } from 'react';
import ExampleTime from '../../json/ExampleTime'
export default function APIKlokke(props){

    const [SyncTime, setSyncTime] = useState([])
    const [position, setPosition] = useState(["Europe", "Oslo"])
    const [show, setShow] = useState(props.hide)

    useEffect(() => {
        const proxyUrl = `http://localhost:3001/APIClock/${position[0]}&${position[1]}`
        fetch(proxyUrl) 
        .then(response => response.json())
        .then(data => {
            // setSyncTime(data)
            console.log(data.time)
            //console.log(midlDataTime)
            setSyncTime(data)
        })
        .catch(error => console.log(error))   
    }, [position]);

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
                    throw new Error('Failed to fetch data');
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
            setShow(false)} 
            })  
    }

    return (
        <div 
            className="clockBox" 
            style={{width: props.width, height: props.height, border: props.show ? '3px dashed black' : ''}} 
            onClick={props.toggle}>
            {show && <button className="weather-location-button" onClick={changeLocation}>Set location</button>}
            <p className="clockbox-day">{SyncTime.dayOfWeek}</p>
            <h1 className="clockbox-time">{SyncTime.time}</h1>
            <p className="clockbox-zone">{SyncTime.timeZone}</p>
            <p className="clockbox-date">{SyncTime.date}</p>
        </div>
    )     
}




/*import { useState, useEffect } from 'react';
import ExampleTime from '../../json/ExampleTime'

export default function APIKlokke(props){
    const [syncTime, setSyncTime] = useState('')
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(current => !current)
    }

    const list = ExampleTime.map(item => {
        return (
            <div className="clockBox" style={{width: props.width, border: isActive ? '4px solid red' : ''}} onClick={handleClick}>
                <p>{item.time}</p>
                <p>{item.dayOfWeek}</p>
                <p>{item.timeZone.split('/')[1]}</p>
                <p>{item.date}</p>
            </div>
        )     
    }) 
            
    
*/
    /*
    useEffect(() => {
        let midlDataTime = '15:07'
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        const apiUrl = 'https://timeapi.io/api/Time/current/zone?timeZone=Europe/Oslo'
    fetch(apiUrl) 
    .then(response => response.json())
    .then(data => {
        
       // setSyncTime(data)
        console.log(list.time)
        //console.log(midlDataTime)
        setSyncTime(list)
    })
    .catch(error => console.log(error))   
    }, []) */

  /*  return(
        <div>
            <h3>{list}</h3>
        </div>
    )
}*/
//  <h1>{syncTime.time}</h1>
//  <p>{syncTime.date}</p>
  /*fetch(proxyUrl + apiUrl), {
        method: 'GET',
        headers: {
            'Host': 'timeapi.io',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'https://timeapi.io/api/Time/current/zone?timeZone=Europe/Oslo',

    .then(response => response.json())
    .then(data => {
        
        //setSyncTime(data)
        //console.log(data.time)
        console.log(midlDataTime)
    })
    .catch(error => console.log(error))   
    }, []);
        }*/