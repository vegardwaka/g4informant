import { useFetch } from "react-fetch-hook"
export default function Foresporsel() {
    //const {isLoading, data} = useFetch("https://g4informant.com/api.php/records/bruker/1")
    return (    
        
        
        <div className="foresporsel--div">
            <form className="foresporsel--form">
                <h1 className="foresporsel--tittel">API forespørsel</h1>
                <label for="foresporsel-label">Tittel</label><br/>
                <input type="text" className="foresporsel-label"/><br/>
                <label for="cars" className="foresporsel-label">Velg en kategori:</label>

                <select id="cars" name="cars" className="foresporsel--liste">
                    <option value="Velg">Velg</option>
                    <option value="Nyheter">Nyheter</option>
                    <option value="Vær">Vær</option>
                    <option value="Skole">Skole</option>
                    <option value="Jobb">Jobb</option>
                </select><br/>

                <label for="test">Fritekst</label><br/>
                <textarea name="message" rows="10" cols="30" className="foresporsel--fritekst"></textarea><br/>
                <button className="foresporsel--button">SEND INN</button>
            </form>
        </div>
    )
}