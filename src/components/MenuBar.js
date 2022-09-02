import {Link} from "react-router-dom";

function MenuBar() {
    return (
        <div id="menu-bar">
            <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
            <span> | </span>
            <Link to={`${process.env.PUBLIC_URL}/default`}>App Default</Link>
            <span> | </span>
            <Link to={`${process.env.PUBLIC_URL}/todo`}>App Todo</Link>
            <span> | </span>
            <Link to={`${process.env.PUBLIC_URL}/coins`}>App Coins</Link>
            <span> | </span>
            <Link to={`${process.env.PUBLIC_URL}/movies`}>App Movies</Link>
        </div>
    );
}

export default MenuBar;