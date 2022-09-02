import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Home from "./routes/Home";
import Default from "./routes/Default";
import Todo from "./routes/Todo";
import Coins from "./routes/Coins";
import Movies from "./routes/Movies";
import MovieDetails from "./routes/MovieDetails";

function App() {
    console.log(process.env.PUBLIC_URL);
    return (
        <BrowserRouter>
            <Routes>
                <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
                <Route path={process.env.PUBLIC_URL + "/default"} element={<Default />} />
                <Route path={process.env.PUBLIC_URL + "/todo"} element={<Todo />} />
                <Route path={process.env.PUBLIC_URL + "/coins"} element={<Coins />} />
                <Route path={process.env.PUBLIC_URL + "/movies"} element={<Movies />} />
                <Route path={process.env.PUBLIC_URL + "/movies/details/:id"} element={<MovieDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;