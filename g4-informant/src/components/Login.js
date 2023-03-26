import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'


export default function Login({ setToken }) {
    const [epost, setEpost] = useState('')
    const [passord, setPassord] = useState('')
    const [bruker, setBruker] = useState([])
    const navigate = useNavigate()

    /* sjekker database */

    async function getUser() {
        const response = await fetch(`http://localhost:3001/bruker/${epost}&${passord}`, {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setBruker(data)
            if (data.length > 0) {
                const token = data[0].brukernavn;
                setToken(token)
            }
        });
    }
      
    const handleSubmit = async (e) => {
        //e.preventDefault()
        await getUser()
        if(localStorage.getItem('token')){
            navigate('/')
            window.location.reload(false)}
        else {
            window.alert("User not found! Check your email and password input")
            return null
        }
      };

    /* Hente bruker */
    function validateemail() {
            let res = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            return res.test(epost);
    }
    
    function validatepassword() {
        if (passord.length < 4) {
            return false
        }
        return true

    }
    function submitknapp(){
        validateemail()
        validatepassword()
        if(!validateemail(epost)) {
            window.alert("Check your Email input!")
            return null
        }
        else if(!validatepassword()) {
            window.alert("Passwords cannot be less than 4 characters!")
            return null
        }
        
        handleSubmit()
    }

    return (
        <div className="input-container">
            <div className="input--form">
                <h2 className="input--title">Login</h2>
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
                <button className="input--button" onClick={submitknapp}>submit</button>
                <br/>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};




