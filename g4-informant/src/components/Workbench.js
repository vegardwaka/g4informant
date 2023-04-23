import { useState, useEffect } from 'react'
import MainTemplate from "./templates/MainTemplate"
import TemplateList from "./templates/TemplateList"
import BgImageList from "./templates/BgImageList"
import ComponentList from "./workbenchComponents/ComponentsList"
import Image from './workbenchComponents/Image'

export default function Workbench() {
      const [queryObj, setQueryObj] = useState({})
      const [queryHide, setQueryHide] = useState(false)
      const [queryList, setQueryList] = useState(true)
      const [image, setImage] = useState({})
      const [imageName, setImageName] = useState("")
      const [title, setTitle] = useState('')
      const [queryNumber, setQueryNumber] = useState(0)
      let tmData = {}
      let test = true
      let key
      const [elements, setElements] = useState({})
      const [clockObj, setClockObj] = useState({})
      const [weatherObj, setWeatherObj] = useState({city: "Juneau", state: "Alaska" })
      const [bgImage, setBGImage] = useState('')
      let testcheck = 0
      const [textObj, setTextObj] = useState("")
      const [newsObj, setNewsObj] = useState(0)
      const [imgObj, setImgObj] = useState("")

      function setImgs(p_img) {
        setImgObj(p_img)
      }

      function getTexts(p_text) {
        setTextObj(p_text)
      }

      function setNews(p_news) {
        setNewsObj(p_news)
      }
     
      function handleClick() {
          setQueryHide(false)
          setQueryList(true)
          setQueryObj({count:0})
          setQueryNumber(0)
      }

      async function submitButton() {
        if(feiltest()) {
        }
        else {
          tmData = {
            title: title, 
            count: queryObj.count,
            tmpheight: queryObj.height,
            tmpwidth: queryObj.width, 
            tmpquery: queryObj.queryNumber,
            squares: [],
            user: localStorage.getItem('token').replace(/"/g, ""),
            city: weatherObj.city,
            state: weatherObj.state,
            continent: clockObj.continent,
            capital: clockObj.capital,
            newsnumber: newsObj,
            tatext: textObj,
            image: image,
            imageName: imageName,
            bgImage: imgObj
          }
         
          
          for (var i = 0; i < queryObj.count; i++) {
            let temp = (i+1)
            tmData.squares[i] = {ruteNr: i,elementNr: elements["e" + temp]}
            console.log(tmData.squares[i])}

          await fetch(`https://g4informant.com/api.php/records/infoskjerm`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          })
          .then(response => response.json())
          .then(data => {
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
              sendToBackend(tmData)
              window.alert(`Screen ${title} saved`)
            
            //}
        })
        .catch(error => {
            console.error(error)
            return null
        })
    }
    }

    function feiltest() {
      if(!title.trim().length) {
        window.alert("Give the informationscreen a name")
        return true
      }
      else if(Object.values(elements).includes(2)) {
        if(weatherObj.city === "Juneau" && weatherObj.state === "Alaska") {
          window.alert("Choose a location for weather element")
          return true
        }
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

            <div className={test ? "workbench--screen" : "workbench--screen--vertical"}>
                <MainTemplate  
                    count={queryObj.count} 
                    heighten={queryObj.height} 
                    widthen={queryObj.width}
                    number={queryNumber}
                    choice={true}
                    elements={setElements}
                    elementsvar={elements}
                    setClockObj={setClockObj}
                    setWeatherObj={setWeatherObj}
                    setBGImage={imgObj}
                    setImage={setImage}
                    setImageName={setImageName}
                    getTexts={getTexts}
                    setNews={setNews}
                    bgImage={imgObj}
                />
            </div>
            <BgImageList bgImage={bgImage} setImgs={setImgs}/>
        </div>
      </div>
    )
}
