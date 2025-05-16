import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
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

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Capgemini",
      location: "Casablanca, Morocco",
      period: "Jul 2023 - Sep 2023",
      description: [
        "Developed and maintained web applications using Spring Boot and Angular",
        "Implemented RESTful APIs and integrated third-party services",
        "Collaborated with team members using Agile methodologies",
        "Participated in code reviews and testing procedures"
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "OCP Group",
      location: "Benguerir, Morocco",
      period: "Jul 2022 - Aug 2022",
      description: [
        "Worked on internal tools development using Java and Spring Framework",
        "Assisted in database design and optimization",
        "Participated in team meetings and project planning",
        "Learned about enterprise-level software development practices"
      ]
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
          data-text="Professional Experience"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#2196F3] to-[#FFC107] bg-clip-text text-transparent mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <FaBriefcase className="text-[#2196F3]" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#FFC107]" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-[#2196F3]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    variants={itemVariants}
                  >
                    <span className="text-[#2196F3] mt-1.5">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto bg-gradient-to-r from-[#2196F3]/10 to-[#FFC107]/10 backdrop-blur-sm p-6 rounded-xl">
            I am always eager to take on new challenges and contribute to innovative projects. 
            My experience has taught me the importance of continuous learning and adaptation in the fast-paced tech industry.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience; 