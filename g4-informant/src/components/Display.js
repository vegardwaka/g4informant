import MainTemplate from './templates/MainTemplate'
import { useState, useEffect } from 'react'

export default function Display(props) {
  const [list, setList] = useState({})

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
      setList(data)
    })
  }
  
  useEffect(() => {
    submitButtonHent()
  },[])

  return (
      <div className={props.changeboolean ? "profile-display-screen" : "workbench--screen"}> 
          <MainTemplate  
                  count={list.count} 
                  height={list.height} 
                  width={list.width}
                  elementNumber={list.elementNumber}
                  choice={false}
                  squares={list.squares}
                  bgImage={list.bgImage}
                  fontColor={list.fontColor}
                  fulldisplay={false}
                  showImage={false}
                  hide={false}
                  listData={list.listData}     
          />
      </div>
  )
}

             