import { motion } from 'framer-motion';
import { FaLightbulb, FaCode, FaTools } from 'react-icons/fa';

const About = () => {
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
          data-text="About Me"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="subheading flex items-center gap-3 mb-6">
                <FaCode className="text-3xl text-[#2196F3]" />
                Professional Summary
              </h3>
              <div className="space-y-4">
                <motion.p 
                  className="text-gray-600 dark:text-gray-400"
                  variants={itemVariants}
                >
                  As a Software Engineering student, I bring a unique blend of technical expertise and 
                  practical experience in modern software development. My journey has equipped me with 
                  hands-on experience in Full-Stack Development, Cloud Infrastructure, and Database 
                  Administration.
                </motion.p>
                <motion.p 
                  className="text-gray-600 dark:text-gray-400"
                  variants={itemVariants}
                >
                  I have a strong foundation in Java Spring Boot, Node.js, and Angular, complemented by 
                  practical knowledge of microservices architecture and DevOps practices. My experience 
                  with tools like Docker, Kubernetes, and Terraform has given me valuable insights into 
                  modern deployment and infrastructure management.
                </motion.p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="subheading flex items-center gap-3 mb-6">
                <FaLightbulb className="text-3xl text-[#FFC107]" />
                Key Strengths
              </h3>
              <div className="space-y-6">
                <motion.div 
                  className="group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-gradient-to-r from-[#2196F3]/10 to-[#FFC107]/10 p-6 rounded-xl transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <FaTools className="text-[#2196F3]" />
                      Adaptability
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      As a freelancer, I've successfully collaborated with diverse clients and teams, 
                      quickly adapting to new technologies, workflows, and project requirements.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-gradient-to-r from-[#2196F3]/10 to-[#FFC107]/10 p-6 rounded-xl transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <FaTools className="text-[#2196F3]" />
                      Attention to Detail
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      I understand that in software development, even small details can significantly 
                      impact project quality and success. My meticulous approach ensures reliable and 
                      maintainable code.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-gradient-to-r from-[#2196F3]/10 to-[#FFC107]/10 p-6 rounded-xl transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <FaTools className="text-[#2196F3]" />
                      Problem-Solving
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      I am passionate about solving complex problems and optimizing system performance. 
                      My approach combines analytical thinking with creative solutions.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About; 