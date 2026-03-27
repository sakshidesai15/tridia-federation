import { Link } from 'react-router-dom';
import triadiaLogo from '../assets/triadia-logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-white/90 p-1">
              <img
                src={triadiaLogo}
                alt="Triadia Federation Games logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-lg tracking-tight">
              TRIADIA <span className="text-brand-gold">FEDERATION</span>
            </span>
          </Link>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <Link to="/about" className="hover:text-brand-gold transition-colors">About</Link>
            <Link to="/programs" className="hover:text-brand-gold transition-colors">Programs</Link>
            <Link to="/opportunities" className="hover:text-brand-gold transition-colors">Opportunities</Link>
            <Link to="/imsf" className="hover:text-brand-gold transition-colors">IMSF</Link>
            <Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link>
          </div>
          
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Triadia Federation Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
