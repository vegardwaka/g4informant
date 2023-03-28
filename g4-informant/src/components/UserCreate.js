import { useState } from "react"

export default function UserCreate() {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState('')
    const [password,  setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [primaryKey, setPrimaryKey] = useState('')
    let text;

 async function createUser() {
    getUserId()
    const response = await fetch('https://g4informant.com/api.php/records/bruker', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"bruker_id":primaryKey ,"epost": email,"passord": password,"brukernavn": username})
    })
    .then(response => {
        return response.json()
    })
    .then(data => { 
        if (data.code === 1009) {
            window.alert("User already exists!")
            return null
        } else if (data.code === 9999) {
            console.log(data.code)
            window.alert("Something went wrong. Try again!")
            return null
        } else {
            console.log(data)
            window.alert("User created!")
            text = "User created!"
        }
    });
}

    async function getUserId(){
        const response = await fetch('https://g4informant.com/api.php/records/bruker', {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setPrimaryKey(data.records.length + 1)
        })
    }

function validateEmail() {
    let res = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
}

function validatePassword() {
    if (password.length < 4) {
        return false
    }
    return true
}

function validateConfirmPassword() {
    if (password !== confirmPassword) {
        return false
    }
    return true
}

function vaildateUsername() {
    if (username.length < 4) {
        return false
    }
    return true
}

function submitButton(){
    validateEmail()
    validatePassword()
    validateConfirmPassword()
    vaildateUsername()
    if(!validateEmail(email)) {
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
    else if(!vaildateUsername()) {
        window.alert("Username cannot be less than 4 characters!")
        return null
    } 
         createUser()
  
}

    return (
        <div className="input-container">
        <div className="input--form">
                <h2 className="login--title">Create user</h2>
                <input 
                    required
                    type="email" 
                    name="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="input--email" 
                    placeholder="Email..."
                />
                <br/>
                <input 
                    required
                    type="username" 
                    name="username"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className="input--username" 
                    placeholder="username..."
                />
                <br/>
                <input 
                    required
                    type="password" 
                    name="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
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
                <button className="input--button" onClick={submitButton}>submit</button>
                <br/>
                <p className="input--feil">{text}</p>
            </div>
        </div>
    )
}