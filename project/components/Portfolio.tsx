'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef, useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  client: string;
  year: string;
};

const Portfolio = () => {
  const ref = useRef(null);
  const { ref: inViewRef, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern e-commerce platform with intuitive user experience and seamless checkout process.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      client: 'TechCorp',
      year: '2024',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile Design',
      image: 'https://images.pexels.com/photos/4473775/pexels-photo-4473775.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Secure and user-friendly mobile banking application with advanced features.',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      client: 'FinanceBank',
      year: '2024',
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      category: 'Dashboard Design',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive analytics dashboard for business intelligence and data visualization.',
      technologies: ['Vue.js', 'D3.js', 'Python'],
      client: 'DataInsights',
      year: '2023',
    },
    {
      id: 4,
      title: 'Healthcare Platform',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Telemedicine platform connecting patients with healthcare professionals.',
      technologies: ['Next.js', 'WebRTC', 'PostgreSQL'],
      client: 'MedConnect',
      year: '2023',
    },
    {
      id: 5,
      title: 'Social Media App',
      category: 'Mobile Design',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Social networking platform focused on creative professionals and portfolio sharing.',
      technologies: ['Flutter', 'GraphQL', 'AWS'],
      client: 'CreativeHub',
      year: '2023',
    },
    {
      id: 6,
      title: 'Learning Management System',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive LMS for online education with interactive learning tools.',
      technologies: ['Angular', 'Node.js', 'Redis'],
      client: 'EduTech',
      year: '2022',
    },
  ];

  return (
      <section id="portfolio" className="py-16 px-4 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <motion.div
                    key={project.id}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-100 rounded-lg shadow-md overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                >
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-600">{project.category}</p>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>

        {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg max-w-xl w-full relative">
                <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                >
                  <X size={24} />
                </button>
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-56 object-cover rounded-md mb-4" />
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-gray-700 mb-2">{selectedProject.description}</p>
                <p className="text-sm text-gray-500 mb-1"><strong>Client:</strong> {selectedProject.client}</p>
                <p className="text-sm text-gray-500 mb-1"><strong>Year:</strong> {selectedProject.year}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-200 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
                  ))}
                </div>
              </div>
            </div>
        )}
      </section>
  );
};

export default Portfolio;
