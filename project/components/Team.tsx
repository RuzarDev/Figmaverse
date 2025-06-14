'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Twitter, Dribbble } from 'lucide-react';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With 8+ years in design, Sarah leads our creative vision and ensures every project exceeds expectations.',
      social: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#'
      }
    },
    {
      name: 'Marcus Johnson',
      role: 'UX Designer',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Marcus specializes in user research and creates intuitive experiences that users love and remember.',
      social: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'UI Designer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Emily brings visual concepts to life with pixel-perfect designs and attention to every detail.',
      social: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#'
      }
    },
    {
      name: 'David Kim',
      role: 'Brand Strategist',
      image: 'https://images.pexels.com/photos/3777564/pexels-photo-3777564.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'David develops comprehensive brand strategies that connect with audiences and drive business growth.',
      social: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#'
      }
    }
  ];

  return (
    <section id="team" className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate designers and strategists dedicated to bringing your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-purple-100 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-purple-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-purple-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>

              <div className="flex justify-center space-x-4">
                <a
                  href={member.social.linkedin}
                  className="text-gray-400 hover:text-purple-600 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={member.social.twitter}
                  className="text-gray-400 hover:text-purple-600 transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={member.social.dribbble}
                  className="text-gray-400 hover:text-purple-600 transition-colors duration-200"
                >
                  <Dribbble className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;