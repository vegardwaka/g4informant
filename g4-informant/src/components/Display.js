import MainTemplate from './templates/MainTemplate'
import { useState, useEffect } from 'react'

export default function Display(props) {
  let element
  const [liste, setListe] = useState({})

  async function submitButtonHent() {
    await fetch(`http://localhost:3001/data/${props.title}`, {
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
  
  useEffect(() => {
    submitButtonHent()
  }, [])

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
                  tatext={liste.tatext}
            />  

  return (
      <div className={props.changeboolean ? "profile-display-screen" : "workbench--screen"}> 
          {element}
      </div>
  )
}
