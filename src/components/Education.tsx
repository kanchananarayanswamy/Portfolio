import React from 'react';
import {
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Building2,
  BrainCircuit,
  CheckCircle2
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const primaryEdu = EDUCATION_DATA.find(e => e.isPrimary) || EDUCATION_DATA[0];
  const secondaryEdu = EDUCATION_DATA.filter(e => !e.isPrimary);

  return (
    <section id="education" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div> */}

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education Timeline
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Academic specialization in Computer Science Engineering and Data Science.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">

          {/* PRIMARY ENGINEERING DEGREE CARD */}
          <div className="relative rounded-3xl bg-white border border-indigo-100 shadow-xl p-7 sm:p-10 ring-4 ring-indigo-50/60 overflow-hidden">

            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

            <div className="space-y-6">

              {/* Header: Title & Institution */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-extrabold uppercase tracking-wider border border-indigo-100">
                      Bachelor of Engineering (B.E.)
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-purple-50 text-purple-700 text-xs font-bold border border-purple-100">
                      <BrainCircuit className="w-3.5 h-3.5 text-purple-600" />
                      Specialization in Data Science
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Computer Science & Engineering
                  </h3>

                  <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm sm:text-base">
                    <Building2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>{primaryEdu.institution}</span>
                  </div>
                </div>

                <div className="shrink-0 flex md:flex-col items-start md:items-end justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                    {primaryEdu.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {primaryEdu.location}
                  </span>
                </div>
              </div>

              {/* 3 Key Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-700 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">CGPA Score</p>
                    <p className="text-base font-extrabold text-slate-900">{primaryEdu.grade}</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700 shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Timeline</p>
                    <p className="text-base font-extrabold text-slate-900">4-Year Degree (2022–2026)</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-100 text-purple-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Campus Location</p>
                    <p className="text-base font-extrabold text-slate-900">Mangalore, Karnataka</p>
                  </div>
                </div>
              </div>

              {/* Coursework Section */}
              {primaryEdu.coursework && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-indigo-500" />
                    Core Academic Coursework & Disciplines
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {primaryEdu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-indigo-50/50 hover:border-indigo-200 text-slate-700 hover:text-indigo-700 text-xs font-semibold border border-slate-200 transition-all flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* SECONDARY ACADEMIC CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {secondaryEdu.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Secondary Education
                    </span>
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                      {edu.grade}
                    </span>
                  </div>

                  <h4 className="text-lg font-extrabold text-slate-900">
                    {edu.degree}
                  </h4>

                  <p className="text-xs text-slate-600 font-medium">
                    {edu.institution}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {edu.location}
                  </span>
                  <span className="text-emerald-600 font-bold">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
