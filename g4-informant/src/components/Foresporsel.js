import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Foresporsel() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const apiReq = {title, category, message};
        console.log(e.target.title.value)
        console.log(e.target.category.value)
        console.log(e.target.message.value)

        fetch("https://g4informant.com/api.php/records/api_foresporsel", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"API_id": 0, "tittel": title, "fk_bruker_id": 2, "fritekst": message, "kategori": category}),
            })  
            .then((response) => response.json())
            .then((apiReq) => {
                console.log("Success:", apiReq);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    
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