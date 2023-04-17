import { useState, useEffect } from 'react'

export default function News(props) {
    const [articles, setArticles] = useState([])
    const [count, setCount] = useState(0)
    const [show, setShow] = useState("")
    const tv2Url = "https://www.tv2.no/rss/nyheter"
    const nrkUrl = "https://www.nrk.no/toppsaker.rss"

    const getRss = async (e) => {
        const urlRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\~+#-]*[\w@?^=%&amp;\/~+#-])*/g;
        if (nrkUrl.match(urlRegex)) {
          const response = await fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=${nrkUrl}`
          )
        .then(response => response.json())
        .then(data => {
            setArticles(data.items[0])
        })   
        }
    }

    useEffect(() => {
        getRss()
    }, [])

    return(
        <div
            className="API-container"
            onClick={props.toggle} 
            style={{height:props.height, width:props.width, border:props.show ? '3px dashed black' : ''}}
        >

            <h3>{articles.title}</h3>
            <small>{articles.description}</small>
        </div>
    )
}