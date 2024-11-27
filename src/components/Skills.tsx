import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Cloud,
  BarChart3,
  Users,
  Award,
  Languages,
} from 'lucide-react';

const skills = {
  programming: {
    icon: Code2,
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90 },
      // { name: 'R', level: 85 },
      { name: 'SQL', level: 88 },
      // { name: 'JavaScript', level: 82 },
    ],
  },
  tools: {
    icon: Database,
    title: 'Tools & Technologies',
    skills: [
      { name: 'TensorFlow', level: 85 },
      { name: 'Spark', level: 75 },
      { name: 'Docker', level: 78 },
      { name: 'Flask', level: 75 },
      { name: 'Django', level: 70 },
      { name: 'Streamlit', level: 83 },
      { name: 'Git', level: 88 },
    ],
  },
  cloud: {
    icon: Cloud,
    title: 'Cloud Platforms',
    skills: [
      // { name: "AWS", level: 85 },
      { name: 'Azure', level: 75 },
      // { name: "GCP", level: 75 }
    ],
  },
  visualization: {
    icon: BarChart3,
    title: 'Data Visualization',
    skills: [
      { name: 'Tableau', level: 75 },
      { name: 'Power BI', level: 85 },
      { name: 'Matplotlib', level: 75 },
    ],
  },
  soft: {
    icon: Users,
    title: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Communication', level: 90 },
      { name: 'Leadership', level: 85 },
    ],
  },

  Language: {
    icon: Languages,
    title: 'Languages',
    skills: [
      { name: 'Arabic', level: 100 },
      { name: 'English', level: 85 },
    ],
  },
};

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    date: '2023',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&q=80',
  },
  {
    title: 'Google Professional Data Engineer',
    organization: 'Google Cloud',
    date: '2023',
    image:
      'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&w=200&q=80',
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Object.values(skills).map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <motion.div
                      className="h-2 bg-gray-200 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="h-full bg-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center">
            <Award className="w-6 h-6 text-blue-600 mr-2" />
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-shrink-0">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                  <p className="text-sm text-blue-600">{cert.organization}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
