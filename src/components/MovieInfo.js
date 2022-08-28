import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieInfo({ details }) {
    console.log(details)
    return (
        <div>
            <p id={details.id} key={details.id}>
                <img src={details.medium_cover_image} alt='poster' />
                <br />
                <span className='title'>{details.title_long}</span>
                <br />
                <span className='basic-info'>{`🕒 ${details.runtime} mins  |  ⭐ ${details.rating}`}</span>
                <br />
                <span className='genre-info'>{`🔑 ${details.genres.map(genre => "#" + genre).join(" ")}`}</span>
                <br />
                <span className='summary-info'>{`📝 ${details.description_full}`}</span>
                <br />
                <a href={details.url} target='_blank'>YTS.MX link</a>
                <br />
                <br />
                <br />
            </p>
        </div>
    );
}

MovieInfo.propTypes = {
    details: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default MovieInfo;