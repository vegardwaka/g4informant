import {  useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Foresporsel() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');
    //const [apiid, setApiid] = useState(0);
    //const [fkid, setFkid] = useState(0);
    //const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.title.value)
        console.log(e.target.category.value)
        console.log(e.target.message.value)
        createMerchant();
    }

   

    /* NY KODE*/
    function createMerchant() {
    let name = "hater livet"
    let email = "LOLOLOLgmail"
    let brukertall = 1
        fetch('http://localhost:3001/api_foresporsel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( {title, message, category}),
          lol: brukertall,
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
           // getMerchant();
          });
      }

    //<button onClick={createMerchant}>TRYKK DENNE KNAPPEN FFDFD</button>
    return (    
        
        <div className="foresporsel--div">
            <form className="foresporsel--form" onSubmit={handleSubmit}>
                <h1 className="foresporsel--tittel">API forespørsel</h1>
                <label htmlFor="foresporsel-label">Tittel</label><br/>
                <input 
                    required
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    name="title" 
                    className="foresporsel-label"
                />
                <br/>
                <label htmlFor="cars" className="foresporsel-label">Velg en kategori:</label>

                <select 
                    id="cars"  
                    required
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    name="category"
                    className="foresporsel--liste"
                >
                    <option value="Velg">Velg</option>
                    <option value="Nyheter">Nyheter</option>
                    <option value="Vær">Vær</option>
                    <option value="Skole">Skole</option>
                    <option value="Jobb">Jobb</option>
                </select><br/>

                <label htmlFor="test">Fritekst</label><br/>
                <textarea  
                    required
                    value={message}  
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    rows="10" 
                    cols="30" 
                    className="foresporsel--fritekst"
                >
                    </textarea><br/>
                <button type="submit" className="foresporsel--button">SEND INN</button>
            </form>
        </div>
    )
}