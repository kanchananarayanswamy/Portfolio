import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, PinterestIcon, QuoraIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 relative overflow-hidden">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-t from-indigo-900/40 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand & Motto */}
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-extrabold tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
              {PERSONAL_INFO.name}
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            </h3>
            <p className="text-slate-400 text-sm italic">
              "Keep learning, keep evolving." 🚀
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-amber-400 hover:text-amber-300 transition-colors flex items-center justify-center"
              title="LeetCode"
            >
              <LeetCodeIcon className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.socials.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-red-400 hover:text-red-300 transition-colors flex items-center justify-center"
              title="Pinterest"
            >
              <PinterestIcon className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.socials.quora}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-red-500 hover:text-red-400 transition-colors flex items-center justify-center"
              title="Quora"
            >
              <QuoraIcon className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Kanchana P. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Aspiring Data Scientist & Technical Trainer • Bangalore, India</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
