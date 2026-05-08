import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaReact, FaNode, FaDatabase, FaGitAlt, FaPython, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNode, color: '#68A063' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'MongoDB', icon: SiMongodb, color: '#13AA52' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#F1502F' },
        { name: 'Database', icon: FaDatabase, color: '#FF6B6B' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">
            My <span className="text-blue-600">Skills</span>
          </motion.h2>

          <div className="space-y-12">
            {skillCategories.map((category) => (
              <motion.div key={category.category} variants={itemVariants}>
                <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                  {category.category}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {category.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center text-center"
                      >
                        <IconComponent
                          size={48}
                          style={{ color: skill.color }}
                          className="mb-3"
                        />
                        <p className="font-semibold text-gray-800">{skill.name}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
