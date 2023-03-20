import {  useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Request() {
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
        createRequest();
    }

    /* Insert request */
    function createRequest() {
        let brukertall = 1
        fetch('http://localhost:3001/api_foresporsel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( {title, category, brukertall, message}),
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
          });
    }

    return (    
        <div className="foresporsel--div">
            <form className="foresporsel--form" onSubmit={handleSubmit}>
                <h1 className="foresporsel--tittel">API request</h1>
                <label htmlFor="foresporsel-label">Title</label><br/>
                <input 
                    required
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    name="title" 
                    className="foresporsel-label"
                />
                <br/>
                <label htmlFor="cars" className="foresporsel-label">Choose a category:</label>

                <select 
                    id="cars"  
                    required
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    name="category"
                    className="foresporsel--liste"
                >
                    <option value="Velg">Choose</option>
                    <option value="Nyheter">News</option>
                    <option value="Vær">Weather</option>
                    <option value="Skole">School</option>
                    <option value="Jobb">Job</option>
                </select><br/>

                <label htmlFor="test">Additional information</label><br/>
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
                <button type="submit" className="foresporsel--button">submit</button>
            </form>
        </div>
    )
}