import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 font-medium text-sm"
            >
              Available for Hire • Graduating 2026
            </motion.div>
            
            <h1 className="font-display text-5xl sm:text-7xl font-bold text-stone-900 dark:text-white leading-tight mb-6">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-stone-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
              {PERSONAL_INFO.about}
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href={PERSONAL_INFO.resumeLink}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-stone-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
              
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-3 bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 rounded-lg shadow-sm text-stone-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {link.icon === 'github' && <Github className="w-5 h-5" />}
                    {link.icon === 'linkedin' && <Linkedin className="w-5 h-5" />}
                    {link.icon === 'mail' && <Mail className="w-5 h-5" />}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0"
          >
             {/* 3D Abstract Representation of Skills */}
            <div className="relative w-full max-w-md aspect-square">
               <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-stone-300 dark:border-slate-700"
               />
               <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 rounded-full border border-stone-200 dark:border-slate-800"
               />
               
               {/* Central Card with Tilt Effect - Full Image */}
               <motion.div
                 whileHover={{ rotateY: 15, rotateX: -5, scale: 1.02 }}
                 className="absolute inset-0 m-auto w-72 h-96 rounded-2xl shadow-2xl overflow-hidden group border border-white/20 dark:border-slate-700/50"
                 style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
               >
                  {/* Background Image */}
                  <img 
                    src={PERSONAL_INFO.photoUrl} 
                    alt={PERSONAL_INFO.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="font-display font-bold text-2xl text-white mb-1 drop-shadow-md">
                      Khalid M. Joy
                    </h3>
                    <p className="text-blue-300 font-medium text-sm mb-3">
                      Full Stack Engineer
                    </p>
                    <div className="h-0.5 w-16 bg-blue-500 mb-3"></div>
                    <p className="text-xs text-stone-300 leading-relaxed line-clamp-3">
                      Transforming complex problems into elegant, scalable solutions through code and creativity.
                    </p>
                  </div>
               </motion.div>

               {/* Floating Skill Icons */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-10 right-0 lg:right-10 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg text-sm font-bold text-blue-600 border border-stone-100 dark:border-slate-700 z-20"
               >
                 React
               </motion.div>
               <motion.div 
                 animate={{ y: [0, 20, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-20 left-0 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg text-sm font-bold text-green-600 border border-stone-100 dark:border-slate-700 z-20"
               >
                 Node.js
               </motion.div>
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                 className="absolute top-1/2 -right-4 lg:right-0 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg text-sm font-bold text-purple-600 border border-stone-100 dark:border-slate-700 z-20"
               >
                 AI/ML
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;