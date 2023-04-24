import MainTemplate from './templates/MainTemplate'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Display(props) {
  const { infoscreen } = useParams()
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
      setListe(data)
    })
  }
  
  useEffect(() => {
    submitButtonHent()
  },[])

  return (
      <div className={props.changeboolean ? "profile-display-screen" : "workbench--screen"}> 
          <MainTemplate  
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
                  newsnumber={liste.newsnumber}
                  bgImage={liste.bgImage}
                  imageName={liste.imageName}
                  fontColor={liste.fontColor}
          />
      </div>
  )
}
