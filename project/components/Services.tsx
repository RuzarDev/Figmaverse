'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Globe, Zap } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const services = [
    {
      icon: Palette,
      title: 'UI Design',
      description: 'Beautiful, intuitive interfaces that users love. We create pixel-perfect designs that combine aesthetics with functionality.',
      features: ['User Interface Design', 'Design Systems', 'Mobile-First Approach', 'Accessibility Focus']
    },
    {
      icon: Globe,
      title: 'Web Prototypes',
      description: 'Interactive prototypes that bring your ideas to life. Test and validate concepts before development begins.',
      features: ['Interactive Prototypes', 'User Testing', 'Wireframing', 'Flow Optimization']
    },
    {
      icon: Zap,
      title: 'Branding',
      description: 'Complete brand identity solutions that make you stand out. From logos to brand guidelines, we cover it all.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Marketing Materials']
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive design solutions to transform your digital presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl hover:shadow-purple-100 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-200 flex items-center">
                    Learn More
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;