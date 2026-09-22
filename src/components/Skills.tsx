import React, { useState } from 'react';
import {
  Code2,
  BrainCircuit,
  Cpu,
  PieChart,
  Database,
  Wrench,
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.category)];

  const filteredCategories = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code2 className="w-5 h-5 text-blue-500" />;
      case 'Data Science':
        return <BrainCircuit className="w-5 h-5 text-indigo-500" />;
      case 'Machine Learning':
        return <Cpu className="w-5 h-5 text-purple-500" />;
      case 'Data Visualization':
        return <PieChart className="w-5 h-5 text-pink-500" />;
      case 'Databases':
        return <Database className="w-5 h-5 text-emerald-500" />;
      case 'Tools & Frameworks':
        return <Wrench className="w-5 h-5 text-amber-500" />;
      default:
        return <Layers className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <span>⚡ Technical Stack</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Categorized technical toolkit spanning Data Science, Machine Learning, Analytics, and Engineering.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${isActive
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900'
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((catItem, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/80">
                  <div className="p-2.5 rounded-xl bg-white shadow-xs border border-slate-100">
                    {getCategoryIcon(catItem.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {catItem.category}
                    </h3>
                  </div>
                </div>

                {/* Skill Items list */}
                <div className="space-y-3">
                  {catItem.skills.map((sk, sIdx) => (
                    <div
                      key={sIdx}
                      className="group bg-white p-3 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-indigo-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform"></span>
                        <span className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                          {sk}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              {/* <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                <span>Hover to inspect</span>
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              </div> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
