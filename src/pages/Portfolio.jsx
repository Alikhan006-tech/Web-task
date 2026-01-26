import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Nexus E-com",
    category: "Web",
    image: "/portfolio/p1.jpg",
    description: "A high-end luxury fashion store with minimalist UI.",
  },
  {
    id: 2,
    title: "Vitals App",
    category: "Mobile",
    image: "/portfolio/p2.jpg",
    description:
      "User-centric healthcare tracking with interactive bio-metrics.",
  },
  {
    id: 3,
    title: "Apex Identity",
    category: "Branding",
    image: "/portfolio/p3.jpg",
    description: "Modern visual system for a global architecture firm.",
  },
  {
    id: 4,
    title: "Crypto Flow",
    category: "Web",
    image: "/portfolio/p4.jpg",
    description: "Live data dashboard for real-time crypto analytics.",
  },
  {
    id: 5,
    title: "Roam Guide",
    category: "Mobile",
    image: "/portfolio/p5.jpg",
    description: "Navigation and discovery app for outdoor enthusiasts.",
  },
  {
    id: 6,
    title: "Nova Logo",
    category: "Branding",
    image: "/portfolio/p6.jpg",
    description: "Identity design for a next-gen aerospace startup.",
  },
];

const categories = ["All", "Web", "Mobile", "Branding"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      window.history.pushState({ modalOpen: true }, "");
    }
    const handleBackButton = () => {
      if (selectedProject) setSelectedProject(null);
    };
    window.addEventListener("popstate", handleBackButton);
    return () => window.removeEventListener("popstate", handleBackButton);
  }, [selectedProject]);

  const closeModal = () => {
    setSelectedProject(null);
    if (window.history.state?.modalOpen) window.history.back();
  };

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <div className="bg-white pt-32 pb-20 px-6 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Parallax UI Header */}
        <div className="relative mb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter text-gray-50 absolute -top-16 left-0 right-0 -z-10 select-none"
          >
            Portfolio
          </motion.h1>
          <h2 className="text-5xl font-black uppercase italic tracking-tight">
            Our Selected Work
          </h2>
        </div>

        {/* Filter Bar UI */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? "bg-black text-white shadow-2xl"
                  : "bg-gray-100 text-gray-400 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </div>
  );
}
