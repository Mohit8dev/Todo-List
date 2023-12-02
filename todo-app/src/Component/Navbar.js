import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-content">
            <div className="Links"><Link to="/" style={{textDecoration: 'none', color : 'Lightgray'}}> Todos </Link></div>
            <div className="Links"><Link to="/completed" style={{textDecoration: 'none', color : 'Lightgray'}}> Completed </Link></div>
            </div>
        </div>
    )
}

export default Navbar;