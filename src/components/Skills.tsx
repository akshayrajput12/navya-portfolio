import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Calendar, Rocket } from 'lucide-react';

const skills = [
  { name: 'Digital Marketing', level: 90, icon: <Target className="w-6 h-6" /> },
  { name: 'Content Creation', level: 85, icon: <Lightbulb className="w-6 h-6" /> },
  { name: 'Social Media Management', level: 80, icon: <Users className="w-6 h-6" /> },
  { name: 'Data Analysis', level: 75, icon: <Rocket className="w-6 h-6" /> },
  { name: 'Project Management', level: 70, icon: <Calendar className="w-6 h-6" /> },
  { name: 'Email Marketing', level: 65, icon: <Target className="w-6 h-6" /> },
  { name: 'Creative Problem Solving', level: 60, icon: <Lightbulb className="w-6 h-6" /> },
  { name: 'Team Leadership', level: 55, icon: <Users className="w-6 h-6" /> }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Marketing Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h4 className="font-bold text-lg ml-2 text-rose-600">{skill.name}</h4>
              </div>
              <div className="h-2 bg-gray-200 rounded relative overflow-hidden mb-2">
                <motion.div
                  className={`h-full bg-rose-500 rounded`} 
                  style={{ width: `${skill.level}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <p className="text-gray-500 text-sm">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
