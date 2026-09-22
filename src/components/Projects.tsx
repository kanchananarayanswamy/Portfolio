import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Activity
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = PROJECTS.find(p => p.featured) || PROJECTS[0];
  const regularProjects = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <span>🚀 Portfolio Showcase</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Data Science, Supervised Machine Learning, Computer Vision, and Data Analytics implementations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* FEATURED PROJECT CARD (Prominent & Visually Larger) */}
        <div className="mb-12">
          <div className="relative rounded-3xl bg-white border-2 border-indigo-500/80 shadow-2xl p-8 sm:p-12 overflow-hidden group">

            {/* Top Right Highlight Tag */}
            {/* <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs font-extrabold shadow-md uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Featured Project</span>
            </div> */}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">

                <div>
                  <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest block mb-1">
                    {featuredProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {featuredProject.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-base leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Key Metrics Display */}
                {featuredProject.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                    {featuredProject.metrics.map((m, idx) => (
                      <div key={idx} className="bg-indigo-50/80 border border-indigo-100 p-3 rounded-2xl text-center">
                        <p className="text-xl font-extrabold text-indigo-700">{m.value}</p>
                        <p className="text-[11px] font-bold text-slate-600 mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlights Summary */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Core Technical Accomplishments:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {featuredProject.highlights.slice(0, 4).map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <span>View Project Blueprint & Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-2xl bg-white border border-slate-300 text-slate-800 font-bold text-xs hover:bg-slate-50 hover:border-indigo-300 transition-colors flex items-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Code</span>
                  </a>
                </div>

              </div>

              {/* Right Decorative Feature Box */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-6 relative overflow-hidden">

                  <div className="flex items-center justify-between pb-4 border-b border-indigo-800/80">
                    <div className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-indigo-400" />
                      <span className="text-xs font-bold tracking-wider text-indigo-200">ML Pipeline Breakdown</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-mono font-bold">
                      Random Forest
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-xs text-indigo-100">
                    <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/60 flex items-center justify-between">
                      <span className="text-indigo-300">Preprocessing & Scaling:</span>
                      <span className="text-emerald-400 font-bold">Completed</span>
                    </div>
                    <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/60 flex items-center justify-between">
                      <span className="text-indigo-300">Model Evaluation:</span>
                      <span className="text-indigo-200 font-bold">4 Algorithms Benchmarked</span>
                    </div>
                    <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/60 flex items-center justify-between">
                      <span className="text-indigo-300">Unseen Provider Scoring:</span>
                      <span className="text-amber-400 font-bold">1,353 Evaluated</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-indigo-600/30 border border-indigo-500/30 text-center">
                    <p className="text-2xl font-extrabold text-white">83 Fraudulent Providers</p>
                    <p className="text-xs text-indigo-200 mt-1">Successfully flagged for high-risk audit</p>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

        {/* REGULAR PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">

                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                    {proj.category}
                  </span>
                  {proj.metrics && proj.metrics[0] && (
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                      {proj.metrics[0].value} {proj.metrics[0].label}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {proj.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-2">
                  {proj.highlights.slice(0, 3).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5"></span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 space-y-4">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
