import MainTemplate from './templates/MainTemplate'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function FullDisplay(props) {
  const { infoscreen } = useParams()
  const [list, setList] = useState({})
  
  /* Gets the information screens and the data for the subcomponents */ 
  async function getScreen() {
    await fetch(`https://g4informant.azurewebsites.net//data/${infoscreen}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      })
      .then(response => {
        return response.json()
      })
      .then(data => {
        setList(data)
      })
  }
  
  useEffect(() => {
    getScreen()
    props.onShow(false)
  }, [])

  return (
      <div className="full-display-screen"> 
          <MainTemplate  
                  count={list.count} 
                  height={list.height} 
                  width={list.width}
                  elementNumber={list.elementNumber}
                  choice={false}
                  squares={list.squares}
                  fulldisplay={props.fulldisplay}
                  bgImage={list.bgImage}
                  fontColor={list.fontColor}
                  showImage={true}
                  hide={true} 
                  listData={list.listData} 
          />
      </div>
  )
}
