import MenuBar from "../components/MenuBar";
import MovieInfo from "../components/MovieInfo";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { id } = useParams();
    const movieDetailsApiUrl = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
    
    const [isLoading, setIsLoading] = useState(true);
    const [movieDetails, setMovieDetails] = useState({});
    const getMovieDetails = async () => {
        setIsLoading(true);
        const response = await fetch(movieDetailsApiUrl);
        const json = await response.json();
        setMovieDetails(json.data.movie);
        setIsLoading(false);
        console.log(json.data.movie);
    };

    useEffect(
        () => {
            getMovieDetails();
        },
        []
    );

    return (
        <div>
            <MenuBar />
            <h1>
                Details!
            </h1>
            {isLoading
                ? <h3>Loading ...</h3>
                : <MovieInfo details={movieDetails} />}
        </div>
    );
}

export default MovieDetails;