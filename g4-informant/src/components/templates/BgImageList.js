import { useState } from 'react'

export default function BgImageList(props) {
    const [isActive, setIsActive] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)
    const [isActive5, setIsActive5] = useState(false)
    const [isActive6, setIsActive6] = useState(false)
    const [isActive7, setIsActive7] = useState(false)
    const [isActive8, setIsActive8] = useState(false)
    const [bgImage, setBGImage] = useState(props.bgImage)

    function handleClick(p_number, p_img) {
        props.setImgs(p_img)
        setIsActive(false)
        setIsActive2(false)
        setIsActive3(false)
        setIsActive4(false)
        setIsActive5(false)
        setIsActive6(false)
        setIsActive7(false)
        setIsActive8(false)
        switch(p_number) {
            case 1: setIsActive(true); break;
            case 2: setIsActive2(true); break;
            case 3: setIsActive3(true); break;
            case 4: setIsActive4(true); break;
            case 5: setIsActive5(true); break;
            case 6: setIsActive6(true); break;
            case 7: setIsActive7(true); break;
            case 8: setIsActive8(true); break;
        }  
    }

    return(
        <div className="background-image-list-container">
            <h3 className="template-title">Images</h3>
            <div className="background-images">
                <div 
                    className="no-backgroundimg"
                    onClick={() => handleClick(8, "")} 
                    style={{border:isActive8  ? "1px dashed black" : ''}}
                ></div>
                <img
                    src={"/images/backgroundX1.png"} 
                    onClick={() => handleClick(1, "/images/backgroundX1.png")} 
                    alt="bg1" 
                    id="backgroundimage"
                    style={{border:isActive  ? "1px dashed black" : ''}}
                />
                <img 
                    src={"/images/backgroundX2.png"} 
                    onClick={() => handleClick(2, "/images/backgroundX2.png")} 
                    alt="bg2" 
                    id="backgroundimage"
                    style={{border:isActive2  ? "1px dashed black" : ''}}
                />
                <img 
                    src={"/images/backgroundX3.jpg"} 
                    onClick={() => handleClick(3, "/images/backgroundX3.jpg")} 
                    alt="bg3" 
                    id="backgroundimage"
                    style={{border:isActive3  ? "1px dashed black" : ''}}
                />
                <img 
                    src={"/images/backgroundX4.jpg"} 
                    onClick={() => handleClick(4, "/images/backgroundX4.jpg")}  
                    alt="bg4" 
                    id="backgroundimage"
                    style={{border:isActive4  ? "1px dashed black" : ''}}
                />
                <img 
                    src={"/images/backgroundX5.jpg"} 
                    onClick={() => handleClick(5, "/images/backgroundX5.jpg")} 
                    alt="bg5" 
                    id="backgroundimage"
                    style={{border:isActive5  ? "1px dashed black" : ''}}
                />
                <img 
                    src={"/images/backgroundX6.jpg"} 
                    onClick={() => handleClick(6, "/images/backgroundX6.jpg")}  
                    alt="bg6" 
                    id="backgroundimage"
                    style={{border:isActive6  ? "1px dashed black" : ''}}
                />
                <img 
                    src={"/images/backgroundX7.jpg"} 
                    onClick={() => handleClick(7, "/images/backgroundX7.jpg")}  
                    alt="bg7" 
                    id="backgroundimage"
                    style={{border:isActive7  ? "1px dashed black" : ''}}
                />
            </div>
        </div>
    )
}