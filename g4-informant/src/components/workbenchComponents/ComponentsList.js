import APIKlokke from './APIKlokke'
import Weather from './Weather'
import { useState } from 'react'

export default function CompontentsList(){
    return(
        <div className="workbench-component-list">
            <h3 className="workbench-title">Elements</h3>
            <div className="workbench-components">
                <APIKlokke width="100%"  />
                <Weather width="100%" />
            </div>
        </div>
    )
}