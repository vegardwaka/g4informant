import HomeCard from './HomeCard'
import info from '../json/info'

export default function Home() { 
  const list = info.map(x => 
    <HomeCard 
        id={x.id} 
        title={x.title} 
        desc={x.desc}
        url={x.url}
    />
  )

  return (
      <div className="home">
        <div className="home-section">
          <h1 className="home-title">G4 Informant</h1>
          <h3 className="home-paragraph-1">
              G4 Informant is a webapplication that let our users create and display their very own screen.
              You are able to choose from a range of components that will display different information.
              We are currently InDev, which means there will be more components coming soon. 
              Our application is open-source and is available on GitHub  <a href="https://github.com/vegardwaka/g4informant">here</a>!
          </h3>
          <h5 className="home-paragraph-2">Bachelor project developed at USN (Universitetet i Sør-Øst Norge).</h5>
        </div>
        <div className="home-section">
          <br />
          <h1 className="home-section-h1">&darr; Our APIs &darr;</h1>
          <br />
          {list}
        </div>
      </div>
  )
}
   