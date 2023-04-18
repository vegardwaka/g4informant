import { useState, useEffect } from 'react'

export default function News(props) {
    const [articles, setArticles] = useState([])
    const [count, setCount] = useState(0)
    const [imgURL, setImgURL] = useState("")
    const [url, setUrl] = useState("")
    const [channelList, setChannelList] = useState(props.channelList)
    const [homeChannel, setHomeChannel] = useState(props.homeChannel)
    const tv2Url = "https://www.tv2.no/rss/nyheter"
    const nrkUrl = "https://www.nrk.no/toppsaker.rss"
    

    const getRss = async (e) => {
        const urlRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\~+#-]*[\w@?^=%&amp;\/~+#-])*/g;
        if (url.match(urlRegex)) {
            const response = await fetch(
                `https://api.rss2json.com/v1/api.json?rss_url=${url}`
            )
            .then(response => response.json())
            .then(data => {
                setArticles(data.items[0])
            })   
        }
    }

    useEffect(() => {
        getRss()
    }, [url])


    function handleClickTV2() {
        setUrl('https://www.tv2.no/rss/nyheter')
        setChannelList(false)
        setImgURL("http://static.cdn.tv2.no/s/img/logo/tv2-logo-rss.png")
    }

    function handleClickNRK() {
        setUrl('https://www.nrk.no/toppsaker.rss')
        setChannelList(false)
        setImgURL("/images/nrk_nyheter_rgb.png")
    }

    return(
        <div
            className="API-container"
            onClick={props.toggle} 
            style={{height:props.height, width:props.width, border:props.show ? '3px dashed black' : ''}}
        >
            {homeChannel ? <h1>News.js</h1> : (
                channelList ? 
                    <div>
                        <button onClick={handleClickTV2}>TV2</button>
                        <button onClick={handleClickNRK}>NRK</button>
                    </div>
                :
                    <div>
                        <img src={imgURL} alt="logo" id="news-pic" />
                        <h3>{articles.title}</h3>
                        <p>{articles.description}</p>
                    </div> 
            )}
        </div>
    )
}

/*
{homeChannel ? 
                <div>
                    <img src="http://static.cdn.tv2.no/s/img/logo/tv2-logo-rss.png" alt="logo" id="news-pic" />
                    <h3>{articles.title}</h3>
                    <p>{articles.description}</p>
                </div>
            : 
            show ? (
                
            ) 
            : 
            <h1>News.js</h1>}

*/