import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const projects = [
    {
      title: "AI-Powered Portfolio Generator",
      description: "A web application that uses AI to automatically generate professional portfolios from user data. Built with Next.js, OpenAI API, and MongoDB.",
      image: "/projects/portfolio.png",
      githubLink: "https://github.com/yourusername/portfolio-generator",
      liveLink: "https://portfolio-generator.demo.com",
      technologies: ["Next.js", "OpenAI", "MongoDB", "Tailwind CSS"]
    },
    {
      title: "Smart Task Manager",
      description: "An intelligent task management system with AI-driven prioritization and time estimation. Integrates with popular calendar apps.",
      image: "/projects/taskmanager.png",
      githubLink: "https://github.com/yourusername/smart-task-manager",
      liveLink: "https://smart-task-manager.demo.com",
      technologies: ["React", "Node.js", "Express", "PostgreSQL"]
    },
    {
      title: "E-Learning Platform",
      description: "A comprehensive e-learning platform with interactive courses, real-time collaboration, and progress tracking.",
      image: "/projects/elearning.png",
      githubLink: "https://github.com/yourusername/elearning-platform",
      liveLink: "https://elearning-platform.demo.com",
      technologies: ["Angular", "Spring Boot", "MySQL", "WebSocket"]
    }
  ];

  return (
    <motion.div 
      className="min-h-screen relative flex flex-col items-center justify-center py-20 overflow-hidden grid-texture"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/5 dark:to-white/5" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2196F3]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FFC107]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="heading text-center mb-16 retro-font name-3d"
          variants={itemVariants}
          data-text="Featured Projects"
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
        {projects.map((project, index) => (
            <motion.div
            key={index}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
          >
            {project.image && (
                <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
            )}
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-[#2196F3] to-[#FFC107] bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-[#2196F3] transition-colors"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-[#FFC107] transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                  <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-[#2196F3]/10 to-[#FFC107]/10 text-gray-700 dark:text-gray-300 rounded-full backdrop-blur-sm border border-[#2196F3]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2196F3] to-[#FFC107] text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <FaGithub className="text-xl" />
            View More Projects
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects; 