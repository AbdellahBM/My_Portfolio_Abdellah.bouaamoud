import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-[#2196F3]" />,
      label: "Email",
      value: "bouaamoudabdellah@gmail.com",
      link: "mailto:bouaamoudabdellah@gmail.com"
    },
    {
      icon: <FaPhone className="text-2xl text-[#FFC107]" />,
      label: "Phone",
      value: "+212-762691442",
      link: "tel:+212762691442"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-[#2196F3]" />,
      label: "Location",
      value: "Agadir, Morocco"
    },
    {
      icon: <FaLinkedin className="text-2xl text-[#FFC107]" />,
      label: "LinkedIn",
      value: "Abdellah Bouaamoud",
      link: "https://www.linkedin.com/in/abdellah-bouaamoud"
    },
    {
      icon: <FaGithub className="text-2xl text-[#2196F3]" />,
      label: "GitHub",
      value: "@bouaamoud",
      link: "https://github.com/bouaamoud"
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
          data-text="Get in Touch"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#2196F3] to-[#FFC107] bg-clip-text text-transparent mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#2196F3]/10 to-[#FFC107]/10 rounded-xl backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  {info.icon}
                  <div>
                    <div className="font-medium text-gray-700 dark:text-gray-300">
                      {info.label}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2196F3] hover:text-[#FFC107] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#2196F3] to-[#FFC107] bg-clip-text text-transparent mb-8">
              Send a Message
            </h3>
            
            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-[#2196F3]/20 focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-[#2196F3]/20 focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20 transition-all duration-300"
                  placeholder="Your email"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-[#2196F3]/20 focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20 transition-all duration-300 h-32"
                  placeholder="Your message"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#2196F3] to-[#FFC107] text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out through any of the channels above or send me a direct message.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact; 