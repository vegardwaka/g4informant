import ProfileCard from './ProfileCard'
import { useState, useEffect } from "react"

export default function Profile(props){
    const [thingsArray, setThingsArray] = useState([])
    const [isPending, setIsPending] = useState(true)
    let empty

    useEffect(() => {
        fetch(`https://g4informant.com/api.php/records/infoskjerm/?filter=user_name,eq,${localStorage.getItem('token').replace(/"/g, "")}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data')
            } else {
                return response.json()
            }
        })
        .then(data => {
            console.log(data)
            setThingsArray(data.records)
            setIsPending(false)
        })
        .catch(error => {
            console.log(error)
        })
    } , [])
   
    function addItem(index) {
        setThingsArray(oldValues => {
            return oldValues.filter((_, i) => i !== index)
        })
    }
    
    const thingsElements = thingsArray.map((thing, i) => (
        <ProfileCard
          key={thing.infoskjerm_id}
          id={thing.infoskjerm_id}
          title={thing.tittel}
          user_name={thing.user_name}
          toggle={() => addItem(i)}
          number={i + 1}
        />
    ))

    if (thingsArray.length === 0)
        empty = <p className="empty-informationscreen-p">You dont seem to have any information screens. Make one <a href="/Workbench">here</a>.</p>

    return(
        <div className="profile-container">
            <h1 className="profile-title">Hi, {localStorage.getItem('token').replace(/"/g, "")}!</h1>
            <div className="profile-workbench">
                <h2 className="profile--header">Your information screens</h2>
                <div className="profile-workbench-container">
                    {thingsElements}
                    {isPending ? <div className="loading-text">Loading ...</div> : empty}
                    
                </div>
            </div>
        </div>
    )
}