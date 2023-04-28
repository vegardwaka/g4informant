import { useState } from 'react'
import backgrounds from '../../json/backgrounds'

export default function BgImageList(props) {
    const [isActive, setIsActive] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)
    const [isActive5, setIsActive5] = useState(false)
    const [isActive6, setIsActive6] = useState(false)
    const [isActive7, setIsActive7] = useState(false)
    const [isActive8, setIsActive8] = useState(false)
    const stateTab = [isActive, isActive2, isActive3, isActive4, isActive5, isActive6, isActive7]
    const setTab = [setIsActive, setIsActive2, setIsActive3, setIsActive4, setIsActive5, setIsActive6, setIsActive7, setIsActive8]

    /* Sets the background of the screen and adds a border to the selected background in the list*/
    function handleClick(p_number, p_img) {
        props.setBackground(p_img)
        for(let i=0; i<setTab.length; i++) 
            setTab[i](false)
        setTab[p_number-1](true)
    }

    const list = backgrounds.map((x,i) => 
        <img 
            key={x.id}
            src={x.src} 
            onClick={() => handleClick(x.id, x.src)}
            alt={x.alt}
            id="backgroundimage"
            style={{border:stateTab[i] ? "1px dashed black" : ''}}
        />
    )

    return(
        <div className="background-image-list-container">
            <h3 className="template-title">Images</h3>
            <div className="background-images">
                <div 
                    className="no-backgroundimg"
                    onClick={() => handleClick(8, "")} 
                    style={{border:isActive8  ? "1px dashed black" : ''}}
                > 
                </div>
                {list}
            </div>
        </div>
    )
}


