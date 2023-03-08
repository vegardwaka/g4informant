import React from "react";
import AboutCard from "./AboutCard";
import omoss from "../json/omoss";

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
            <h2 className="about-title">Vårt team</h2>
            <div className="about-list">
                {list}
            </div>
            <input type="button" value="Kom i kontakt" className="about--button"/>
        </section>
    )
}