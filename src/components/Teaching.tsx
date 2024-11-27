import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Star } from 'lucide-react';

const courses = [
  {
    title: "Machine Learning Fundamentals",
    description: "A comprehensive course covering the basics of machine learning algorithms and their applications.",
    students: 1200,
    rating: 4.8,
    topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Data Engineering Bootcamp",
    description: "Intensive training program on building scalable data pipelines and ETL processes.",
    students: 800,
    rating: 4.9,
    topics: ["ETL Pipeline", "Data Warehousing", "Big Data Tools"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Data Scientist at Tech Corp",
    content: "The machine learning course was exactly what I needed to advance my career. The practical examples and hands-on projects were invaluable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Michael Chen",
    role: "ML Engineer",
    content: "One of the best online instructors I've had. The way complex concepts are broken down makes them easy to understand.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];

export default function Teaching() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="teaching" className="py-20 bg-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Teaching Portfolio */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Teaching Portfolio</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sharing knowledge and empowering others through comprehensive courses and workshops.
          </p>
        </motion.div>

        {/* Courses */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students} students
                  </span>
                  <span className="flex items-center text-gray-600">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    {course.rating}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Student Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}