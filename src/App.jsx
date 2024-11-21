import React from 'react';
import {  Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/detail" element={About} /> */}
    </Routes>
  );
};

export default App;
