import MenuBar from "./components/MenuBar";
import { useState, useEffect } from "react";

const movieApiUrl = "https://yts.mx/api/v2/list_movies_json?minimum_rating=8.5&sort_by=year";

function MovieList(movies) {
    movies = movies.movies;
    console.log(movies)
    return (
        <div>
            {movies.map((movie) =>
                <p id={movie.id} key={movie.id}>
                    <a href={movie.url}>
                        <img src={movie.medium_cover_image} alt='poster' />
                        <br />
                        <span className='title'>{movie.title_long}</span>
                        <br />
                        <span className='basic-info'>{`🕒 ${movie.runtime} mins | ⭐ ${movie.rating}`}</span>
                        <br />
                        <span className='genre-info'>{movie.genres.map(genre => "#" + genre).join(" ")}</span>
                        <br />
                        <span className='summary-info'>{movie.summary}</span>
                    </a>
                    <br />
                    <br />
                    <br />
                </p>
            )}
        </div>
    );
}

function AppMovies() {
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
            {isLoading ? <h3>Loading ...</h3> : <MovieList movies={movies} />}
        </div>
    );
}



export default AppMovies;