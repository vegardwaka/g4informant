import { useState, useEffect } from 'react'
import MainTemplate from "./templates/MainTemplate"
import TemplateList from "./templates/TemplateList"
import BgImageList from "./templates/BgImageList"
import ComponentList from "./workbenchComponents/ComponentsList"

export default function Workbench(props) {
      const [templateStyle, setTemplateStyle] = useState({})
      const [hideInputs, setHideInputs] = useState(false)
      const [changeList, setChangeList] = useState(true)
      const [elementNumber, setElementNumber] = useState(0)
      const [imageName, setImageName] = useState("")
      const [title, setTitle] = useState('')
      const [elements, setElements] = useState({})
      const [clockObj, setClockObj] = useState({})
      const [weatherObj, setWeatherObj] = useState({city: "Juneau", state: "Alaska" })
      const [textObj, setTextObj] = useState("")
      const [newsObj, setNewsObj] = useState(0)
      const [bgImage, setBGImage] = useState('')
      const [fontColor, setFontColor] = useState("Black")
      const [listData, setlistData] = useState([])
      sessionStorage.setItem("font", fontColor)
      let tmData = {}
      let key
      props.foot(false)
      const [imgBG, setImgBG] = useState("")

      function onOptionChange(e) {
        setFontColor(e.target.value)
      }

      function setBackground(p_bgImg) {
        setImgBG(p_bgImg)
      }

      function setText(p_text) {
        setTextObj(p_text)
      }

      function setNews(p_news) {
        setNewsObj(p_news)
      }

      function setImage(p_img) {
        setImageName(p_img)
      }

      function setList(p_squareNr, p_elementNr, p_object) {
        if(p_elementNr === 1) 
          listData[p_squareNr] = p_object
        else if(p_elementNr === 2) 
          listData[p_squareNr] = p_object
        else if(p_elementNr === 3)
          listData[p_squareNr] = p_object
        else if(p_elementNr === 4)
          listData[p_squareNr] = p_object
        else if(p_elementNr === 5) 
          listData[p_squareNr] = p_object
      }
     
      function handleClick() {
          setHideInputs(false)
          setChangeList(true)
          setTemplateStyle({count:0})
          setElementNumber(0)
      }

      async function submitButton() {
        if(failTest()) {
        }
        else if(Object.values(elements).includes(5) && newsObj === 0) {
          window.alert("Choose a news channel")
        }
        else {
          tmData = {
            title: title, 
            count: templateStyle.count,
            height: templateStyle.height,
            width: templateStyle.width, 
            elementNumber: templateStyle.elementNumber,
            squares: [],
            user: localStorage.getItem('token').replace(/"/g, ""),
            bgImage: imgBG,
            fontColor: fontColor,
            listData: listData
          }
         
          for (var i = 0; i < templateStyle.count; i++) {
            let temp = (i+1)
            tmData.squares[i] = {squareNr: i,elementNr: elements["e" + temp]}
            console.log(tmData.squares[i])}

          await fetch(`https://g4informant.com/api.php/records/infoscreen`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          })
          .then(response => response.json())
          .then(data => {
            var largest = parseInt(data.records[0].infoscreen_id)
            for(var i = 0; i < data.records.length; i++) {
              if(largest < data.records[i].infoscreen_id) {
                largest = data.records[i].infoscreen_id
            }
          }
            key = largest + 1
            console.log(key)
          })

        await fetch(`https://g4informant.com/api.php/records/infoscreen`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({"infoscreen_id":key,"title":title,"username":localStorage.getItem('token').replace(/"/g, "")})
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

    function failTest() {
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
      await fetch(`https://g4informant.azurewebsites.net//data/${title}`, {
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
        {hideInputs && 
          <div className="workbench-buttons">
                  <div className="font-color-container">
                    <input 
                      type="radio"
                      name="fontColor"
                      value="Black"
                      id="black"
                      checked={fontColor === "Black"}
                      onChange={onOptionChange}
                    />
                    <label htmlFor="black">Black</label>
                    <input 
                      type="radio"
                      name="fontColor"
                      value="White"
                      id="white"
                      checked={fontColor === "White"}
                      onChange={onOptionChange}
                    />
                    <label htmlFor="white">White</label>
                  </div>
          
                  <input 
                      required
                      value={title} 
                      onChange={(e) => setTitle(e.target.value)}
                      type="text" 
                      className="name-your-work" 
                      placeholder="NAME YOUR WORK"
                  />
              
              <button type="submit" className="save-workbench-button" onClick={submitButton}>Save your work</button>
          </div>
        }
        
        {hideInputs && 
            <button 
                className="prev-button" 
                onClick={handleClick}
            ><img src="/images/icons/arrow-left.png" alt="" width="15px"/></button>}
        <div className="workbench">
          
            {changeList ? 
                <TemplateList
                    setTemplateStyle={setTemplateStyle}
                    setHideInputs={setHideInputs}
                    setChangeList={setChangeList}
                /> 
              : <ComponentList
                    setElementNumber={setElementNumber}
                />
            }

            <div className="workbench--screen">
                <MainTemplate  
                    count={templateStyle.count} 
                    heighten={templateStyle.height} 
                    widthen={templateStyle.width}
                    number={elementNumber}
                    choice={true}
                    elements={setElements}
                    elementsvar={elements}
                    setClockObj={setClockObj}
                    setWeatherObj={setWeatherObj}
                    setBGImage={imgBG}
                    setText={setText}
                    setNews={setNews}
                    bgImage={imgBG}
                    setImage={setImage}
                    fontColor={fontColor}
                    setList={setList}
                />
            </div>
            <BgImageList bgImage={bgImage} setBackground={setBackground}/>
        </div>
      </div>
    )
}
