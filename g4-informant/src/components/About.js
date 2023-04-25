import React from "react"
import AboutCard from "./cards/AboutCard"
import omoss from "../json/omoss"

export default function About() {
    const list = omoss.map(item => {
        return(
            <AboutCard 
                key={item.id} 
                item={item}
            />
        )
    })
    
    return(
        <section className="about">
            <h2 className="about-title">Our team</h2>
            <div className="about-list">
                {list}
            </div>
            <a className="contact--link" href="mailto:contact@g4informant.com"><button className="about--button">Contact us</button></a>
        </section>
    )
}