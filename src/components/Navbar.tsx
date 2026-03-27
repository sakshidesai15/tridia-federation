import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import triadiaLogo from '../assets/triadia-logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Opportunities', href: '/opportunities' },
    { name: 'IMSF', href: '/imsf' },
    { name: 'Contact', href: '/contact' },
  ];

  const navBg = scrolled || !isHome ? 'bg-brand-blue/90 backdrop-blur-xl py-3 shadow-2xl border-b border-white/10' : 'bg-transparent py-6';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full shadow-lg overflow-hidden bg-white p-1">
              <img
                src={triadiaLogo}
                alt="Triadia Federation Games logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-xl tracking-tighter text-white uppercase">Triadia</span>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em] mt-0.5">Federation Games</span>
            </div>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive ? 'text-brand-gold' : 'text-gray-300 hover:text-brand-gold'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link to="/contact" className="bg-brand-gold text-brand-blue px-6 py-2 rounded-full font-semibold hover:bg-white transition-all transform hover:scale-105">
                Join Now
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-blue border-t border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? 'text-brand-gold bg-gray-800' : 'text-gray-300 hover:text-brand-gold hover:bg-gray-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full mt-4 bg-brand-gold text-brand-blue px-6 py-3 rounded-full font-semibold text-center">
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
