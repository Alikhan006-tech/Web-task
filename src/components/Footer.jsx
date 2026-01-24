import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Brand & Bio */}
        <div className="space-y-6">
          <div className="font-black text-3xl tracking-tighter">
            STUDIO<span className="text-blue-600">.</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            We are a creative agency specializing in building immersive digital experiences that engage and inspire.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons with Pulse/Bounce Effect */}
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" }
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.link}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Services</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#services" className="hover:text-blue-500 transition-colors duration-300 flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
              UI/UX Design
            </a></li>
            <li><a href="#services" className="hover:text-blue-500 transition-colors duration-300 flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
              Web Development
            </a></li>
            <li><a href="#services" className="hover:text-blue-500 transition-colors duration-300 flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
              Digital Marketing
            </a></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#about" className="hover:text-white transition-colors duration-300">About Us</a></li>
            <li><a href="#portfolio" className="hover:text-white transition-colors duration-300">Our Portfolio</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact Team</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Newsletter</h4>
          <p className="text-gray-400 mb-6 text-sm">Subscribe to get the latest creative updates and news.</p>
          <form className="relative group">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full bg-gray-900/50 border border-gray-800 p-4 pr-12 rounded-lg focus:outline-none focus:border-blue-600 transition-all text-sm"
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 p-2.5 rounded-md hover:bg-blue-700 transition-all active:scale-90 text-white"
            >
              <FaPaperPlane size={14} />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 pt-8 border-t border-gray-900/50 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
        <p>© 2026 CREATIVE STUDIO. HANDCRAFTED WITH PASSION.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">TERMS</a>
          <a href="#" className="hover:text-white transition">COOKIES</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;