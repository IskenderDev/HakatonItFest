
import Header from './widjets/header/Header'
import Footer from './widjets/footer/Footer'
import React from 'react';
import {  Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';


const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;

