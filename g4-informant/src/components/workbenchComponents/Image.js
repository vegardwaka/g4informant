import { useState, useEffect } from 'react'

export default function Image(props) {
    const [image, setImage] = useState()
    const [show, setShow] = useState(props.hide)
    const [imageName, setImageName] = useState()

    useEffect(() => {
    if(image){        
        //props.setImageName(image.name)
        console.log(imageName)
        console.log(image)
        console.log("imagename.name" + imageName)
        //console.log(props.imageName)
     //funker   console.log(image.name)
     sendImageToBackend()
    }}, [image])

    async function sendImageToBackend() {
        const formData = new FormData()
        formData.append('inImage', image, imageName)
        try {
        const response = await fetch(`http://localhost:3001/images/${imageName}`, {
          method: 'POST',
          headers: { 'Content-Type': 'multipart/form-data; boundary=20' },
          body: formData
        })
        const data = response
          console.log("Image: "+data.message)
        } catch(error) {
          console.error(error)
        }
      }

    return(
        <div 
            className={props.fulldisplay ? "API-container-fulldisplay" : "API-container"}
            onClick={props.toggle}
            style={{
                width: props.imgwidth, 
                height: props.imgheight, 
                border: props.show ? '3px dashed black' : '', 
                background: show ? '' : 'repeating-linear-gradient( 45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)'
            }}
        >
            {image && (
                <div>
                    <img
                        id="image-image"
                        alt="not found"
                        style={{'object-fit': "cover", 'max-width': "100%", 'max-height': "100%"}}
                        src={URL.createObjectURL(image)}
                    />
                    <br />
                </div>
            )}
            {show ? (
                <input
                    type="file"
                    name="myImage"
                    id="image-file-input" 
                    onChange={(e) => {
                        setImage(e.target.files[0]);
                        setImageName(e.target.files[0].name)
                    }}
                />)
            : <h1>IMAGE</h1>}
        </div>
    )
}
//<button onClick={() => setImage(null)}>Remove</button>