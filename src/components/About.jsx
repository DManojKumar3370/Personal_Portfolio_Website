import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">
            About <span className="text-blue-600">Me</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image or Avatar */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-lg"></div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design. With 3+ years of experience, 
                I've worked on diverse projects ranging from startups to enterprise applications.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Currently, I'm exploring the intersection of AI and web development, building innovative solutions 
                that solve real-world problems. I love learning new technologies and sharing knowledge with the community.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, 
                or enjoying outdoor activities.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
