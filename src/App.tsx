import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Info from './pages/Info';
import Navbar from './components/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
