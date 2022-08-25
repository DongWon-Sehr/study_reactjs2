import MenuBar from "../components/MenuBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { id } = useParams();
    const movieDetailsApiUrl = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;

    const [movieDetails, setMovieDetails] = useState({});
    const getMovieDetails = async () => {
        const response = await fetch(movieDetailsApiUrl);
        const json = await response.json();
        setMovieDetails(json.data.movie);
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
            <h2>movie deatils!</h2>
            <span>movie id: {id}</span>
            <br />
        </div>
    );
}

export default MovieDetails;