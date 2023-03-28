import {useState} from 'react'
import TestElement from './TestElement'

export default function CompontentsList(){
    return(
        <div className="workbench-component-list">
            <h3 className="workbench-title">Elements</h3>
            <div className="workbench-components">
                <TestElement    
                    height="100px"
                    width="100%"
                />
                <TestElement    
                    height="100px"
                    width="100%"
                />
            </div>
        </div>
    )
}