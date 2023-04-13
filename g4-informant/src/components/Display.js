import HomeCard from './HomeCard'
import info from '../json/info'
import MainTemplate from './templates/MainTemplate'
import { useState } from 'react'

export default function Display() {
  var name = 1234567
  let element
  const [liste, setListe] = useState({})

  async function submitButtonHent() {
    await fetch(`http://localhost:3001/data/${name}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(JSON.stringify(data))
      setListe(data)
    })
  }
  
  element = <MainTemplate  
                  count={liste.count} 
                  heighten={liste.tmpheight} 
                  widthen={liste.tmpwidth}
                  number= {liste.tmpquery}
                />  

    return (
        <>
            <h1>Tittel: {liste.titletxt }</h1>
            <button type="submit" className="save-workbench-button" onClick={submitButtonHent}>Save your work</button>
            
            <div className="workbench--screen"> 
                {element}
            </div>
        </>
    )
}