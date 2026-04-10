import "./Navbar.css"
import { Link } from "react-router";

const Navbar = ({children}) => {
    return(
        <>
            <nav className="container-navbar">
                <div className="nav-pill">
                    <a href="/" className="nav-link">Home</a>
                    <Link to="/aboutme" className="nav-link">About</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/ContactMe" className="nav-link">Contact</Link>
                </div>
            </nav>
            <main>
                {children}
            </main>
        </>
    );
};

export default Navbar;