import HomeCard from './HomeCard'
import info from '../json/info'

export default function Home() {  
  const liste = info.map(x => {
    return(
      <HomeCard
          key={x.id} 
          item={x}
      />
    )
  })

  return (
      <div className="home">
        <section id="home-section">
          <img src="" alt="" />
          <h1 className="home-title">informationscreen?????</h1>
        </section>
        <section id="homecard-section">
          {liste}
        </section>
      </div>
    );
}
 
   