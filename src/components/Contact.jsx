import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:your-email@example.com',
      color: '#EA4335',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/yourusername',
      color: '#181717',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourprofile',
      color: '#0A66C2',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">
            Get <span className="text-blue-400">In Touch</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-semibold">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your-email@example.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-400 text-center font-semibold"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>

              <div className="space-y-6">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <div
                        className="p-3 rounded-lg text-white"
                        style={{ backgroundColor: link.color }}
                      >
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <p className="font-semibold">{link.label}</p>
                        <p className="text-gray-400 text-sm">
                          {link.label === 'Email'
                            ? 'Send me an email'
                            : `Visit my ${link.label} profile`}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-12 p-6 bg-gray-700 rounded-lg">
                <p className="text-gray-300">
                  <span className="font-semibold text-blue-400">Available for:</span> Freelance projects,
                  full-time opportunities, and interesting collaborations.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
