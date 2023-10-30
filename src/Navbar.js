import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Blog Psa</h1>
            <div className="links">
                <Link to="/">Dom</Link>
                <Link to="/create">Nowy wpis</Link>
            </div>
        </nav>
    );
}

export default Navbar;