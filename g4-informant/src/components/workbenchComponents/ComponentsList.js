import {useState} from 'react'

export default function CompontentsList(){
    return(
        <div className="workbench-component-list"  /* style={{display: isActive2 ? 'block' : 'none'}} */ >
            <button className="prev-button" /* onClick={handleClick2} style={{display: isActive ? 'block' : 'none'}} */ >prev</button> 
            <h3 className="workbench-title">Components</h3>
            <div className="workbench-components">
                
            </div>
        </div>
    )
}