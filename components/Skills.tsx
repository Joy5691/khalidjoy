import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Code2, Globe, Cpu, Database, PenTool } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Languages': return <Code2 />;
      case 'Web & Mobile': return <Globe />;
      case 'AI & Data': return <Cpu />;
      case 'Tools & DevOps': return <Database />;
      case 'Design': return <PenTool />;
      default: return <Code2 />;
    }
  };

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-stone-900 dark:text-white mb-4">Technical Expertise</h2>
          <p className="text-stone-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolbelt of languages, frameworks, and tools I use to build scalable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4 text-blue-600 dark:text-blue-400">
                {getIcon(category.name)}
                <h3 className="font-bold text-lg text-stone-900 dark:text-white">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300 text-sm rounded-full border border-stone-200 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;