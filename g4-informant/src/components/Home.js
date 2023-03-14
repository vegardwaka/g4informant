import useFetch from "react-fetch-hook"
import { useEffect, useState } from 'react'
  // const myArticle = document.querySelector("article");
  //const { isLoading, data, error } = useFetch("https://g4informant.com/api.php/records/bruker/2");
  //console.log(isLoading, data, error);
  export default function Home() {
  const [user, setUser] = useState([]) 

  const fetchData = () => {
      fetch("https://g4informant.com/api.php/records/bruker/2")
      .then((response) => {
        return response.json()
      })
      .then(data => {setUser(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])


    return (
      <div className="home">
        <h1>{user.epost}</h1>
        <h2>Informasjonsskjermer</h2>
        <br/>
        <p>Har du et ønske om å piffe opp bedriften din med noen sykt kule informasjonsskjermer?</p>
        <p>Frykt ikke! G4Informant er sikkert ikke produktet for deg!!!!!</p>
        <p>Vi har jobbet i flere timer for å gjøre produktet best mulig, og vi garanterer at du ikke blir fornøyd!</p>
      </div>
    );
}
 
   