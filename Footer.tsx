import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION, EXPERIENCE, ACHIEVEMENTS } from '../constants';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const ExperienceAndEducation: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Briefcase className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-display font-bold text-stone-900 dark:text-white">Experience</h2>
            </motion.div>

            <div className="space-y-12">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative pl-8 border-l-2 border-stone-200 dark:border-slate-700"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900" />
                  <h3 className="text-lg font-bold text-stone-900 dark:text-white">{exp.role}</h3>
                  <div className="text-blue-600 dark:text-blue-400 font-medium mb-1">{exp.company}</div>
                  <div className="text-sm text-stone-500 dark:text-slate-500 mb-4">{exp.period}</div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-stone-600 dark:text-slate-400 text-sm">
                    {exp.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            {/* Achievements Section integrated here */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8 mt-16"
            >
              <Award className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-display font-bold text-stone-900 dark:text-white">Achievements</h2>
            </motion.div>
            <div className="space-y-4">
              {ACHIEVEMENTS.map((ach, i) => (
                <motion.div
                   key={i}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="flex justify-between items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-stone-200 dark:border-slate-700"
                >
                  <span className="font-medium text-stone-800 dark:text-slate-200">{ach.title}</span>
                  <span className="text-sm text-stone-500 bg-stone-100 dark:bg-slate-900 px-2 py-1 rounded">{ach.year}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <GraduationCap className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-display font-bold text-stone-900 dark:text-white">Education</h2>
            </motion.div>

            <div className="space-y-12">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative pl-8 border-l-2 border-stone-200 dark:border-slate-700"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-600 border-4 border-white dark:border-slate-900" />
                  <h3 className="text-lg font-bold text-stone-900 dark:text-white">{edu.degree}</h3>
                  <div className="text-stone-700 dark:text-slate-300 font-medium">{edu.institution}</div>
                  <div className="flex justify-between text-sm text-stone-500 dark:text-slate-500 mb-2">
                    <span>{edu.location}</span>
                    <span>{edu.period}</span>
                  </div>
                  {edu.gpa && (
                    <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-bold px-2 py-1 rounded mb-3">
                      GPA: {edu.gpa}
                    </div>
                  )}
                  {edu.details && (
                    <div className="flex flex-wrap gap-2">
                      {edu.details.map((course) => (
                        <span key={course} className="text-xs border border-stone-300 dark:border-slate-600 rounded px-2 py-0.5 text-stone-600 dark:text-slate-400">
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;