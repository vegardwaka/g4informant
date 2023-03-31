import { useState, useEffect } from 'react';
import ExampleTime from '../../json/ExampleTime'

export default function APIKlokke(props){
    const [SyncTime, setSyncTime] = useState([])
        useEffect(() => {
            const proxyUrl = 'http://localhost:3001/APIClock'
            fetch(proxyUrl) 
            .then(response => response.json())
            .then(data => {
                // setSyncTime(data)
                console.log(data.time)
                //console.log(midlDataTime)
                setSyncTime(data)
            })
            .catch(error => console.log(error))   
    }, []);

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(current => !current)
    }

    return (
        <div className="clockBox" style={{width: props.width, border: isActive ? '4px solid red' : ''}} onClick={handleClick}>
            <p>{SyncTime.time}</p>
            <p>{SyncTime.dayOfWeek}</p>
            <p>{SyncTime.timeZone}</p>
            <p>{SyncTime.date}</p>
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