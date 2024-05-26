import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./Components/Home";
import Repair from "./Components/Repair"


function App(){
    return(
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/repair" element={<Repair />} />
                </Routes>

            </div>
        </Router>
    )
}

export default App