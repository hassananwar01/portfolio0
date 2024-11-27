import React from 'react';
import { motion } from 'framer-motion';
import { Download, BookOpen, Coffee, Rocket } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello, I'm Hassan, a passionate Data Scientist and AI/ML Engineer,
              specializing in scalable data solution development and intelligent
              system engineering. Equipped with Python, SQL, data engineering
              tools, and big data technologies such as Apache Spark, my focus
              remains on creating robust data pipelines to extract meaningful
              insights from complex datasets. My technical journey includes
              tackling real-world challenges such as anti-fraud detection,
              location-based scraping, and data visualization. I am driven by
              innovation and conversion of raw data into impactful solutions for
              decision-making.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, I put together technical knowledge with the art of teaching
              to help others understand the world of data science, engagingly. I
              believe in practical learning and hands-on application of
              concepts.
            </p>
            <div className="flex justify-center">
              <motion.a
                href="/resume.pdf"
                className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                icon: BookOpen,
                title: 'Continuous Learner',
                description:
                  'Always exploring new technologies and methodologies',
              },
              {
                icon: Coffee,
                title: 'Coffee Enthusiast',
                description: 'Powered by coffee and curiosity',
              },
              {
                icon: Rocket,
                title: 'Innovation Driven',
                description: 'Passionate about cutting-edge solutions',
              },
              {
                icon: Image,
                title: 'Design Enthusiast',
                description:
                  'Constantly experimenting with new design trends, tools, and creative approaches.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
