import { useState, useEffect } from 'react';

export default function APIKlokke(){
    const [SyncTime, setSyncTime] = useState('')
        useEffect(() => {
        let midlDataTime = '15:07'
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const apiUrl = 'https://timeapi.io/api/Time/current/zone?timeZone=Europe/Oslo';
        const proxy2 = 'https://proxy-ams.hidemyass-freeproxy.com/proxy/en-ww/aHR0cHM6Ly90aW1lYXBpLmlvL2FwaS9UaW1lL2N1cnJlbnQvem9uZT90aW1lWm9uZT1FdXJvcGUvT3Nsbw'
    fetch(proxy2) 
    .then(response => response.json())
    .then(data => {
        
       // setSyncTime(data)
        console.log(data.time)
        //console.log(midlDataTime)
        setSyncTime(midlDataTime)
    })
    .catch(error => console.log(error))   
    }, []);

    return(
        <div>
            <h1>{SyncTime.time}</h1>
            <p>{SyncTime.date}</p>
        </div>
    )
}

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