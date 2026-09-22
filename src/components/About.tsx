import React from 'react';
import {
  Quote,
  CheckCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <span>🧠 Background & Philosophy</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Narrative & Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">

          {/* Main Narrative Card */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                My Journey & Passion
              </h3>

              {PERSONAL_INFO.aboutText.map((paragraph, index) => (
                <p key={index} className="text-slate-600 text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Micro Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Data Science & Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Technical Training & Mentorship</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Python & SQL Development</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Structured & Clean Code</span>
              </div>
            </div>
          </div>

          {/* Highlighted Quote Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">

            {/* Background Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-purple-500/20 transition-all"></div>

            <Quote className="w-12 h-12 text-indigo-400/40 mb-4" />

            <div className="relative z-10 space-y-4 my-auto">
              <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest">
                My Philosophy
              </p>
              <blockquote className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight">
                "{PERSONAL_INFO.quote}"
              </blockquote>
              <p className="text-sm text-indigo-200/80 italic">
                A core belief that the best way to master technology is to deeply understand its fundamentals and share it simply with others.
              </p>
            </div>

            <div className="pt-6 border-t border-indigo-800/60 flex items-center justify-between text-xs font-semibold text-indigo-300">
              <span>Kanchana P</span>
              <span>Data Science & Technical Trainer</span>
            </div>
          </div>

        </div>

        {/* 6 Feature Grid Cards
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ABOUT_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                {getIcon(item.icon)}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
};
