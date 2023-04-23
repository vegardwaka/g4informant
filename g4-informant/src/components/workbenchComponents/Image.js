import { useState, useEffect } from 'react'

export default function Image(props) {
    const [image, setImage] = useState()
    const [show, setShow] = useState(props.hide)
    const [imageName, setImageName] = useState()
    useEffect(() => {
    if(imageName == 'jegerentest.png'){        
        //props.setImageName(image.name)
        console.log(imageName)
        console.log(image)
        console.log("imagename.name" + imageName)
        //console.log(props.imageName)
     //funker   console.log(image.name)
     sendImageToBackend()
    }}, [image, imageName])

    async function sendImageToBackend(imageName, file) {
        const form = new FormData()
        form.append('myImage', file)
        const response = await fetch(`http://localhost:3001/images/${imageName}`, {
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
                width: props.imgwidth, 
                height: props.imgheight, 
                border: props.show ? '3px dashed black' : '', 
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
                    name='myImage'
                    id="image-file-input" 
                    onChange={(e) => {
                        setImage(e.target.files[0])
                        setImageName(e.target.files[0].name)
                        const file = e.target.files[0]
                        sendImageToBackend(e.target.files[0].name, file)
                    }}
                />)
            : <h1>Image</h1>}
        </div>
    )
}
//<button onClick={() => setImage(null)}>Remove</button>