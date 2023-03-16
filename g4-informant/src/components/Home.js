import { useEffect, useState } from 'react'
export default function Home() {
  const [user, setUser] = useState([])

  function getUser() {
    fetch('http://localhost:3001')
      .then(response => {
         return response.json()
      })
      .then(data => { setUser(data) 
    });
  }
  useEffect(() => { 
    getUser()
  }, [])
  
  const liste = user.map(x => x.epost)
  
  return (
    <div className="home">
      <h2>{liste}</h2>
    </div>
  );
}
 
   