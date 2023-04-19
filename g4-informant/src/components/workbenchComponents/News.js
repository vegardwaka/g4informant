import { useState, useEffect } from 'react'

export default function News(props) {
    const [articles, setArticles] = useState([])
    const [allArticles, setAllArticles] = useState(0)
    const [count, setCount] = useState(0)
    const [imgURL, setImgURL] = useState("")
    const [url, setUrl] = useState("")
    const [channelList, setChannelList] = useState(props.channelList)
    const [homeChannel, setHomeChannel] = useState(props.homeChannel)
    
    const getRss = async (e) => {
        const urlRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\~+#-]*[\w@?^=%&amp;\/~+#-])*/g;
        if (url.match(urlRegex)) {
            const response = await fetch(
                `https://api.rss2json.com/v1/api.json?rss_url=${url}`
            )
            .then(response => response.json())
            .then(data => {
                setArticles(data.items[count])
                setAllArticles(data.items)
            })   
        }
    }

    useEffect(() => {
        getRss()
    }, [url, count])

    function handleClick(p_url, p_imgurl) {
        setUrl(p_url)
        setChannelList(false)
        setImgURL(p_imgurl)
    }

    if(count >= parseInt(allArticles.length)) {
        setCount(0)
    }
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1)
            }, 15000)
            return () => {
                clearInterval(timer)
            }
    }, [])
    
    return(
        <div
            className="API-container"
            onClick={props.toggle} 
            style={{height:props.height, width:props.width, border:props.show ? '3px dashed black' : ''}}
        >
            {homeChannel ? <h1>News</h1> : (
                channelList ? 
                    <div className="news-button-div">
                        <button 
                            className="news-button" 
                            onClick={() => handleClick('https://www.tv2.no/rss/nyheter', 'http://static.cdn.tv2.no/s/img/logo/tv2-logo-rss.png')}
                        >TV2</button>
                        <button 
                            className="news-button" 
                            onClick={() => handleClick('https://www.nrk.no/toppsaker.rss', '/nrk_nyheter_rgb.png')}
                        >NRK</button>
                    </div>
                :
                    <div>
                        <img src={imgURL} alt="logo" id="news-pic" />
                        <h3>{articles.title}</h3>
                        <p className="news-description">{articles.description}</p>
                    </div> 
            )}
        </div>
    )
}
