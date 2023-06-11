import { Link } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav >
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Generos">Géneros</Link></li>
                    <li><Link to="/series">Series</Link></li>
                    <li><Link to="/peliculas">Películas</Link></li>
                    <li><Link to="/contactos">Contacots</Link></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;