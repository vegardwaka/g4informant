import { useEffect, useState } from "react";

export default function Login() {
    const [epost, setEpost] = useState('');
    const [passord, setPassord] = useState('');
    const [feil, setFeil] = useState('');
    const [bruker, setBruker] = useState([])

    const handleChange = (e) => {
        e.preventDefault()
        //console.log(e.target.epost.value)
        //console.log(e.target.passord.value)
        getUser();
    };

    /* Hente bruker */
    function getUser() {
        let bruker_id = "2"
        fetch(`http://localhost:3001/bruker/${bruker_id}`, {
            method: 'GET',
        })
          .then(response => {
             return response.json()
          })
          .then(data => { setBruker(data) 
        });
    }
/*
    useEffect(() => { 
    getUser()
    }, []) */
      
    const tabs = bruker.map(y => y.epost)
    let tekst
    console.log("brukerid = " + bruker.epost)
    
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
            <h1>{tabs}</h1>
            <div className="login--form">
                <h2 className="login--title">Logg inn</h2>
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
                <button className="login--button" onClick={handleChange}>submit</button>
                <br/>
                <p className="input--feil">{tekst}</p>
            </div>
        </div>
    )
}
