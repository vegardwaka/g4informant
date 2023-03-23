import { NavLink } from "react-router-dom";
export default function NavBar() {

    return (  
        <nav className="navbar">
            <NavLink to="/" id="navbar-title">G4 Informant</NavLink>
            <div className="links">
                <NavLink to="/" activeclassname="active">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/foresporsel">Request</NavLink>
                <NavLink to="/workbench">Workbench</NavLink>
                <NavLink to="/login">logg inn</NavLink>
            </div>
        </nav>
    );
}
 