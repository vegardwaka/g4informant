import Clock from '../workbenchComponents/Clock'
import Weather from '../workbenchComponents/Weather'
import Textarea from '../workbenchComponents/Textarea'
import Image from '../workbenchComponents/Image'
import News from '../workbenchComponents/News'

export default function HomeCard(props) {
    let element
    let link
    
    if (props.id === 1) {
        element = <Clock height="100%" hide={true} display={true} propcontinent="Asia" propcapital="Tokyo"/>
    } 
    else if (props.id === 2) {
        element = <Weather height="100%" hide={true} display={true} propcity="Bø" propstate="Midt-Telemark"/>
        link = <small className="home-API-p">Weather data is collected from Norwegian Meteorological Institute and location data is gathered from <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>.</small>
    }
    else if (props.id === 3) {
        element = <Textarea hide={true} dis={true} read={false}/>
    }
    else if (props.id === 4) {
        element = <Image height="200px" hide={false} imgboo={false} show={false}/>
        link = <small className="home-API-p">Images should be 539 x 600 pixels to perfectly fit the component.</small>
    }
    else if (props.id === 5) {
        element = <News height="100%"  hide={true} channelList={true} homeChannel={false}/> 
        link = <small className="home-API-p">Top stories provided by NRK & TV2.</small>
    }

    return(
        <div className="API-home-section">
            {element}
            <div className="API-text-div">
                <h2 className="home-API-title">
                    <img src={`/images/icons/${props.url}.png`} alt="pic" />
                    {props.title}
                </h2>
                <p className="home-API-p">{props.desc}</p>
                {link} 
            </div>
        </div>
    )
}