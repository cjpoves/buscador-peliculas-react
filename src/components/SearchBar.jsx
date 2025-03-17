import { useState } from "react";
import "./SearchBar.css"
import { SearchBarMovies } from "./SearchBarMovies";


export const SearchBar = () => {
    const [texto, setTexto]  = useState("")
    const [alerta, setAlerta] = useState('')
    const [peliculas, setPeliculas] = useState([])

 //  Funcion para hacer fetch a la API
const getMovies = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmZmNTA3MDcwOWE4N2FjZGNjNGRmNjMxMmE4OGM1MCIsIm5iZiI6MTc0MTI1NzU2NC42OTUwMDAyLCJzdWIiOiI2N2M5N2I1YzRhZjhhNjg5YTIwMzQ4YjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KNgNrA6RhFPa0mBebt1YuAIEzcA5LLnMV0Ev9DY9hVw'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/search/movie?query=~${texto}&include_adult=true&language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setPeliculas(res.results))
 }

// Funcion para obtener películas cuando hacemos submit si el campo no esta vacio
    const handleSubmit = (e) => {
        e.preventDefault();
        if (texto.trim()) {
            setTexto("");
            getMovies()
            console.log(peliculas)
        } else {
            setAlerta('Ingrese una palabra')
        
            setTimeout(() => {
              setAlerta('')
         }, 2000)
        }
    }

    const handleClick = () => {
      setPeliculas([])
  }

    return (
        <>
     
      <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit} className="form-Search">
        <input
        type="text"
        placeholder="Introduce película"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}>
        </input>
        <button type='submit'>Buscar película</button>
        </form>
        <button className="btnEliminar" onClick = {handleClick} type='text'>Eliminar películas</button>
        {alerta && <p className='alert'>{alerta}</p>}


        <ul className="peliculas">
        {peliculas.map((pelicula) => (
          
          

            <SearchBarMovies key={pelicula.id} pelicula={pelicula} />
            
          
        ) )}
        </ul>
        
     
      
        </>
    )
 }