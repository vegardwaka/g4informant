import React from 'react';
import Display from './Display'

export default function ProfileCard(props) {
    function deleteScreen() {
        async function deleteScreen(data) {
            await fetch(`http://localhost:3001/data/${props.title}`, {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
              console.log(data.message)
            })
            .catch(error => {
              console.error(error)
            })
        }

        async function deleteFromDatabase() {
            const response = await fetch(`https://g4informant.com/api.php/records/infoskjerm/${props.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                return response.json()
            })
            .then(data => { 
                console.log(data)
                if (data.code === 1001) {
                    window.alert("table not found")
                    return null
                } else if (data.code === 9999) {
                    console.log(data.code)
                    window.alert("Something went wrong. Try again!")
                    return null
                } else {
                    console.log(data)
                    window.alert(`Screen ${props.title} deleted!`)
                    deleteScreen()
                    props.toggle(props.title)
                }
            })
        }
        deleteFromDatabase()
    }
   
    return(
        <div className="profile-card">
            <h2 className="profile-card-title">Screen {props.title}</h2>
            <Display changeboolean={true} fulldisplay={false} title={props.title}/>
            <div className="profile-buttons">
                <a className="profile--link"href={`screen/${props.title}`}><button className="profile--display">Display screen</button></a>
                <button className="profile--delete" onClick={deleteScreen}><img src="/images/icons/trash.png" width="20px"/></button>
            </div>
        </div>
    )

}