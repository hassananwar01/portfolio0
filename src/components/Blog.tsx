import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight, Tag } from 'lucide-react';

const blogPosts = [
  {
    featured: true,
    title: "Machine Learning in Production: Best Practices",
    excerpt: "Learn how to effectively deploy and maintain machine learning models in production environments.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["Machine Learning", "DevOps", "Production"],
    link: "#"
  },
  {
    featured: true,
    title: "Data Engineering Pipeline Design Patterns",
    excerpt: "Explore common design patterns for building robust and scalable data pipelines.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-10",
    readTime: "10 min read",
    tags: ["Data Engineering", "Architecture", "ETL"],
    link: "#"
  },
  {
    title: "Getting Started with Deep Learning",
    excerpt: "A comprehensive guide to understanding and implementing deep learning models.",
    date: "2024-03-05",
    readTime: "12 min read",
    tags: ["Deep Learning", "AI", "Tutorial"],
    link: "#"
  },
  {
    title: "SQL Optimization Techniques",
    excerpt: "Advanced techniques for optimizing SQL queries and database performance.",
    date: "2024-03-01",
    readTime: "6 min read",
    tags: ["SQL", "Performance", "Database"],
    link: "#"
  }
];

export default function Blog() {
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
    <section id="blog" className="py-20 bg-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sharing insights, tutorials, and best practices in data science, engineering, and education.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm flex items-center"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={post.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* All Posts */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">All Posts</h3>
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm flex items-center"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              <motion.a
                href={post.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
                whileHover={{ x: 5 }}
              >
                Read More
                <ChevronRight className="w-4 h-4 ml-1" />
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}