import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function UserCreate() {
    const [epost, setEpost] = useState("")
    const [passord,  setPassord] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const [bruker, setBruker] = useState([])

function validateEmail() {
    let res = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(epost);
}

function validatePassword() {
    if (passord.length < 4) {
        return false
    }
    return true
}

function validateConfirmPassword() {
    if (passord !== confirmPassword) {
        return false
    }
    return true
}

function submitknapp(){
    validateEmail()
    validatePassword()
    validateConfirmPassword()
    if(!validateEmail(epost)) {
        window.alert("Check your Email input!")
        return null
    }
    else if(!validatePassword()) {
        window.alert("Passwords cannot be less than 4 characters!")
        return null
    }
    else if(!validateConfirmPassword()) {
        window.alert("Passwords do not match!")
        return null
    }
}

    const tabs = bruker?.map((y) => y.brukernavn) ?? [];
    let tekst
    return (
        <div className="input-container">
        <div className="input--form">
                <h2 className="login--title">Create user</h2>
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
                <input 
                    required
                    type="password" 
                    name="confirmPassword"
                    value={confirmPassword} 
                    onChange={(e) => setconfirmPassword (e.target.value)} 
                    className="input--password" 
                    placeholder="Confirm Password..."
                />
                <br/>
                <button className="input--button" onClick={submitknapp}>submit</button>
                <br/>
                <p className="input--feil">{tekst}</p>
            </div>
        </div>
    )
}