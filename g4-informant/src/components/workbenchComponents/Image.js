import { useState, useEffect } from 'react'

export default function Image(props) {
    const [image, setImage] = useState()
    const [imageName, setImageName] = useState(props.hide)
    const [currentImageName, setCurrentImageName] = useState()
    let height
    let width
    
    /* Conditionally changes the image size to fit in the informationscreen fullscreen display */
    if(!props.fulldisplay) {
        height = "100%"
        width = "150px"
    }

    /* Binds variables to necessary values for props and file upload */
    useEffect(() => {
        if(currentImageName && image){ 
            setImageName(currentImageName)
            let object = {image: currentImageName}
            props.setList(props.squareid, props.elementNumber, object)
            sendImageToBackend(currentImageName, image)
    }}, [image, currentImageName])

    /* Sends the uploaded image to the server, which saves it in a backend folder */
    async function sendImageToBackend(currentImageName, file) {
        const form = new FormData()
        form.append('myImage', file)
        await fetch(`https://g4informant.azurewebsites.net//images/${currentImageName}`, {
            method: 'POST',
            body: form,
        }).then((response) =>     {
            return response.status
        })
    }

    return(
        <div 
            className={props.fulldisplay ? "API-container-fulldisplay" : "API-container"}
            onClick={props.toggle}
            style={{
                width: props.width, 
                height: props.height, 
                border: props.show ? '3px dashed black' : '' 
            }}
        >
            {props.showImage ? (
                <div className="uploaded--image" style={{'width': width, 'height': height,'background-image': `url(https://g4informant.azurewebsites.net//Images/${props.imageName})`,'background-repeat': 'no-repeat',  'background-size': '100% 100%'}}></div> 
            ) : (
                <>
                    {image && (
                        <div>
                            <img
                                id="image-image"
                                alt="not found"
                                style={{'object-fit': "contain", 'max-width': "100%", 'max-height': "100%", 'width': 'auto', 'height': 'auto'}}
                                src={URL.createObjectURL(image)}
                            />
                            <br/>
                        </div>
                    )}
                    {props.hide ? (
                        <input
                            type="file"
                            name='myImage'
                            id="image-file-input" 

                            /* Saves image file and image name to useState variables */ 
                            onChange={(e) => {
                                setImage(e.target.files[0])
                                setImageName(e.target.files[0].name)
                                setCurrentImageName(e.target.files[0].name)
                                const file = e.target.files[0]
                                sendImageToBackend(e.target.files[0].name, file)
                            }}
                        />
                    ) : (
                        <img src="/images/icons/picture.png" alt="clock" width="100px"/>
                    )}
                    {props.display && <img src="/images/icons/picture.png" alt="clock" width="50px"/>}
                </>
            )}
        </div>
    )
}