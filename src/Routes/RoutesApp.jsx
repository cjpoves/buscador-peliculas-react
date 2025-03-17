import { Route, Routes } from "react-router"
import { Billboard } from "../pages/Billboard"
import { NextMovies } from "../pages/NextMovies"
import { SearchMovies } from "../pages/SearchMovies"
import { Trending } from "../pages/Trending"


export const RoutesApp = () => {
    return(
        <Routes>
            <Route path="/" element= {<SearchMovies/>}/>
            <Route path="/billboard" element= {<Billboard/>}/>
            <Route path="/nextMovies" element= {<NextMovies/>}/>
            <Route path="/trending" element= {<Trending/>}/>
        </Routes>
    )
}