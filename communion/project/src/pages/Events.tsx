import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Filter } from 'lucide-react';
import { Event } from '../types';

const initialEvents: Event[] = [
  { id: '1', title: 'Interfaith Dialog Session', date: '2024-03-25', location: 'Community Center', description: 'Join us for an evening of meaningful discussion and understanding across faiths.', category: 'Religious', image: 'https://res.cloudinary.com/dlyctssmy/image/upload/v1741607964/2607894_370887-PBNJCC-881_bkamlg.jpg' },
  { id: '3', title: 'Community Picnic', date: '2024-03-30', location: 'Central Park', description: 'A fun-filled day of food, games, and community bonding.', category: 'Social', image: 'https://res.cloudinary.com/dlyctssmy/image/upload/v1741608026/4167995_1967_h4iykf.jpg' },
  { id: '2', title: 'Food Drive', date: '2024-04-05', location: 'Local Food Bank', description: 'Help us collect and distribute food to those in need.', category: 'Charity', image: 'https://res.cloudinary.com/dlyctssmy/image/upload/v1741607965/3018131_440231-PENMW5-297_mpj6hk.jpg' }
];

const Events = () => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [newEvent, setNewEvent] = useState({ title: '', date: '', location: '', description: '', category: 'Social' as Event['category'], image: '' });

  const filteredEvents = selectedCategory === 'all' ? events : events.filter(event => event.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const event: Event = { id: Date.now().toString(), ...newEvent };
    setEvents([...events, event]);
    setNewEvent({ title: '', date: '', location: '', description: '', category: 'Social', image: '' });
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-indigo-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-4xl font-bold text-indigo-900 mb-4 md:mb-0">Upcoming Events</h1>
          <div className="flex items-center space-x-4">
            <Filter size={20} className="text-gray-600" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Categories</option>
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
            </select>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
              >
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4
                    ${event.category === 'Religious' ? 'bg-purple-100 text-purple-800' :
                      event.category === 'Social' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}
                  >
                    {event.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-800">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-semibold mb-4">Add New Event</h2>
          <input type="text" placeholder="Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} className="w-full p-2 border rounded mb-2" required />
          <input type="date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} className="w-full p-2 border rounded mb-2" required />
          <input type="text" placeholder="Location" value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} className="w-full p-2 border rounded mb-2" required />
          <textarea placeholder="Description" value={newEvent.description} onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })} className="w-full p-2 border rounded mb-2" required></textarea>
          <input type="text" placeholder="Image URL" value={newEvent.image} onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })} className="w-full p-2 border rounded mb-2" required />
          <select value={newEvent.category} onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value as Event['category'] })} className="w-full p-2 border rounded mb-2">
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Add Event</button>
        </form>
      </div>
    </div>
  );
};

export default Events;
