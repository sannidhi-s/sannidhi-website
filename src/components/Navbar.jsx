

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Github from '../components/github-mark.svg';
import Linkedin from '../components/linkedin.svg';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-sm border-b border-slate-100 z-20">
      <div className="max-w-5lg mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-light text-pink-600">
            Sannidhi Salibindla
          </Link>

          <div className="flex items-center gap-6 md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div className={`flex items-center gap-6 ${isMenuOpen ? 'flex-col absolute top-16 left-0 w-full bg-white' : 'hidden md:flex'}`}>
            <NavLink
              to="/"
              className={({ isActive }) => `
                px-3 py-1 rounded-lg transition-colors
                ${isActive ? 'bg-black text-pink-500' : 'text-slate-600 hover:text-pink-600'}
              `}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `
                px-3 py-1 rounded-lg transition-colors
                ${isActive ? 'bg-black text-pink-500' : 'text-slate-600 hover:text-pink-600'}
              `}
            >
              About
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) => `
                px-3 py-1 rounded-lg transition-colors
                ${isActive ? 'bg-black text-pink-500' : 'text-slate-600 hover:text-pink-600'}
              `}
            >
              Experience
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) => `
                px-3 py-1 rounded-lg transition-colors
                ${isActive ? 'bg-black text-pink-500' : 'text-slate-600 hover:text-pink-600'}
              `}
            >
              Resume
            </NavLink>

            <div className="h-5 border-l border-slate-200" />

            <div className="flex gap-4">
              <a href="https://github.com/sannidhi-s" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="GitHub" className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sannidhi333" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
