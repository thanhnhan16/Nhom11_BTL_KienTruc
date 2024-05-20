import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./Components/Home";


function App(){
    return(
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>

            </div>
        </Router>
    )
}

export default App