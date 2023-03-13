import useFetch from "react-fetch-hook"
export default function Home() {
  const { isLoading, data, error } = useFetch("https://g4informant.com/api.php/records/bruker/2");
  console.log(isLoading, data, error);
    return (
      <div className="home">
        <h2>Informasjonsskjermer</h2>
        <br/>
        <p>Har du et ønske om å piffe opp bedriften din med noen sykt kule informasjonsskjermer?</p>
        <p>Frykt ikke! G4Informant er sikkert ikke produktet for deg!!!!!</p>
      </div>
    );
}
 
   