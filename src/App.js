import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

/*
  Link 기능을 사용하려면 BrowserRouter 안에 선언되어야한다.
 */
function App(){
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation/>
      <Routes>
        <Route path="/" exact={true} element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/movie-detail" element={<Detail/>} />
      </Routes>
    </Router>
  );
}

export default App;