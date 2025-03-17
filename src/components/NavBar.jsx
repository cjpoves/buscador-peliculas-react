import { Link } from "react-router";
import "./NavBar.css";

export const NavBar = () => {
    return (
        <nav className="navegacion">
            <Link to={"/"}>Buscar pelicula</Link>
            <Link to={"/trending"}>En Tendencia</Link>
            <Link to={"/billboard"}>Cartelera</Link>
            <Link to={"/nextMovies"}>Próximos estrenos</Link>
        </nav>
    )
}