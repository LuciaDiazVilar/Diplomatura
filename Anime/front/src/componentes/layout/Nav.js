import '../../styles/components/layout/Nav.css';
import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav >
            <div>
                <ul>
                    <li>< NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined }>Home</ NavLink></li>
                    <li><NavLink to="/Generos"className={({ isActive }) => isActive ? "activo" : undefined }>Generos</ NavLink></li>
                    <li><NavLink to="/series"className={({ isActive }) => isActive ? "activo" : undefined }>Series</ NavLink></li>
                    <li><NavLink to="/peliculas"className={({ isActive }) => isActive ? "activo" : undefined }>Peliculas</ NavLink></li>
                    <li><NavLink to="/contactos"className={({ isActive }) => isActive ? "activo" : undefined }>Contactos</ NavLink></li>
                    <li><NavLink to="/login"className={({ isActive }) => isActive ? "activo" : undefined }>Ingresar</ NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;