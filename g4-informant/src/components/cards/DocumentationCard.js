import Clock from '../workbenchComponents/Clock'
import Weather from '../workbenchComponents/Weather'
import Textarea from '../workbenchComponents/Textarea'
import Image from '../workbenchComponents/Image'
import News from '../workbenchComponents/News'

export default function DocumentationCard(props){
    let element
    
    if (props.id === 1) 
        element = <Clock height="100%" hide={true} display={true} propcontinent="Asia" propcapital="Tokyo"/>
    else if (props.id === 2) 
        element = <Weather height="100%" hide={true} display={true} propcity="Bø" propstate="Midt-Telemark"/>
    else if (props.id === 3) 
        element = <Textarea hide={true} dis={true} read={false}/>
    else if (props.id === 4) 
        element = <Image imgheight="100%" hide={false} imgboo={false} show={false}/>
    else if (props.id === 5) 
        element = <News height="100%"  hide={true} channelList={true} homeChannel={false}/> 
    
    return(
        <div className="documentation-card-box">
            <div className="doc-card-element">{element}</div>
            <div className="documentation-card-text">
                <h1 className="doc-card-title">{props.title}</h1>
                <p className="doc-card-p">{props.desc}</p>
            </div>
        </div>
    )
}
