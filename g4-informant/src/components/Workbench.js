import { useState } from 'react';
import MainTemplate from "./templates/MainTemplate"
import TemplateList from "./templates/TemplateList"
import ComponentList from "./workbenchComponents/ComponentsList"

export default function Workbench() {
    const [queryObj, setQueryObj] = useState({})
    const [queryHide, setQueryHide] = useState(false)
    const [queryList, setQueryList] = useState(true)
    let test = true

    function handleClick() {
        setQueryHide(false)
        setQueryList(true)
    }

    return (
      <div>
        <h2 className="workbench-title">Welcome to your workbench</h2>
        <button type="submit" className="save-workbench-button">Save your work</button>
        <div className="workbench">
            <button 
                className="prev-button" 
                onClick={handleClick} 
                style={{display: queryHide ? 'block' : 'none'}}
            >Back</button>
            {queryList ? 
                <TemplateList 
                    onQueryObj={setQueryObj}
                    onQueryHide={setQueryHide}
                    onQueryList={setQueryList}
                /> 
              : <ComponentList/>
            }

            <div className="workbench--screen" style={{transform: test ? 'none' : 'rotate(90deg)'}}>
                <MainTemplate  
                    count={queryObj.count} 
                    height={queryObj.height} 
                    width={queryObj.width}
                />
            </div>
        </div>
      </div>
    )
}