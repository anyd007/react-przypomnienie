import { Link } from "react-router-dom";

const NotFound = () => {

    return (
        <div className="not-gound">
            <h2>Przykro...</h2>
            <p>ta strona nie istnieje</p>
            <Link to="/">Wracaj do nas</Link>
        </div>
    );
}
 
export default NotFound;