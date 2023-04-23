import { useState } from 'react'

export default function BgImageList(props) {
    const [isActive, setIsActive] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)
    const [isActive5, setIsActive5] = useState(false)
    const [isActive6, setIsActive6] = useState(false)
    const [isActive7, setIsActive7] = useState(false)
    const [bgImage, setBGImage] = useState(props.bgImage)
    const bgImage1 = "/images/backgroundX1.png"
    const bgImage2 = "/images/backgroundX2.png"
    const bgImage3 = "/images/backgroundX3.jpg"

    function handleClick1() {
        props.setImgs(bgImage1)
        setIsActive2(false)
        setIsActive(true)
        setIsActive3(false)
        setIsActive4(false)
    } 

    function handleClick2() {
        props.setImgs(bgImage2)
        setIsActive(false)
        setIsActive2(true)
        setIsActive3(false)
        setIsActive4(false)
    }
    function handleClick3() {
        props.setImgs("")
        setIsActive(false)
        setIsActive2(false)
        setIsActive3(true)
        setIsActive4(false)
    }

    function handleClick4() {
        props.setImgs(bgImage3)
        setIsActive(false)
        setIsActive2(false)
        setIsActive3(false)
        setIsActive4(true)
    }
    function handleClick5() {
        props.setImgs("blue")
        setIsActive(false)
        setIsActive2(false)
        setIsActive3(false)
        setIsActive4(false)
        setIsActive5(true)
    }

    return(
        <div className="background-image-list-container">
            <h3 className="template-title">Images</h3>
            <div className="background-images">
                <div 
                    className="no-backgroundimg"
                    onClick={handleClick3} 
                    style={{border:isActive3  ? "1px dashed black" : ''}}
                >None</div>
                <img 
                    src={bgImage1} 
                    onClick={handleClick1} 
                    alt="bg1" 
                    id="backgroundimage"
                    style={{border:isActive  ? "1px dashed black" : ''}}
                />
                <img 
                    src={bgImage2} 
                    onClick={handleClick2} 
                    alt="bg2" 
                    id="backgroundimage"
                    style={{border:isActive2  ? "1px dashed black" : ''}}
                />
                <img 
                    src={bgImage3} 
                    onClick={handleClick4} 
                    alt="bg2" 
                    id="backgroundimage"
                    style={{border:isActive4  ? "1px dashed black" : ''}}
                />
                <img src="" alt="" />
            </div>
        </div>
    )
}