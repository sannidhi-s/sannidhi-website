import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navbar';
import Experience from './pages/Experience';
import Resume from './pages/Resume';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
 

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <Footer />
        </div>
   
    </Router>
  );
}

export default App;