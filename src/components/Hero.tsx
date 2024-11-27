import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();

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
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleProjectsClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'projects' } });
    } else {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'contact' } });
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.section
      className="relative min-h-screen-dvh flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="section-container py-20 md:py-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            className="relative mx-auto w-24 h-24 xs:w-32 xs:h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-white shadow-xl mb-6 sm:mb-8"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            <img
              src="https://github.com/hassananwar01/portfolio/blob/main/src/img/03.jpg?raw=true"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="space-y-4 sm:space-y-6 mb-8 sm:mb-10"
            variants={itemVariants}
          >
            <motion.h1
              className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
              variants={itemVariants}
            >
              Hi, I'm{' '}
              <motion.span
                className="text-blue-600"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Hassan Anwar
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-base xs:text-lg sm:text-xl text-gray-600"
              variants={itemVariants}
            >
              Data Scientist | Engineer | Educator
            </motion.p>
            <motion.p
              className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Driving insights and innovation through data science, engineering
              excellence, and passionate teaching.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col xs:flex-row justify-center items-center gap-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={handleProjectsClick}
                className="button-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <motion.span
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: 'easeInOut',
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </motion.button>
              <motion.button
                onClick={handleContactClick}
                className="button-secondary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <motion.span className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-3 xs:gap-4 max-w-lg mx-auto"
            variants={itemVariants}
          >
            {[
              { label: 'Projects Completed', value: '50+' },
              { label: 'Years Experience', value: '2+' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="card card-hover p-3 xs:p-4 sm:p-6"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                }}
              >
                <motion.div
                  className="text-xl xs:text-2xl sm:text-3xl font-bold text-blue-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  className="text-xs xs:text-sm sm:text-base text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
