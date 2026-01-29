
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpLeft } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'حجز موعد', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass rounded-[2rem] px-6 py-3 flex justify-between items-center shadow-2xl transition-all ${scrolled ? 'shadow-teal-900/5' : ''}`}>
          <div className="flex items-center">
            <Link to="/" className="flex flex-col items-start">
              <span className="text-xl md:text-2xl font-black text-teal-600 font-jakarta leading-none tracking-tighter">DR. MAPSO</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold mr-0.5">Premium Dental</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-bold transition-all hover:text-teal-600 ${isActive(link.path) ? 'text-teal-600' : 'text-gray-600'}`}
              >
                {link.name}
                {isActive(link.path) && <span className="absolute -bottom-1 right-0 w-full h-0.5 bg-teal-600 rounded-full" />}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-teal-600 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              احجز الآن
              <ArrowUpLeft size={16} />
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 mt-2">
          <div className="glass rounded-3xl p-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-bold ${isActive(link.path) ? 'text-teal-600' : 'text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-teal-600 text-white py-4 rounded-2xl font-black"
            >
              حجز موعد واتساب
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
