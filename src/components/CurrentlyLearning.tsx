import React from 'react';
import { Compass, Rocket } from 'lucide-react';
import { CURRENTLY_LEARNING } from '../data/portfolioData';

export const CurrentlyLearning: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 relative border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md text-white">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-200 uppercase tracking-widest">
                  Active Focus
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Currently Learning & Exploring
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-xs font-bold text-white">
              <Rocket className="w-4 h-4 text-amber-300" />
              <span>Always Evolving</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CURRENTLY_LEARNING.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 hover:bg-white/20 transition-all duration-200 space-y-2"
              >
                <span className="text-2xl inline-block">{item.icon}</span>
                <h4 className="text-base font-bold text-white leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-indigo-100 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
