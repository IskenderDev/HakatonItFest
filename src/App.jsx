
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Demo from "./Demo/Demo";


const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/demo' element={<Demo/>}/>
    </Routes>
  );
};

export default App;
