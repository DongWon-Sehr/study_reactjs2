import PropTypes from "prop-types";

function MovieList({movies}) {
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
                        <span className='basic-info'>{`🕒 ${movie.runtime} mins  |  ⭐ ${movie.rating}`}</span>
                        <br />
                        <span className='genre-info'>{`🔑 ${movie.genres.map(genre => "#" + genre).join(" ")}`}</span>
                        <br />
                        <span className='summary-info'>{`📝 ${movie.summary}`}</span>
                    </a>
                    <br />
                    <br />
                    <br />
                </p>
            )}
        </div>
    );
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default MovieList;