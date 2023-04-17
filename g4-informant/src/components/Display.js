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
                  tall1={0}
                  elementtall={9}
                  choice={false}
                  city={liste.city}
                  state={liste.state}
                  continent={liste.continent}
                  capital={liste.capital}
                  squares={liste.squares}
                />  
          

    return (
        <>
            <h1>Title: {liste.title }</h1>
            <h1>Made by: {liste.user}</h1>
            <h1>city test: {liste.city}</h1>
            <h1>state test: {liste.state}</h1>
            <h1>continent test: {liste.continent}</h1>
            <h1>capital test: {liste.capital}</h1>
            <button type="submit" className="save-workbench-button" onClick={submitButtonHent}>Show your work</button>
            
            <div className="workbench--screen"> 
                {element}
            </div>
        </>
    )
}