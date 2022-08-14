import MenuBar from "./components/MenuBar";
import { useState, useEffect } from "react";

function AppMovies() {
    return (
        <div>
            <MenuBar />
            <h1>
                The Movies!
            </h1>
        </div>
    );
}

export default AppMovies;