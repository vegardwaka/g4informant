import {useState} from 'react'
      

export default function useToken() {
    const getToken = () =>{
        const tokenString = localStorage.getItem('token')
        if (tokenString) {
        console.log(tokenString)
        const userToken = JSON.parse(tokenString)
        console.log(userToken)
        if (userToken && userToken.token) {
            return userToken?.token;
          }
          return null;
        }
     
    } 

    const [token, setToken] = useState(getToken())
    const saveToken = userToken => {
        if (userToken && userToken.token) {
          localStorage.setItem('token', JSON.stringify(userToken))
          setToken(userToken.token)
          console.log(userToken)
        }
      }
      
      return {
        setToken: saveToken,
        token
      }
}
