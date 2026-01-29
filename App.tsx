
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Appointment from './pages/Appointment';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white selection:bg-teal-100 selection:text-teal-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Appointment />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Sticky WhatsApp Floating Button for convenience */}
        <a
          href="https://wa.me/212781214641"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
          title="Chat on WhatsApp"
        >
          <svg 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path>
          </svg>
        </a>
      </div>
    </Router>
  );
};

export default App;
