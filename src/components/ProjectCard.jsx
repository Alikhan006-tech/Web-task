import { motion } from "framer-motion";

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative h-100 overflow-hidden rounded-3xl cursor-pointer bg-gray-200"
      onClick={() => onClick(project)}
    >
      {/* Zoom & Rotate Effect on Hover */}
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <span className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-2">
          {project.category}
        </span>
        <h3 className="text-white text-3xl font-black leading-tight mb-4">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
