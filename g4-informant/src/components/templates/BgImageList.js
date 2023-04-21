import { useState } from 'react'

export default function BgImageList(props) {
    const [isActive, setIsActive] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)
    const [bgImage, setBGImage] = useState(props.bgImage)
    const bgImage1 = "/images/backgroundX1.png"
    const bgImage2 = "/images/backgroundX2.png"
    const bgImage3 = "/images/backgroundX3.jpg"

    function handleClick1() {
        sessionStorage.removeItem("bg")
        sessionStorage.setItem("bg", bgImage1)
        setIsActive2(false)
        setIsActive(true)
        setIsActive3(false)
        setIsActive4(false)

    } 
    function handleClick2() {
        sessionStorage.removeItem("bg")
        sessionStorage.setItem("bg", bgImage2)
        setIsActive(false)
        setIsActive2(true)
        setIsActive3(false)
        setIsActive4(false)
    }
    function handleClick3() {
        sessionStorage.removeItem("bg")
        sessionStorage.setItem("bg", '')
        setIsActive(false)
        setIsActive2(false)
        setIsActive3(true)
        setIsActive4(false)
    }
    function handleClick4() {
        sessionStorage.removeItem("bg")
        sessionStorage.setItem("bg", bgImage3)
        setIsActive(false)
        setIsActive2(false)
        setIsActive3(false)
        setIsActive4(true)
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
            </div>
        </div>
    )
}