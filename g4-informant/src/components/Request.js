import {  useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function Request(props) {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    let primaryKey
    props.foot(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        createRequest()
        navigate("/")
    } 

    /* Insert request */
    async function createRequest() { 

        /* checks latest request's primary key and adds 1 */
        await fetch(`https://g4informant.com/api.php/records/api_request`, {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            primaryKey = data.records.length + 1         
        })
        
        /* Posts the new request with the updated primary key to the database */
        fetch(`https://g4informant.com/api.php/records/api_request`, {      
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },    
          body: JSON.stringify({"apiid":primaryKey,"title":title,"category":category,"username":localStorage.getItem('token').replace(/"/g, ""),"text":message})
        })
        .then(response => {
            return response.text()
        })
        .then(data => {
            alert("Request with id number: " + data + ". Has succesfully been sent. Thank you for your valuable input.")
        })
    }

    return (    
        <div className="request--div">
            <form className="request--form" onSubmit={handleSubmit}>
                <h1 className="request--title">API request</h1>
                <label 
                    htmlFor="request-label" 
                    className="request-label"
                >Title</label>
                <br/>
                <input 
                    required
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    name="title" 
                    className="request-input"
                />
                <br/>
                <label 
                    htmlFor="dropdown" 
                    className="request-label"
                >Choose a category:</label>
                <select 
                    id="dropdown"  
                    required
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    name="category"
                    className="request--list"
                >
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="News">News</option>
                    <option value="Weather">Weather</option>
                    <option value="School">School</option>
                    <option value="Work">Job</option>
                    <option value="Finance">Finance</option>
                    <option value="Other">Other</option>
                </select><br/>

                <label 
                    htmlFor="test" 
                    className="request-label"
                >Additional information</label>
                <br/>
                <textarea  
                    required
                    value={message}  
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    rows="10" 
                    cols="30" 
                    className="request--text"
                >
                </textarea>
                <button type="submit" className="request--button">submit</button>
            </form>
        </div>
    )
}