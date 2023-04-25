import React from "react"
import BlogCard from "./cards/BlogCard"
import bloggInnlegg from "../json/bloggInnlegg"
import { useEffect } from 'react'

export default function Blog(props) {

  useEffect(() =>{
    props.onShow(false)
}, [])

  const liste = bloggInnlegg.map(x => {
    return(
       <BlogCard 
          key={x.id} 
          item={x}
       />
    )
  })

  return (
    <section className="blog">
      <div className="blog-header">
        <h1 className="blog-title"> G4 Informant</h1>
        <h3 className="blog-undertitle">Bacheloroppgave - Blogg</h3>
        <div className="blog-img">
          <img src="/images/icons/sun.png" alt="" width="30px" />
          <img src="/images/icons/clock.png" alt="" width="30px" id="blog-clock" />
          <img src="/images/icons/calendar-line.png" alt="" width="30px" />
          <img src="/images/icons/picture.png" alt="" width="30px" />
          <img src="/images/icons/news.png" alt="" width="30px" />
          <img src="/images/icons/text.png" alt="" width="30px" />
        </div>
      </div>
      <div className="blog">
          {liste}
      </div>
      <footer className="blog-footer-usn">
          <img src="https://www.usn.no/getfile.php/13520469-1677146025/usn.no/om_USN/Logo%20og%20grafiske%20elementer/USN_logotype.png" alt="usn-logo" id="usn-logo"/>
          <p>Universitetet i Sørøst-Norge</p>
      </footer>
    </section>
  )
}

