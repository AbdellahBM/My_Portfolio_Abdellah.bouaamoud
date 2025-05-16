import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

interface Certificate {
  name: string;
  issuer: string;
  date?: string;
  link?: string;
}

const Education = () => {
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

  const education: Education[] = [
    {
      degree: "Software Engineering",
      institution: "National School of Applied Sciences",
      location: "Agadir, Morocco",
      period: "2021 - Present",
      description: "Specializing in software development, cloud computing, and artificial intelligence."
    },
    {
      degree: "Preparatory Classes",
      institution: "Lycée Mohammed V",
      location: "Casablanca, Morocco",
      period: "2019 - 2021",
      description: "Intensive preparation in mathematics, physics, and engineering fundamentals."
    }
  ];

  const certificates: Certificate[] = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2023",
      link: "https://www.scrum.org/certificates"
    },
    {
      name: "Java SE 11 Developer",
      issuer: "Oracle",
      date: "2022",
      link: "https://education.oracle.com/java-se-11-developer/pexam_1Z0-819"
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
          data-text="Education & Certifications"
        >
          Education & Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="subheading flex items-center gap-2 mb-8">
              <FaGraduationCap className="text-3xl text-[#2196F3]" />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-semibold bg-gradient-to-r from-[#2196F3] to-[#FFC107] bg-clip-text text-transparent mb-2">
                    {edu.degree}
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 mb-2">
                    {edu.institution}
                  </div>
                  <div className="text-gray-500 dark:text-gray-500 mb-2">
                    {edu.location} • {edu.period}
                  </div>
                  {edu.description && (
                    <p className="text-gray-600 dark:text-gray-400 mt-4 bg-gradient-to-r from-[#2196F3]/10 to-[#FFC107]/10 p-4 rounded-xl backdrop-blur-sm">
                      {edu.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="subheading flex items-center gap-2 mb-8">
              <FaCertificate className="text-3xl text-[#FFC107]" />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-semibold bg-gradient-to-r from-[#2196F3] to-[#FFC107] bg-clip-text text-transparent mb-2">
                    {cert.name}
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 mb-2">
                    {cert.issuer}
                  </div>
                  {cert.date && (
                    <div className="text-gray-500 dark:text-gray-500 mb-4">
                      {cert.date}
                    </div>
                  )}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2196F3]/10 to-[#FFC107]/10 text-[#2196F3] rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      View Certificate
                      <FaCertificate className="text-[#FFC107]" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education; 