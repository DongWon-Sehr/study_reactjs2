import MenuBar from "../components/MenuBar";
import { useState, useEffect } from "react";

const movieApiUrl = "https://yts.mx/api/v2/list_movies_json?minimum_rating=8.5&sort_by=year";

function MovieDetails() {
    return (
        <div>
            <h2>movie deatils!</h2>
            <span>movie id:</span>
        </div>
    );
}

export default MovieDetails;