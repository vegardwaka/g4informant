export default function Foresporsel() {
    return (
        <div className="foresporsel--div">
            <form className="foresporsel--form">
                <h1>API forespørsel</h1>
                <label for="foresporsel-tittel">Tittel</label><br/>
                <input type="text" className="foresporsel--tittel"/><br/>
                <label for="cars">Velg en kategori:</label>

                <select id="cars" name="cars" className="foresporsel--liste">
                    <option value="Velg">Velg</option>
                    <option value="Nyheter">Nyheter</option>
                    <option value="Vær">Vær</option>
                    <option value="Skole">Skole</option>
                    <option value="Jobb">Jobb</option>
                </select><br/>

                <label for="test">Fritekst</label><br/>
                <textarea name="message" rows="10" cols="30" className="foresporsel--fritekst"></textarea><br/>
                <input type="submit" className="foresporsel--knapp"/>
            </form>
        </div>
    )
}