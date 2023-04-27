import { useState, useEffect } from 'react'

export default function News(props) {
    const [articles, setArticles] = useState([])
    const [allArticles, setAllArticles] = useState(0)
    const [count, setCount] = useState(0)
    const [imgURL, setImgURL] = useState("")
    const [url, setUrl] = useState("")
    const [linkUrl, setLinkUrl] = useState("")
    const [link, setLink] = useState("")
    const [channelList, setChannelList] = useState(props.channelList)
    const [homeChannel, setHomeChannel] = useState(props.homeChannel)
    let numbernews = props.newsnumber
   
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
        if(!channelList) {
            if(numbernews === 1) {
                setUrl("https://www.nrk.no/toppsaker.rss")
                setImgURL("/nrk_nyheter_rgb.png")
                setLinkUrl("https://www.nrk.no")
                setLink("nrk.no")
            } else if(numbernews === 2) {
                setUrl("https://www.tv2.no/rss/nyheter")
                setImgURL("http://static.cdn.tv2.no/s/img/logo/tv2-logo-rss.png")
                setLinkUrl("https://www.TV2.no")
                setLink("TV2.no")
            }
        }
    }, [url, count])
    
    function handleClick(p_newsNumber) {
        setChannelList(false)
        if(p_newsNumber === 1) {
            setUrl("https://www.nrk.no/toppsaker.rss")
            setImgURL("/nrk_nyheter_rgb.png")
            setLinkUrl("https://www.nrk.no")
            setLink("nrk.no")
        } else if(p_newsNumber === 2) {
            setUrl("https://www.tv2.no/rss/nyheter")
            setImgURL("http://static.cdn.tv2.no/s/img/logo/tv2-logo-rss.png")
            setLinkUrl("https://www.TV2.no")
            setLink("TV2.no")
        }
        props.setNews(p_newsNumber)
        let object = {newsNumber: p_newsNumber}
        props.setList(props.squareid, props.elementNumber, object)  
    }
   
    if(count >= parseInt(allArticles.length)) {
        setCount(0)
    }
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1)
            }, 30000)
            return () => {
                clearInterval(timer)
            }
    }, [])

    /* 
    if (articles.description.length >= 150)
        articles.description.substring(0, 100) + "...";
    */ 
   
    return(
        <div
            className={props.fulldisplay ? "API-container-fulldisplay" : "API-container"}
            onClick={props.toggle} 
            style={{
                height:props.height, 
                width:props.width, 
                border:props.show ? '3px dashed black' : ''
            }}
        >
            {homeChannel ? <img src="images/icons/news.png" alt="news" width="100px"/> : (
                channelList ? 
                    <div className="news-button-div">
                        <button 
                            className="news-button" 
                            onClick={() => handleClick(2)}
                        >TV2</button>
                        <button 
                            className="news-button" 
                            onClick={() => handleClick(1)}
                        >NRK</button>
                    </div>
                :
                    <div>
                        <img src={imgURL} alt="logo" id="news-pic" />
                        <h3 className="news-title">{articles.title}</h3>
                        <p className="news-description">{articles.description}</p>
                        <p className="news-link"><a href={linkUrl}>{link}</a></p>
                    </div> 
            )}
        </div>
    )
}
