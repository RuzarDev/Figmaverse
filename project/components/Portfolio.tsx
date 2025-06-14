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
      <section id="portfolio" className=
