import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';

function Navigation() {
  return (
    <nav className="p-5 fixed w-full flex justify-between items-center bg-white shadow-sm">
      <h1 className="text-xl font-light text-pink-600">Sannidhi Salibindla</h1>
      <div className="space-x-6">
        <Link to="/" className="text-gray-600 hover:text-pink-600 transition-colors">Home</Link>
        <Link to="/about" className="text-gray-600 hover:text-pink-600 transition-colors">About</Link>
        <Link to="/experience" className="text-gray-600 hover:text-pink-600 transition-colors">Experience</Link>
        <Link to="/resume" className="text-gray-600 hover:text-pink-600 transition-colors">Resume</Link>
      </div>
    </nav>
  );
}





function Experience() {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-light text-gray-800 mb-12">Experience</h2>
        <div className="space-y-8">
          <div className="bg-pink-50 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-medium text-pink-600">Position Title</h3>
              <span className="text-gray-500">2023 - Present</span>
            </div>
            <h4 className="text-gray-700 mb-2">Company Name</h4>
            <ul className="text-gray-600 space-y-2">
              <li>• Key achievement or responsibility</li>
              <li>• Another accomplishment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-3xl font-light text-gray-800 mb-6">Resume</h2>
        <p className="text-gray-600 mb-8">
          View or download my full resume to learn more about my skills and qualifications.
        </p>
        <a 
          href="/path-to-your-resume.pdf" 
          className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pink-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;