import React from 'react';
import {
  Users,
  BrainCircuit,
  CheckCircle2,
  Award,
  BookOpen,
  Calendar
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Combining technical training expertise with hands-on data science & machine learning engineering.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Experience Cards Layout */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {EXPERIENCES.map((exp) => {
            const isTrainer = exp.isFeatured;

            return (
              <div
                key={exp.id}
                className={`relative rounded-3xl transition-all duration-300 ${isTrainer
                  ? 'bg-white border-2 border-indigo-500/80 shadow-xl p-8 sm:p-10 ring-4 ring-indigo-50'
                  : 'bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-md p-6 sm:p-8 hover:shadow-lg'
                  }`}
              >
                {/* Visual Priority Banner for Technical Trainer */}
                {/* {isTrainer && (
                  <div className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs font-extrabold shadow-md uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured Experience</span>
                  </div>
                )} */}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                  {/* Left Role Header */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-2xl ${isTrainer
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'bg-slate-100 text-slate-700'
                          }`}
                      >
                        {isTrainer ? (
                          <Users className="w-6 h-6" />
                        ) : (
                          <BrainCircuit className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <span className={`text-xs font-bold uppercase tracking-wider block ${isTrainer ? 'text-indigo-600' : 'text-slate-500'
                          }`}>
                          {exp.type}
                        </span>
                        <h3 className={`text-xl sm:text-2xl font-extrabold text-slate-900 ${isTrainer ? 'text-indigo-950' : ''
                          }`}>
                          {exp.title}
                        </h3>
                      </div>
                    </div>

                    {/* Date / Month / Year Period Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50/90 border border-indigo-100/90 text-indigo-800 font-bold text-xs shadow-2xs">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{exp.period}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <p className="text-xs font-bold text-slate-700">Focus Areas:</p>
                      <p className="text-xs text-indigo-700 font-semibold leading-relaxed">
                        {exp.companyOrFocus}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.focusTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border ${isTrainer
                            ? 'bg-indigo-50/80 text-indigo-800 border-indigo-100'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                            }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Responsibilities List */}
                  <div className="lg:col-span-8 space-y-4 lg:border-l lg:border-slate-100 lg:pl-8">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-indigo-500" />
                        Key Responsibilities & Contributions
                      </h4>
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                          <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${isTrainer ? 'text-indigo-600' : 'text-blue-500'
                            }`} />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {isTrainer && (
                      <div className="mt-4 p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-indigo-900 font-medium flex items-center gap-2">
                        <Award className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span>Strengthened teaching, curriculum planning, and technical communication through hands-on training.</span>                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
