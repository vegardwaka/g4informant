import { useState } from 'react'

export default function Image(props) {
    const [image, setImage] = useState(null)
    const [show, setShow] = useState(props.hide)

    async function sendToBackend(image) {
        const formData = new FormData()
        formData.append('inImage', image)
        const fileName = image.name
        await fetch(`http://localhost:3001/data/Images/${fileName}`, {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data.message)
        })
        .catch(error => {
          console.error(error)
        })
      }
      sendToBackend()
    
    return(
        <div 
            className="API-container"
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
                    }}
                />)
            : <h1>IMAGE</h1>}
        </div>
    )
}
//<button onClick={() => setImage(null)}>Remove</button>