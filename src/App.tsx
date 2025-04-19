import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <img src="/logo.svg" alt="CampusRadar Logo" className="logo" />
            <div className="brand-text">
              <h1>CampusRadar</h1>
              <p className="tagline">From boring to buzzing — see it all on the radar.</p>
            </div>
          </div>
          <nav className="main-nav">
            <button 
              className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => setActiveTab('home')}
            >
              Home
            </button>
            <button 
              className={`nav-item ${activeTab === 'events' ? 'active' : ''}`}
              onClick={() => setActiveTab('events')}
            >
              Events
            </button>
            <button 
              className={`nav-item ${activeTab === 'clubs' ? 'active' : ''}`}
              onClick={() => setActiveTab('clubs')}
            >
              Clubs
            </button>
            <button 
              className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <button className="cta-button">Join Now</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h2>Never Miss a Campus Event Again</h2>
            <p>Discover, share, and stay updated with all the exciting events happening across your campus. From tech talks to cultural fests, we've got you covered!</p>
            <div className="hero-actions">
              <button className="primary-button">Explore Events</button>
              <button className="secondary-button">Join a Club</button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="calendar-preview">
            <img 
              src="/images/calendar-preview.jpeg" 
              alt="CampusRadar Calendar Preview" 
              className="calendar-image"
            />
          </div>
          <h3>Why Choose CampusRadar?</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h4>AI-Powered Recommendations</h4>
              <p>Get personalized event suggestions based on your interests and past attendance</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h4>Calendar Integration</h4>
              <p>Automatically sync events with your phone calendar and never miss an event</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎟️</div>
              <h4>Quick Registration</h4>
              <p>One-click event registration and ticket booking for hassle-free planning</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h4>Live Reviews</h4>
              <p>Read real-time ratings and reviews from fellow students</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📸</div>
              <h4>Event Archives</h4>
              <p>Browse through photos and achievements from past events</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h4>Campus Network</h4>
              <p>Connect with friends and build your campus community</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h4>Smart Posting</h4>
              <p>Pay-per-post system to reduce spam and ensure quality content</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h4>Mutual Connections</h4>
              <p>See which of your friends are attending events and join them</p>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="featured-section">
          <h3>Featured Events</h3>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-date">APR 25</div>
              <h4>Tech Symposium 2024</h4>
              <p>Join us for a day of innovation and technology discussions with industry leaders.</p>
              <button className="card-button">Learn More</button>
            </div>
            <div className="event-card">
              <div className="event-date">APR 28</div>
              <h4>Cultural Fest</h4>
              <p>Experience the diversity of our campus through music, dance, and food.</p>
              <button className="card-button">Learn More</button>
            </div>
            <div className="event-card">
              <div className="event-date">MAY 2</div>
              <h4>Career Fair</h4>
              <p>Connect with top employers and explore exciting career opportunities.</p>
              <button className="card-button">Learn More</button>
            </div>
          </div>
        </section>

        {/* Popular Clubs */}
        <section className="clubs-section">
          <h3>Popular Clubs</h3>
          <div className="clubs-grid">
            <div className="club-card">
              <h4>Tech Club</h4>
              <p>Innovation & Technology</p>
              <button className="card-button">Join Club</button>
            </div>
            <div className="club-card">
              <h4>Arts Society</h4>
              <p>Creative Expression</p>
              <button className="card-button">Join Club</button>
            </div>
            <div className="club-card">
              <h4>Sports Club</h4>
              <p>Fitness & Competition</p>
              <button className="card-button">Join Club</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/logo.svg" alt="CampusRadar Logo" className="footer-logo" />
            <p>Your one-stop platform for all campus events and activities.</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h5>Quick Links</h5>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
            <div className="link-group">
              <h5>Connect</h5>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CampusRadar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
