import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Calendar, Rocket } from 'lucide-react';

const skills = [
  { name: 'Digital Marketing', progress: 90, icon: <Target className="w-6 h-6" /> },
  { name: 'Content Creation', progress: 85, icon: <Lightbulb className="w-6 h-6" /> },
  { name: 'Social Media Management', progress: 80, icon: <Users className="w-6 h-6" /> },
  { name: 'Data Analysis', progress: 75, icon: <Rocket className="w-6 h-6" /> },
  { name: 'Project Management', progress: 70, icon: <Calendar className="w-6 h-6" /> },
  { name: 'Email Marketing', progress: 65, icon: <Target className="w-6 h-6" /> },
  { name: 'Creative Problem Solving', progress: 90, icon: <Lightbulb className="w-6 h-6" /> },
  { name: 'Team Leadership', progress: 80, icon: <Users className="w-6 h-6" /> }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Marketing Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-lg font-semibold ml-2 text-rose-600">{skill.name}</h3>
              </div>
              <div className="h-2 bg-indigo-200 rounded-full mb-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${skill.progress}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <p className="text-sm text-gray-600">{skill.progress}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
