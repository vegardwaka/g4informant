import { useState } from 'react'
import MainTemplate from "./templates/MainTemplate"
import TemplateList from "./templates/TemplateList"
import ComponentList from "./workbenchComponents/ComponentsList"
import Weather from "./workbenchComponents/Weather"

export default function Workbench() {
    const [queryObj, setQueryObj] = useState({})
    const [queryHide, setQueryHide] = useState(false)
    const [queryList, setQueryList] = useState(true)
    const [title, setTitle] = useState('')
    const [queryNumber, setQueryNumber] = useState(0)
    let test = true
    let key

    function handleClick() {
        setQueryHide(false)
        setQueryList(true)
        setQueryObj({count:0})
        setQueryNumber(0)
    }

    var e1 = parseInt(sessionStorage.getItem("element1Nr"))
    var e2 = parseInt(sessionStorage.getItem("element2Nr"))
    var e3 = parseInt(sessionStorage.getItem("element3Nr"))
    var e4 = parseInt(sessionStorage.getItem("element4Nr"))
    var e5 = parseInt(sessionStorage.getItem("element5Nr"))
    var e6 = parseInt(sessionStorage.getItem("element6Nr"))

    async function submitButton() {
      if(title.length === 0) {
        window.alert("Give the informationscreen a name")
      } 
      else {
        const mData = { 
          title: title, 
          count: queryObj.count,
          tmpheight: queryObj.height,
          tmpwidth: queryObj.width, 
          tmpquery: queryObj.queryNumber,
          squares: [
            {
              ruteNr: 0,
              elementNr: e1
            },
            {
              ruteNr: 1,
              elementNr: e2
            },
            {
              ruteNr: 2,
              elementNr: e3
            },
            {
              ruteNr: 3,
              elementNr: e4
            },
            {
              ruteNr: 4,
              elementNr: e5
            },
            {
              ruteNr: 5,
              elementNr: e6
            },
          ],
          user: localStorage.getItem('token').replace(/"/g, ""),
          city: sessionStorage.getItem('city'),
          state: sessionStorage.getItem('state'),
          continent: sessionStorage.getItem('continent'),
          capital: sessionStorage.getItem('capital'),
          tatext: sessionStorage.getItem('taText')
      }
        //for(var i = 0; i =< props.sizen; i++) {test={ruteNr: i, elementNr: 0}; mData.square =+ test}
        /*
        for(let i=0; i< queryObj.count; i++) {
          mData.square[i] = {ruteNr: i, elementNr: 0}
        } */
        await fetch(`https://g4informant.com/api.php/records/infoskjerm`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(data => {
          console.log(data.records[0].infoskjerm_id)
          var largest = parseInt(data.records[0].infoskjerm_id)
          for(var i = 0; i < data.records.length; i++) {
            if(largest < data.records[i].infoskjerm_id) {
              largest = data.records[i].infoskjerm_id
          }
        }
          key = largest + 1
          console.log(key)
        })

      await fetch(`https://g4informant.com/api.php/records/infoskjerm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"infoskjerm_id":key,"tittel":title,"user_name":localStorage.getItem('token').replace(/"/g, "")})
      })
      .then(response => response.json())
      .then(data => {
          console.log(data)
          /*if(data.code === 1009) {
              window.alert("There is already a workbench with that name")
              return null
          } else if (data.code === 9999) {
              window.alert("Somthing went wrong")
              return null
          } else {*/
            sendToBackend(mData)
            window.alert("Screen saved")
            sessionStorage.removeItem("element1Nr")
            sessionStorage.removeItem("element2Nr")
            sessionStorage.removeItem("element3Nr")
            sessionStorage.removeItem("element4Nr")
            sessionStorage.removeItem("element5Nr")
            sessionStorage.removeItem("element6Nr")
          //}
      })
      .catch(error => {
          console.error(error)
          return null
      })
  }
  }
    
  async function sendToBackend(data) {
    await fetch(`http://localhost:3001/data/${title}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message)
    })
    .catch(error => {
      console.error(error)
    })
  }

    return (
      <div>
        <h2 className="workbench-title">Welcome to your workbench</h2>
        <div className="workbench-buttons">
            {queryHide && 
                <input 
                    required
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    type="text" 
                    className="name-your-work" 
                    placeholder="NAME YOUR WORK"
                />
            }
            {queryHide && <button type="submit" className="image-workbench-button">Upload background image</button>}
            {queryHide && <button type="submit" className="save-workbench-button" onClick={submitButton}>Save your work</button>}
        </div>
        {queryHide && 
            <button 
                className="prev-button" 
                onClick={handleClick}
            >&larr;</button>}
        <div className="workbench">
            {queryList ? 
                <TemplateList
                    onQueryObj={setQueryObj}
                    onQueryHide={setQueryHide}
                    onQueryList={setQueryList}
                /> 
              : <ComponentList
                    onQueryNumber={setQueryNumber}
                />
            }

            <div className="workbench--screen" style={{transform: test ? 'none' : 'rotate(90deg)'}}>
                <MainTemplate  
                    count={queryObj.count} 
                    heighten={queryObj.height} 
                    widthen={queryObj.width}
                    number={queryNumber}
                    choice={true}
                />
            </div>
        </div>
      </div>
    )
}