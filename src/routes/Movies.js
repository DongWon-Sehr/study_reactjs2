import MenuBar from "../components/MenuBar";
import MovieList from "../components/MovieList";
import { useState, useEffect } from "react";

const movieApiUrl = "https://yts.mx/api/v2/list_movies_json?minimum_rating=8.5&sort_by=year";

function Movies() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const requestMovieApi = async () => {
        setIsLoading(true);
        const response = await fetch(movieApiUrl);
        const json = await response.json();
        console.log(json.data.movies);
        setMovies(json.data.movies);
        setIsLoading(false);
    };

    useEffect(() => {
        requestMovieApi();
    }, []);

    return (
        <div>
            <MenuBar />
            <h1>
                The Movies!
            </h1>
            {isLoading 
            ? <h3>Loading ...</h3> 
            : <MovieList movies={movies} />}
        </div>
    );
}



export default Movies;