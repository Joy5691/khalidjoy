import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-900 dark:bg-slate-950 text-white py-12 border-t border-stone-800 dark:border-slate-900 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Let's Connect</h3>
            <p className="text-stone-400 dark:text-slate-400 mb-6 max-w-sm">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  className="w-10 h-10 rounded-full bg-stone-800 dark:bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={link.platform}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${link.platform.toLowerCase()}/white`} 
                    alt={link.platform}
                    className="w-5 h-5"
                    // Fallback to text if icon fails, but simpleicons covers these
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-4">Contact Info</h3>
            <div className="space-y-4 text-stone-300 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white">{PERSONAL_INFO.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 dark:border-slate-900 text-center text-stone-500 dark:text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;