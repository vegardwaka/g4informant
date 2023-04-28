import HomeCard from './cards/HomeCard'
import info from '../json/info'

export default function Home(props) { 
  
  props.foot(true)
  const list = info.map(x => 
    <HomeCard
        key={x.id} 
        id={x.id} 
        title={x.title} 
        desc={x.desc}
        url={x.url}
    />
  )

  return (
      <div className="home">
        <div className="home-section1">
          <img src="/images/homepage-img.png" alt="home-img" id="homepage-img" />
          <h1 className="home-title">G4 Informant</h1>
          <div className="home-p-div">
            <h3 className="home-paragraph-1">
                G4 Informant is a webapplication that let our users create and display their very own information screen.
                You are able to choose from a range of components that will display different information, which you can see down below &darr;.
                Feel free to use our application as it is or you can host a version of it yourself, either for your workplace or just to display information.
                Our application is open-source and is available on GitHub  <a href="https://github.com/vegardwaka/g4informant">here</a>!
            </h3>
            <h5 className="home-paragraph-1">Bachelor project developed at USN (University of Southeast-Norway).</h5>
            <h5 className="home-paragraph-2">Our API-components is displayed below. If you want more information on our components and how they interact with rest of our application, you can visit our documentation <a href="/Documentation">here</a>.</h5>
          </div>
        </div>
        <h1 className="home-wbexamples-h1">screen examples</h1>
        <section className="row bottom slider-container">
          <div className="home-wb-examples">
            <img src="/images/homescreen1.png" alt="home" className="slider-image"/>
            <img src="/images/homescreen2.png" alt="home" className="slider-image"/>
            <img src="/images/homescreen3.png" alt="home" className="slider-image"/>
          </div>
        </section>
        <div className="home-section2">
          <h1 className="home-section-h1">&darr; Our APIs &darr;</h1>
          <br />
          {list}
        </div>
      </div>
  )
}
   