import { motion } from "framer-motion";

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative h-[350px] md:h-[450px] overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer bg-gray-200"
      onClick={() => onClick(project)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8 translate-y-[70%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <span className="text-blue-400 text-[10px] md:text-sm font-bold uppercase tracking-widest mb-1 md:mb-2">
          {project.category}
        </span>
        <h3 className="text-white text-2xl md:text-3xl font-black leading-tight mb-2 md:mb-4">
          {project.title}
        </h3>
        <p className="text-gray-300 text-xs md:text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;