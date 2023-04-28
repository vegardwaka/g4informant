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

    /* Gets the RSS XML file from link and runs it through a JSON filter to make it easier to seperate */
    const getRss = async (e) => {
        const urlRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\~+#-]*[\w@?^=%&amp;\/~+#-])*/g;
        if (url.match(urlRegex)) {
            await fetch(
                `https://api.rss2json.com/v1/api.json?rss_url=${url}`
            )
            .then(response => response.json())
            .then(data => {
                setArticles(data.items[count])
                setAllArticles(data.items)
            })   
        }
    }
    /* Sets the news source to be either norwegian TV2 or NRK */
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
    
    /* Sets the news source based on user input and saves the choice to the square */
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
    
    /* Sets a timer for the interval in which the article will change to the next one */
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
