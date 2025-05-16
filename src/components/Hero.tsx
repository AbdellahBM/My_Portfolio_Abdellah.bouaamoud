import { FaLinkedin, FaEnvelope, FaPhone, FaCube, FaDatabase, FaCode, FaServer, FaBrain } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
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

  // 3D Shapes configuration
  const shapes = [
    { Icon: FaCube, color: 'from-[#2196F3] to-[#0D47A1]', top: '15%', left: '10%', size: 'w-16 h-16', delay: 0 },
    { Icon: FaDatabase, color: 'from-[#FFC107] to-[#FFA000]', top: '25%', right: '15%', size: 'w-12 h-12', delay: 1 },
    { Icon: FaCode, color: 'from-[#1976D2] to-[#0D47A1]', bottom: '20%', left: '20%', size: 'w-14 h-14', delay: 2 },
    { Icon: FaServer, color: 'from-[#FFD54F] to-[#FFB300]', top: '40%', right: '25%', size: 'w-10 h-10', delay: 3 },
    { Icon: FaBrain, color: 'from-[#42A5F5] to-[#1976D2]', bottom: '30%', right: '10%', size: 'w-16 h-16', delay: 4 },
  ];

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen text-center pt-20 overflow-hidden grid-texture"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* 3D Shapes */}
      {shapes.map(({ Icon, color, top, left, right, bottom, size, delay }, index) => (
        <motion.div
          key={index}
          className={`shape absolute ${size}`}
          style={{ top, left, right, bottom }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: delay * 0.2, duration: 0.5 }}
        >
          <div className={`w-full h-full rounded-xl bg-gradient-to-br ${color} p-3 shadow-lg transform rotate-12 backdrop-blur-sm hover:shadow-2xl hover:scale-110 transition-all duration-300`}>
            <Icon className="w-full h-full text-white/90" />
          </div>
        </motion.div>
      ))}

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/5 dark:to-white/5" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2196F3]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FFC107]/20 rounded-full blur-3xl" />
      </div>

      <motion.h1 
        className="text-6xl md:text-7xl font-bold mb-4 retro-font name-3d"
        variants={itemVariants}
        data-text="Abdellah BOUAAMOUD"
      >
        Abdellah BOUAAMOUD
      </motion.h1>

      <motion.h2 
        className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 code-font"
        variants={itemVariants}
      >
        &lt; Software Engineer Student /&gt;
      </motion.h2>

      <motion.div 
        className="relative text-lg max-w-2xl mb-8 quote-box"
        variants={itemVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2196F3]/10 to-[#FFC107]/10 transform -skew-x-6"></div>
        <div className="relative p-8 backdrop-blur-sm border-l-4 border-[#2196F3]">
          <div className="font-light leading-relaxed text-gray-700 dark:text-gray-300">
            <span className="text-[#2196F3] text-xl font-semibold">"</span>
            <span className="italic">
              Passionate about building innovative solutions and solving complex problems through technology.
              Experienced in Full-Stack Development, Cloud Infrastructure, and Database Administration.
            </span>
            <span className="text-[#FFC107] text-xl font-semibold">"</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-8"
        variants={itemVariants}
      >
        <motion.a
          href="https://www.linkedin.com/in/abdellah-bouaamoud"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2196F3] to-[#1976D2] text-white rounded-full hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(33, 150, 243, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin className="text-xl" />
          LinkedIn
        </motion.a>

        <motion.a
          href="mailto:bouaamoudabdellah@gmail.com"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFC107] to-[#FFB300] text-white rounded-full hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 193, 7, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope className="text-xl" />
          Email
        </motion.a>

        <motion.a
          href="tel:+212762691442"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#42A5F5] to-[#1976D2] text-white rounded-full hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(66, 165, 245, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPhone className="text-xl" />
          Call
        </motion.a>
      </motion.div>

      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
        variants={itemVariants}
      >
        <motion.div 
          className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-gradient-to-r from-[#2196F3]/5 to-[#1976D2]/5 backdrop-blur-sm px-6 py-3 rounded-full border border-[#2196F3]/20"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(33, 150, 243, 0.2)" }}
        >
          <FaEnvelope className="text-xl text-[#2196F3]" />
          <span className="code-font">bouaamoudabdellah@gmail.com</span>
        </motion.div>

        <motion.div 
          className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-gradient-to-r from-[#FFC107]/5 to-[#FFB300]/5 backdrop-blur-sm px-6 py-3 rounded-full border border-[#FFC107]/20"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 193, 7, 0.2)" }}
        >
          <FaPhone className="text-xl text-[#FFC107]" />
          <span className="code-font">+212-762691442</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero; 