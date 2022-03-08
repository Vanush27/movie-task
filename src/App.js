import React from "react";

import Navigation from "./components/Navigation";
import MultiCarousel from "./components/MultiCarousel";

import './App.scss';

function App() {

    return (
        <div className="wrapper">
            <Navigation/>
            <div className="main">
                <MultiCarousel/>
            </div>
        </div>
    );
}

export default App;

