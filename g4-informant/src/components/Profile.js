import ProfileCard from './ProfileCard'
import { useState } from "react"

export default function Profile(){
    const [thingsArray, setThingsArray] = useState([0,1,2])
    
    function addItem(index) {
        setThingsArray(oldValues => {
            return oldValues.filter((_, i) => i !== index)
            
        })
        console.log("value verdi: " + index)
    }
    
    const thingsElements = thingsArray.map((thing,i) =>
        <ProfileCard 
            key={i}
            number={i} 
            id={i}
            toggle={() => addItem(i)}
        /> 
    )

    /*
    let list = []
    for(let i=0; i<3; i++)
        list[i] = i

    let liste = list.map((i) => 
        <ProfileCard 
            key={i}
            number={i+1} 
            id={i}
            toggle={toggle}
        /> 
    )
    const [mainList, setMainList] = useState(liste)
    
    function toggle(id) {
        /*
        console.log(id)
        mainList.splice(id, 1);
        console.log("liste etterpå: " + liste) */
    
        
    return(
        <div className="profile-container">
            <h1 className="profile-title">Hi, {localStorage.getItem('token').replace(/"/g, "")}!</h1>
            <div className="profile-workbench">
                <h2 className="profile--header">Your information screens</h2>
                <div className="profile-workbench-container">
                    {thingsElements}
                </div>
            </div>
        </div>
    )
}