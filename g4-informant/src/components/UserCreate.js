import { useState } from "react"
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10)

export default function UserCreate(props) {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState('')
    const [password,  setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    let key
    props.foot(true)
        
    /* Creating user */
    async function createUser() {

        /* Finding primary key for the new user */
        await fetch('https://g4informant.com/api.php/records/user', {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            key = data.records.length + 1
        })

        /* Hashing the password entered in by the user */
        const hashedPassword = bcrypt.hashSync(password, salt)

        /* POST request for a new user */
        await fetch('https://g4informant.com/api.php/records/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"user_id":key ,"email": email,"password": hashedPassword,"username": username})
        })
        .then(response => {
            return response.json()
        })
        .then(data => { 
            if (data.code === 1009) {
                window.alert("User already exists!")
                return null
            } else if (data.code === 9999) {
                window.alert("Something went wrong. Try again!")
                return null
            } else {
                window.alert("User created!")
            }
        })
    }

    /* Input validation */
    function validateEmail() {
        let res = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return res.test(email)
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

    /* Handle submit to validate email and password, and run createUser() function */
    async function submitButton(){
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
                <h2 className="input--title">Create user</h2>
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
                    placeholder="Username..."
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
                    onChange={(e) => setConfirmPassword (e.target.value)} 
                    className="input--password" 
                    placeholder="Confirm Password..."
                />
                <br/>
                <button className="input--button" onClick={submitButton}>submit</button>
            </div>
        </div>
    )
}