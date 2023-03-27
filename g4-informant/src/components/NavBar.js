import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
    const navigate = useNavigate()
    function signOut() {
        localStorage.removeItem('token')
        navigate('/')
        window.location.reload(false)
    }

    return (  
        <nav className="navbar">
            <NavLink to="/" id="navbar-title">G4 Informant</NavLink>
            <div className="links">
                <NavLink to="/" activeclassname="active">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                {localStorage.getItem('token') ? <NavLink to="/Request">Request</NavLink> : null}
                {localStorage.getItem('token') ? <NavLink to="/Workbench">Workbench</NavLink>: null}
                {localStorage.getItem('token') ? <NavLink to="/UserCreate">Create user</NavLink>: null}
                {localStorage.getItem('token') ? <NavLink to="/" onClick={signOut}>Sign Out</NavLink> : <NavLink to="/login">Login</NavLink>}
            </div>
        </nav>
    );
}