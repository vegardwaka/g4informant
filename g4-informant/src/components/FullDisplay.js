import MainTemplate from './templates/MainTemplate'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

export default function FullDisplay(props) {
  const { infoscreen } = useParams()
  const [liste, setListe] = useState({})
 
  async function getScreen() {
    await fetch(`http://localhost:3001/data/${infoscreen}`, {
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
                  fulldisplay={props.fulldisplay}
          />
      </div>
  )
}
