import { useState } from 'react'

export default function TimeEditAPI() {
    const [timeedit, setTimeedit] = useState("")

    fetch('https://cloud.timeedit.net/usn/web/publikk/ri1Q5068.html', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }    
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        setTimeedit(data)
        console.log(data)
    })

    return (
        <div>
            <h1>{timeedit}</h1>
        </div>
    )
}