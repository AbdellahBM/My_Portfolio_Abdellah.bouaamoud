import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "C++", level: 75 },
        { name: "C#", level: 70 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Spring Boot", level: 85 },
        { name: "Angular", level: 80 },
        { name: "React", level: 85 },
        { name: "Next.js", level: 75 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Oracle Database", level: 80 },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "CI/CD Pipelines", level: 75 },
        { name: "AWS", level: 80 },
        { name: "Terraform", level: 70 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 75 },
      ],
    },
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
          data-text="Skills & Expertise"
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-[#2196F3] to-[#FFC107] bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-[#2196F3] font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden backdrop-blur-sm">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#2196F3] to-[#FFC107] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16"
          variants={itemVariants}
        >
          <h3 className="subheading text-center mb-8">Additional Skills</h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
          >
            {[
              "Testing (JUnit)",
              "Code Quality Tools",
              "Data Processing",
              "Data Visualization",
              "Scrum",
              "Git",
              "RESTful APIs",
              "Microservices",
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-[#2196F3]/10 to-[#FFC107]/10 text-gray-700 dark:text-gray-300 rounded-full backdrop-blur-sm border border-[#2196F3]/20 hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills; 