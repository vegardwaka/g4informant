import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import bcrypt from 'bcryptjs'

export default function Login({ setToken, foot}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState([])
    const navigate = useNavigate()
    foot(true)

    /* Check if user exists in the database */
    async function getUser() {
        await fetch(`https://g4informant.com/api.php/records/user?filter=email,eq,${email}`, {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            bcrypt.compare(password, data.records[0].password,function(err,res){
                if (res) {
                    setUser(data)
                    if (data.records.length > 0) {
                        const token = data.records[0].username
                        setToken(token)
                        if(localStorage.getItem('token')){
                            navigate('/')
                            window.location.reload(false)
                        }
                    }
                }
                else {
                    window.alert("Wrong username or password! Check your email and password input") 
                }
            })
        })
    }


    /* Validate Email */
    function validateEmail() {
        let res = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        return res.test(email)
    }
    
    /* Validate Password */
    function validatePassword() {
        if (password.length < 4) {
            return false
        }
        return true
    }
    
    /* Handle submit to validate email and password, and run getUser() function */
    function handleSubmit(){
        validateEmail()
        validatePassword()
        if(!validateEmail(email)) {
            window.alert("Check your Email input!")
            return null
        }
        else if(!validatePassword()) {
            window.alert("Passwords cannot be less than 4 characters!")
            return null
        }
        getUser()
    }

    useEffect(() => {
        const passwordInput = document.querySelector("#password");
        passwordInput.addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("loginBtn").click();
            }
        })
    }, [])

    return (
        <div className="input-container">
            <div className="input--form">
                <h2 className="input--title">Login</h2>
                <input 
                    required
                    type="email" 
                    name="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="input--email" 
                    id="email"
                    placeholder="Email..."
                />
                <br/>
                <input 
                    required
                    type="password" 
                    name="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="input--password" 
                    id="password"
                    placeholder="Password..."
                />
                <br/>
                <button className="input--button" id="loginBtn" onClick={handleSubmit}>submit</button>
                <br/>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};




