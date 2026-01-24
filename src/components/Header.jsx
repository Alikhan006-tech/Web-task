import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Links Array - Taake code repetitive na ho
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-100 top-0 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo - Using Link for navigation */}
          <Link to="/" className="font-black text-3xl tracking-tighter text-black cursor-pointer">
            STUDIO<span className="text-blue-600">.</span>
          </Link>
          
          {/* Desktop Nav - Using NavLink for active styling */}
          <div className="hidden md:flex space-x-10 font-medium text-sm uppercase tracking-widest">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => 
                  `transition-all duration-300 hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-600'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Content */}
      <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed inset-0 top-20 bg-white z-99 transition-transform duration-500 md:hidden p-8`}>
        <div className="flex flex-col space-y-6 text-2xl font-bold">
           {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)} // Click karte hi menu band ho jaye
                className="hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;