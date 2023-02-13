import { Link } from 'react';

const NavBar = () => {
    return (  
        <nav className="navbar">
            <h1>G4 Informant</h1>
            <div className="links">
                <Link to="/">Hjem</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;