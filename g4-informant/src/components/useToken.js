import {useState} from 'react'

export default function useToken() {

  /* Gets the user token from localstorage so other pages can use it */
  const getToken = () => {
    const tokenString = localStorage.getItem('token')
    const userToken = JSON.parse(tokenString)
    return userToken?.token
  } 

  /* Sets the user token on sign-in */
  const [token, setToken] = useState(getToken())
  const saveToken = userToken => {
      localStorage.setItem('token', JSON.stringify(userToken))
      setToken(userToken.token)
  }

  return {
    setToken: saveToken,
    token
  }
}