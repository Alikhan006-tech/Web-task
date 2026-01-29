import { FaArrowRight, FaPlay } from "react-icons/fa";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="overflow-hidden bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Video Background with Animation Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <div className="hero-overlay absolute inset-0 bg-linear-to-b from-black/80 via-black/30 to-black/90 z-10"></div>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
            poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
          <h1 className="reveal-type text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter uppercase">
            Innovating the <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
              Digital Galaxy
            </span>
          </h1>

          <p className="mt-8 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            We are a creative powerhouse delivering interactive art and
            high-performance digital marketing solutions.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="relative group px-10 py-5 bg-blue-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] hover:scale-105 active:scale-95 text-sm uppercase tracking-widest">
              <span className="relative z-10 flex items-center gap-2">
                Start a Project <FaArrowRight />
              </span>
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full opacity-0 group-hover:opacity-10"></div>
            </button>

            <button className="flex items-center gap-3 text-white font-semibold group">
              <span className="w-12 h-12 flex items-center justify-center border border-white/30 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                <FaPlay size={12} />
              </span>
              Watch Reel
            </button>
          </div>
        </div>

        <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-bounce"></div>
      </section>
      {/* About Section */}
      <About />
      {/* Services Section */}
      <section className="py-10">
        <h2 className="text-center text-4xl font-bold mb-10">Our Expertise</h2>
        <Services limit={3} />
      </section>
      {/*  Portfolio Section*/}
      <section className="py-10">
        <h2 className="text-center text-4xl font-bold mb-10">
          Featured Projects
        </h2>
        <Portfolio limit={3} />
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
