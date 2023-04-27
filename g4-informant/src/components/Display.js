import MainTemplate from './templates/MainTemplate'
import { useState, useEffect } from 'react'

export default function Display(props) {
  const [liste, setListe] = useState({})

  /* Gets information screens, it's subcomponents and data, to display them in profile preview */
  async function submitButtonHent() {
    await fetch(`https://g4informant.azurewebsites.net//data/${props.title}`, {
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

  /* props */
  return (
      <div className={props.changeboolean ? "profile-display-screen" : "workbench--screen"}> 
          <MainTemplate  
                  count={liste.count} 
                  heighten={liste.height} 
                  widthen={liste.width}
                  number={liste.elementNumber}
                  choice={false}
                  squares={liste.squares}
                  bgImage={liste.bgImage}
                  fontColor={liste.fontColor}
                  city={liste.city}
                  state={liste.state}
                  continent={liste.continent}
                  capital={liste.capital}
                  tatext={liste.tatext}
                  newsnumber={liste.newsnumber}
                  imageName={liste.imageName}
                  fulldisplay={false}
                  imgboo={false}
                  hide={false}
                  listData={liste.listData}     
          />
      </div>
  )
}

             