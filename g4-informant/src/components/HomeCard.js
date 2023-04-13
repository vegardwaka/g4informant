import APIKlokke from './workbenchComponents/APIKlokke'
import Weather from './workbenchComponents/Weather'
import Textarea from './workbenchComponents/Textarea'

export default function HomeCard(props) {
    let element
    let link
    
    if (props.id === 1) {
        element = <APIKlokke height="100%" hide={true} display={true}/>
    } 
    else if (props.id === 2) {
        element = <Weather height="100%" hide={true} display={true}/>
        link = <small className="home-API-p">Weather data is collected from Norwegian Meteorological Institute and location data is gathered from <a href="openstreetmap.org/copyright">OpenStreetMap</a>.</small>
    }
    else if (props.id === 3) {
        element = <Textarea taheight="100%" dis={true}/>
    }

    return(
        <div className="API-home-section">
            {element}
            <div className="API-text-div">
              <h2 className="home-API-title">{props.title}</h2>
              <p className="home-API-p">{props.desc}</p>
              <p className="home-API-p">{props.descLink}</p>
              {link}
            </div>
        </div>
    )
}