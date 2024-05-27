import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Recall from "./Components/Recall/recall";
import Repair from "./Components/Repair/repair";
import Statistical from "./Components/Statistical/statistical";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/Home/HomePage";

function App(){
    return(
        <Router>
            <NavBar />
            <div className="App">
                <Routes>
                    <Route path="/recall" element={<Recall />} />
                    <Route path="/repair" element={<Repair />} />
                    <Route path="/statistical" element={<Statistical />} />
                    <Route path="/" element={<HomePage />} />
                     <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>

            </div>
        </Router>
    )
}

export default App