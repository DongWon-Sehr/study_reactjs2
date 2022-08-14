import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from './App';
import AppDefault from "./AppDefault";
import AppTodo from "./AppTodo";
import AppCoins from "./AppCoins";
import AppMovies from './AppMovies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/app-default" element={<AppDefault />} />
            <Route path="/app-todo" element={<AppTodo />} />
            <Route path="/app-coins" element={<AppCoins />} />
            <Route path="/app-movies" element={<AppMovies />} />
        </Routes>
    </BrowserRouter>
);
