'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern e-commerce platform with intuitive user experience and seamless checkout process.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      client: 'TechCorp',
      year: '2024'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile Design',
      image: 'https://images.pexels.com/photos/4473775/pexels-photo-4473775.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Secure and user-friendly mobile banking application with advanced features.',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      client: 'FinanceBank',
      year: '2024'
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      category: 'Dashboard Design',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive analytics dashboard for business intelligence and data visualization.',
      technologies: ['Vue.js', 'D3.js', 'Python'],
      client: 'DataInsights',
      year: '2023'
    },
    {
      id: 4,
      title: 'Healthcare Platform',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Telemedicine platform connecting patients with healthcare professionals.',
      technologies: ['Next.js', 'WebRTC', 'PostgreSQL'],
      client: 'MedConnect',
      year: '2023'
    },
    {
      id: 5,
      title: 'Social Media App',
      category: 'Mobile Design',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Social networking platform focused on creative professionals and portfolio sharing.',
      technologies: ['Flutter', 'GraphQL', 'AWS'],
      client: 'CreativeHub',
      year: '2023'
    },
    {
      id: 6,
      title: 'Learning Management System',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive LMS for online education with interactive learning tools.',
      technologies: ['Angular', 'Node.js', 'Redis'],
      client: 'EduTech',
      year: '2022'
    }
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest projects and see how we transform ideas into digital masterpieces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-purple-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all duration-200"
              >
                <X className="h-6 w-6 text-gray-900" />
              </button>
            </div>
            <div className="p-8">
              <div className="text-sm text-purple-600 font-semibold mb-2">{selectedProject.category}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Client</h4>
                  <p className="text-gray-600">{selectedProject.client}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Year</h4>
                  <p className="text-gray-600">{selectedProject.year}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200">
                View Live Project
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;