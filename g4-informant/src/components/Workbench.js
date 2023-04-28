import { useState } from 'react'
import MainTemplate from "./templates/MainTemplate"
import TemplateList from "./templates/TemplateList"
import BgImageList from "./templates/BgImageList"
import ComponentList from "./workbenchComponents/ComponentsList"

export default function Workbench(props) {
    const [templateStyle, setTemplateStyle] = useState({})
    const [hideInputs, setHideInputs] = useState(false)
    const [changeList, setChangeList] = useState(true)
    const [elementNumber, setElementNumber] = useState(0)
    const [title, setTitle] = useState('')
    const [elements, setElements] = useState({})
    const [weatherObj, setWeatherObj] = useState({city: "Juneau", state: "Alaska" })
    const [newsObj, setNewsObj] = useState(0)
    const [fontColor, setFontColor] = useState("Black")
    const [listData, setListData] = useState([])
    const [bgImage, setBGImage] = useState("")
    let tmData = {}
    let key
    sessionStorage.setItem("font", fontColor)
    props.foot(false)

    function onOptionChange(e) {
      setFontColor(e.target.value)
    }

    function setBackground(p_bgImg) {
      setBGImage(p_bgImg)
    }

    function setNews(p_news) {
      setNewsObj(p_news)
    }

    /* Function that gets passed down to the API components and saves the specific data for each component*/
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
    
    /* Hides user inputfields and resets values back to default*/
    function handleClick() {
        setHideInputs(false)
        setChangeList(true)
        setTemplateStyle({count:0})
        setElementNumber(0)
    }

    function characterCheck(string) {
      const invalidChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      return invalidChar.test(string);
    }
    
    /* Saves everything the user did in workbench */
    async function submitButton() {
      if(failTest()) {
      }
      else if(Object.values(elements).includes(5) && newsObj === 0) {
        window.alert("Choose a news channel")
      }
      else if(characterCheck(title)) {
        window.alert("The name of the information screen can not contain special characters")
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
          bgImage: bgImage,
          fontColor: fontColor,
          listData: listData
        }
        
        for (let i = 0; i < templateStyle.count; i++) {
          let temp = (i+1)
          tmData.squares[i] = {squareNr: i,elementNr: elements["e" + temp]}
          console.log(tmData.squares[i])}

        await fetch(`https://g4informant.com/api.php/records/infoscreen`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(data => {
          let largest = parseInt(data.records[0].infoscreen_id)
          for(let i = 0; i < data.records.length; i++) {
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
            if(data.code === 1009) {
                window.alert("There is already a screen with that name")
                return null
            } else if (data.code === 9999) {
                window.alert("Something went wrong")
                return null
            } else {
              sendToBackend(tmData)
              window.alert(`Screen ${title} saved`)
            
            }
        })
        .catch(error => {
            console.error(error)
            return null
        })
      }
    }
    /* Checks if the input field for the workbench name is empty and that you have set a location for the Weather component*/
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
    
    /* Sends the data to the backend in a .js file */
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
              <button 
                type="submit" 
                className="save-workbench-button" 
                onClick={submitButton}
              >Save your work</button>
          </div>
        }
        
        {hideInputs && 
          <button className="prev-button" onClick={handleClick}>
            <img src="/images/icons/arrow-left.png" alt="" width="15px"/>
          </button>
        }
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
                  height={templateStyle.height} 
                  width={templateStyle.width}
                  elementNumber={elementNumber}
                  choice={true}
                  setElements={setElements}
                  elements={elements}
                  setWeatherObj={setWeatherObj}
                  setNews={setNews}
                  bgImage={bgImage}
                  fontColor={fontColor}
                  setList={setList}
              />
          </div>
          <BgImageList 
            setBackground={setBackground}
          />
        </div>
      </div>
    )
}
