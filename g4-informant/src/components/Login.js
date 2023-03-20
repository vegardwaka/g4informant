import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [epost, setEpost] = useState('');
    const [passord, setPassord] = useState('');
    const [feil, setFeil] = useState('');
    const [bruker, setBruker] = useState([]);
    //const [token, setToken] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async e => {
        e.preventDefault()
        getUser(); 
        //setToken(bruker.map((y) => y.brukernavn))
    };

     /*
    useEffect(() => { 
        getUser()
    }, [])  */

    /* Hente bruker */
    async function getUser() {
      //  let bruker_id = "1"
        fetch(`http://localhost:3001/bruker/${epost}&${passord}`, {
            method: 'GET',
        })
          .then(response => {
             return response.json()
          })
          .then(data => { setBruker(data) 
          })
          .then(() => {
            navigate('/');
        });
    }
  
    
    const tabs = Array.isArray(bruker) ? bruker.map((y) => y.brukernavn) : [];
    //setToken(tabs);
    let teksten = tabs
    //setToken(teksten)
    let tekst
    console.log(tabs.length)
    
    
    /*
    function feilSjekk(event) {
        if (epost.length === 0) {
            setFeil("lol")
        } else if (passord.length === 0) {
            setFeil("lol")
       }
   } */

    return (
        <div className="login-container">
            <h1>{tabs.length > 0 ? "bruker finnes" : "bruker finnes ikke"}</h1>
            <div className="login--form">
                <h2 className="login--title">Login</h2>
                <input 
                    type="text" 
                    value={epost} 
                    onChange={(e) => setEpost(e.target.value)} 
                    className="input--email" 
                    placeholder="Email..."
                />
                <br/>
                <input 
                    type="password" 
                    value={passord} 
                    onChange={(e) => setPassord(e.target.value)} 
                    className="input--password" 
                    placeholder="Password..."
                />
                <br/>
                <button className="login--button" onClick={handleSubmit}>submit</button>
                <br/>
                <p className="input--feil">{tekst}</p>
            </div>
        </div>
    )
}


