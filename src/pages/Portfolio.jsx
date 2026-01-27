import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  { id: 1, title: "Nexus E-com", category: "Web", image: "/portfolio/p1.jpg", description: "A high-end luxury fashion store with minimalist UI." },
  { id: 2, title: "Vitals App", category: "Mobile", image: "/portfolio/p2.jpg", description: "User-centric healthcare tracking with interactive bio-metrics." },
  { id: 3, title: "Apex Identity", category: "Branding", image: "/portfolio/p3.jpg", description: "Modern visual system for a global architecture firm." },
  { id: 4, title: "Crypto Flow", category: "Web", image: "/portfolio/p4.jpg", description: "Live data dashboard for real-time crypto analytics." },
  { id: 5, title: "Roam Guide", category: "Mobile", image: "/portfolio/p5.jpg", description: "Navigation and discovery app for outdoor enthusiasts." },
  { id: 6, title: "Nova Logo", category: "Branding", image: "/portfolio/p6.jpg", description: "Identity design for a next-gen aerospace startup." },
];

const categories = ["All", "Web", "Mobile", "Branding"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"; // Modal khulne par background scroll lock
      window.history.pushState({ modalOpen: true }, "");
    } else {
      document.body.style.overflow = "auto";
    }
    const handleBackButton = () => {
      if (selectedProject) setSelectedProject(null);
    };
    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const closeModal = () => {
    setSelectedProject(null);
    if (window.history.state?.modalOpen) window.history.back();
  };

  const filteredProjects = filter === "All" ? projectsData : projectsData.filter((p) => p.category === filter);

  return (
    <div className="bg-white pt-24 md:pt-32 pb-20 px-4 md:px-6 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Responsive Header */}
        <div className="relative mb-12 md:mb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[12rem] font-black uppercase tracking-tighter text-gray-50 absolute -top-8 md:-top-16 left-0 right-0 -z-10 select-none overflow-hidden"
          >
            Work
          </motion.h1>
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tight">
            Our Selected Work
          </h2>
        </div>

        {/* Filter Bar - Mobile Friendly */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 md:px-10 md:py-4 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                filter === cat ? "bg-black text-white shadow-xl" : "bg-gray-100 text-gray-400 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal UI - Optimized for Mobile */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-start md:items-center justify-center p-4 md:p-12 overflow-y-auto"
            >
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="fixed top-5 right-5 z-[110] text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all cursor-pointer"
              >
                <X size={20} />
              </button>
              
              <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center py-10">
                <motion.img 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  src={selectedProject.image} 
                  className="rounded-2xl md:rounded-[2.5rem] shadow-2xl w-full h-[300px] md:h-auto object-cover"
                />
                <div className="text-white px-2">
                  <span className="text-blue-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-4 block">
                    {selectedProject.category} Project
                  </span>
                  <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-8 leading-tight tracking-tighter">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-400 text-base md:text-xl leading-relaxed mb-6 md:mb-10 font-light">
                    {selectedProject.description}
                  </p>
                  <button className="group flex items-center justify-center md:justify-start gap-4 bg-white text-black py-4 md:py-5 px-8 md:px-10 rounded-full font-bold uppercase text-sm w-full md:w-fit hover:bg-blue-600 hover:text-white transition-all duration-300">
                    Explore Case Study
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}