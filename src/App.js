import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logoImg from './assets/logo.png';
import imgMkj from './assets/banner.png';
import googlePlayIcon from './assets/google-play.png';

import pdf from './assets/app/pdf.png';



import PolicyPage from './PolicyPage';

function Header() {
  const location = useLocation();
  const isPolicyPage = location.pathname === '/policy';

  return (
      <header className="header">
          <div className="container header-container">
            <div className="header-left">
              <div className="logo-wrapper">
                <img src={logoImg} alt="Alexander Hopkins Studio" className="logo-img" />
                <span className="studio-name">Alexander Hopkins Studio</span>
              </div>
            </div>
            {!isPolicyPage && (
              <nav className="nav">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/policy" className="nav-link">POLICY</Link>
                <a href="#contact" className="nav-link">CONTACT</a>
              </nav>
            )}
          </div>
        </header>
  );
}

function HomePage() {
  const apps = [
    { name: 'Money Tracker: Budget Manager', image: pdf, link: 'https://apps.apple.com/vn/app/money-tracker/id6757209828' },
  ];

  return (
    <>
      <section id="about" className="section about">
        <div className="container about-row">
          <div className="about-text-container">
            <h2 className="highlight-title">Alexander Hopkins Studio – Welcome Aboard</h2>
            <p className="about-text">Alexander Hopkins Studio is a creative mobile game studio dedicated to building fun, engaging, and accessible experiences for everyone. We blend imagination and simplicity to create games that are easy to play — yet irresistibly addictive. Our mission is to spark joy in everyday life through intuitive gameplay, charming art, and satisfying progression. Every game we craft is designed with players at heart — delivering smooth performance, delightful interactions, and a lasting sense of fun that keeps you coming back for more.</p>
          </div>
          <div className="about-img-container">
            <img src={imgMkj} alt="About MKJ Studio" className="about-img" />
          </div>
        </div>
      </section>

      <section id="mission" className="section mission">
        <div className="container">
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-description">
            Bring Joy To Everyone - We bring joy to all users around the world by creating the best games with amazing experiences.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </div>
              <div className="stat-number">5M+</div>
              <div className="stat-label">Downloads</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <line x1="19" y1="8" x2="19" y2="14"></line>
                  <line x1="22" y1="11" x2="16" y2="11"></line>
                </svg>
              </div>
              <div className="stat-number">1M+</div>
              <div className="stat-label">Registered Users</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <div className="stat-number">100K+</div>
              <div className="stat-label">Daily Active Users</div>
            </div>
          </div>
        </div>
      </section>

      <section id="games" className="section games">
        <div className="container">
          <h2 className="text-center">Productivity Tools</h2>
          <div className="game-grid">
            {apps.map((game, index) => (
              <div key={index} className="game-card">
                <img src={game.image} alt={game.name} />
                <div className="game-info">
                  <h3>{game.name}</h3>
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="btn btn-google-play">
                    <img src={googlePlayIcon} alt="Google Play" className="google-play-icon" />
                    Get on App Store
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, request support, please contact us at:<br />
            <a href="mailto: alexanderhopkins70728352@gmail.com"> alexanderhopkins70728352@gmail.com</a><br />
            <span style={{ display: 'inline-block', marginTop: '10px' }}></span>
          </p>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} Alexander Hopkins Studio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;