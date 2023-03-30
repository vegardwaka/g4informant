import {useState} from 'react'
import TestElement from './TestElement'
import APIKlokke from './APIKlokke'

export default function CompontentsList(){
    return(
        <div className="workbench-component-list">
            <h3 className="workbench-title">Elements</h3>
            <div className="workbench-components">
                <APIKlokke/>
                <TestElement    
                    height="100px"
                    width="100%"
                />
            </div>
        </div>
    )
}