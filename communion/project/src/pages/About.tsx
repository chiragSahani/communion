import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, HandHeart } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Community Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    name: 'Michael Chen',
    role: 'Events Coordinator',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    name: 'Priya Patel',
    role: 'Outreach Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
  },
];

const values = [
  { icon: <Heart size={24} className="text-indigo-600" />, title: 'Inclusivity', desc: 'Welcoming all beliefs and backgrounds with open arms.' },
  { icon: <Users size={24} className="text-indigo-600" />, title: 'Community', desc: 'Building strong bonds through shared experiences.' },
  { icon: <Globe size={24} className="text-indigo-600" />, title: 'Understanding', desc: 'Fostering dialogue and cultural exchange.' },
  { icon: <HandHeart size={24} className="text-indigo-600" />, title: 'Service', desc: 'Making a positive impact in our communities.' },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="container mx-auto px-4">
        <Section title="Our Mission" delay={0.2}>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Communion, we believe in the power of bringing people together across different faiths, cultures, and backgrounds to create a more understanding and connected world.
          </p>
        </Section>

        <motion.section initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </motion.section>

        <Section title="Our Team" delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} delay={0.2 * index} />
            ))}
          </div>
        </Section>

        <Section title="Get in Touch" delay={0.8}>
          <p className="text-xl text-gray-600 mb-8">Want to learn more about Communion or get involved? We'd love to hear from you!</p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">Contact Us</button>
        </Section>
      </motion.div>
    </div>
  );
};

const Section = ({ title, children, delay }) => (
  <motion.section initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay }} className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
    {children}
  </motion.section>
);

const ValueCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

const TeamMember = ({ name, role, image, delay }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }} className="bg-white rounded-lg shadow-md p-6 text-center">
    <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
    <h3 className="text-xl font-semibold mb-1">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </motion.div>
);

export default About;
