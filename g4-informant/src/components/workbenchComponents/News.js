import { useState, useEffect } from 'react'

export default function News(props) {
    const [articles, setArticles] = useState([])

    async function getArticles() {
        await fetch(`url`, {
        method: 'GET',
        headers: 'application/xml'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch news data')
            } else {
                return response.json()}
        })
        .then(data => { 
            setArticles(data)
        })
    }
    
    useEffect(() => {
        getArticles()
    }, [])


    return(
        <div
            className="API-container"
            onClick={props.toggle} 
            style={{height:props.height, width:props.width, border:props.show ? '3px dashed black' : ''}}
        >
            <h1 className="news-title">Nyheter</h1>
            <p className="news-content">Bil kjørte inn i Elkjøp :O</p>
        </div>
    )
}

/*
    import RSSParser from 'rss-parser'

    const parser = new RSSParser()
    
    const feedURL = ""

    const parse = async url => {
        const feed = await parser.parseURL(url)

        console.log(feed.title)
    }
    parse(feedURL)
*/