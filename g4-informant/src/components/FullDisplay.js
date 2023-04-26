import MainTemplate from './templates/MainTemplate'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function FullDisplay(props) {
  const { infoscreen } = useParams()
  const [liste, setListe] = useState({})
 
  async function getScreen() {
    await fetch(`https://g4informant.azurewebsites.net//data/${infoscreen}`, {
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
    getScreen()
    props.onShow(false)
  }, [])

  return (
      <div className="full-display-screen"> 
          <MainTemplate  
                  count={liste.count} 
                  heighten={liste.tmpheight} 
                  widthen={liste.tmpwidth}
                  number= {liste.tmpquery}
                  choice={false}
                  city={liste.city}
                  state={liste.state}
                  continent={liste.continent}
                  capital={liste.capital}
                  squares={liste.squares}
                  tatext={liste.tatext}
                  newsnumber={liste.newsnumber}
                  fulldisplay={props.fulldisplay}
                  bgImage={liste.bgImage}
                  imageName={liste.imageName}
                  fontColor={liste.fontColor}
                  imgboo={true}
                  hide={true} 
          />
      </div>
  )
}
