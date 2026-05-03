import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from 'react';


function App() {
    return (
        <Router>
            <div>
                <nav>
                        <div class="a">
                        <h1 class="title">Pharmacy App</h1>
                            <ul>
                               <li> <a href="/">Home</a> </li>
                               <li>  <a href="/login">Login</a></li>
                               <li> <a href="/register">Register</a></li>
                               <li> <a href="/about">About</a> </li>
                            </ul>
                        </div>
                    </nav>
              <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/about" element={<About />} />
                </Routes>
    </div >
  </Router>

  );
}

export default App;
