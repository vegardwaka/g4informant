import { useState } from 'react'
import MainTemplate from "./templates/MainTemplate"
import TemplateList from "./templates/TemplateList"
import ComponentList from "./workbenchComponents/ComponentsList"

export default function Workbench() {
    const [queryObj, setQueryObj] = useState({})
    const [queryHide, setQueryHide] = useState(false)
    const [queryList, setQueryList] = useState(true)
    const [title, setTitle] = useState('')
    const [queryNumber, setQueryNumber] = useState(0)
    let test = true

    function handleClick() {
        setQueryHide(false)
        setQueryList(true)
        setQueryObj({count:0})
        setQueryNumber(0)
    }

    const submitButton = () => {
      const data = { 
        titletxt: title, 
        count: queryObj.count,
        tmpheight: queryObj.height,
        tmpwidth: queryObj.width, 
        tmpquery: queryObj.queryNumber
     }
      fetch(`http://localhost:3001/data/${title}`, {
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
                />
            </div>
        </div>
      </div>
    )
}