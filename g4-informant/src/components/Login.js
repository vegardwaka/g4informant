import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'


export default function Login({ setToken }) {
    const [epost, setEpost] = useState('');
    const [passord, setPassord] = useState('');
    //const [feil, setFeil] = useState('');
    const [bruker, setBruker] = useState([]);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = await getUser({
            epost,
            passord
        })
        setToken(token)
    };

    /* Hente bruker */
async function getUser() {
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
    let tekst
    console.log(tabs.length)

    return (
        <div className="login-container">
            <div className="login--form">
                <h2 className="login--title">Login</h2>
                <input 
                    required
                    type="email" 
                    name="email"
                    value={epost} 
                    onChange={(e) => setEpost(e.target.value)} 
                    className="input--email" 
                    placeholder="Email..."
                />
                <br/>
                <input 
                    required
                    type="password" 
                    name="password"
                    value={passord} 
                    onChange={(e) => setPassord(e.target.value)} 
                    className="input--password" 
                    placeholder="Password..."
                />
                <br/>
                <button className="login--button" onClick={handleSubmit}>submit</button>
                <br/>
                <p className="input--feil">{tekst}</p>
                <p>{tabs.length > 0 ? "bruker finnes" : "bruker finnes ikke"}</p>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};




