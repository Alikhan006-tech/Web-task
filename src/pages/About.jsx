
const About = () => {
  return (
    <section id="about" className="relative py-32 bg-slate-50 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/50 to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Side: Images */}
<div className="relative group">
  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02] cursor-pointer">
    <img 
      src="/about-main.jpg" 
      alt="Our Creative Studio" 
      className="w-full h-125 object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>
  
  <div className="absolute -bottom-10 -right-10 w-72 h-48 hidden md:block rounded-xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 hover:-translate-y-4">
     <img 
      src="/about-sub.jpg"
      alt="Work Culture" 
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
</div>
        {/* Right Side: Text Content */}
        <div className="about-text-container space-y-8">
          <div className="reveal-slide flex items-center gap-4 text-blue-600 font-black uppercase tracking-[0.3em] text-sm">
            <span className="w-12 h-0.5 bg-blue-600"></span>
            About the Agency
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-none">
            Crafting <span className="italic text-blue-600 font-light underline decoration-blue-200">Interactive</span> Legends Since 2026.
          </h2>
          
          <p className="text-gray-600 text-xl leading-relaxed font-light">
            We specialize in complex animations and immersive art galleries. Our goal is to engage visitors through every pixel and interaction.
          </p>

          <ul className="space-y-6">
            {[
              { title: 'Interactive Design', desc: 'Engaging user interfaces with smooth parallax.' },
              { title: 'Complex Animations', desc: 'High-performance GSAP and AOS integration.' }
            ].map((item, idx) => (
              <li key={idx} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-blue-600">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <button className="px-10 py-4 border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-all rounded-full uppercase text-sm tracking-widest">
            Read Our Full Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;