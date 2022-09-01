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
                <Route path="/" element={<Home />} />
                <Route path="/default" element={<Default />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/coins" element={<Coins />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/details/:id" element={<MovieDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;