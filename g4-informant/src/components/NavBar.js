import { NavLink } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
    const navigate = useNavigate()
    
    /* On signout - it removes the token and navigates to login page */
    function signOut() {
        localStorage.removeItem('token')
        navigate('/login')
        window.location.reload(false)
    }

    /* Elements in the navbar that are available to the user depends on if your a logged in or not by looking at if you have a token or not*/
    return (  
        <nav className="navbar">
            <NavLink to="/" id="navbar-title"><img src="/images/g4.png" alt="logo" id="navbar-logo"/>G4 Informant</NavLink>
            <div className="links">
                <NavLink to="/" activeclassname="active">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/documentation">Docs</NavLink>
                {localStorage.getItem('token') && <NavLink to="/Profile">Profile</NavLink>}
                {localStorage.getItem('token') && <NavLink to="/Request">Request</NavLink>}
                {localStorage.getItem('token') && <NavLink to="/Workbench">Workbench</NavLink>}
                {localStorage.getItem('token') && <NavLink to="/UserCreate">Create User</NavLink>}
                {localStorage.getItem('token') ? <NavLink to="/login" onClick={signOut}>Sign Out</NavLink> : <NavLink to="/login">Login</NavLink>}
            </div>
        </nav>
    )
}
