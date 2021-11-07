
import './App.css';

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from '../Pages/01-LandingPage/LandingPage';
import NavBar from '../01-Nav/NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
