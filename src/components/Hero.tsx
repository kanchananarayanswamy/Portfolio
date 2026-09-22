import React from 'react';
import {
  Mail,
  ArrowRight,
  Sparkles,
  BrainCircuit,
  Database,
  Terminal,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, PinterestIcon, QuoraIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50">
      {/* Background Decorative Gradients & Particles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-blue-200/40 via-indigo-200/40 to-purple-200/40 blur-3xl -z-10 rounded-full pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300/20 blur-3xl -z-10 rounded-full pointer-events-none animate-pulse-subtle"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300/20 blur-3xl -z-10 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Greeting & Name */}
            <div>
              <p className="text-base sm:text-lg text-slate-600 font-medium tracking-wide flex items-center justify-center lg:justify-start gap-2">
                Hello 👋, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mt-1">
                {PERSONAL_INFO.name}
              </h1>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold gradient-text-primary tracking-tight">
                {PERSONAL_INFO.primaryRole}
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-2.5 flex-wrap pt-1">
                <span className="inline-flex items-center gap-1.5 text-purple-700 font-bold bg-purple-50/90 px-3.5 py-1.5 rounded-xl border border-purple-200/70 text-sm shadow-xs">
                  <BrainCircuit className="w-4 h-4 text-purple-600" />
                  Machine Learning Enthusiast
                </span>
                <span className="inline-flex items-center gap-1.5 text-indigo-700 font-bold bg-indigo-50/90 px-3.5 py-1.5 rounded-xl border border-indigo-200/70 text-sm shadow-xs">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  Technical Trainer
                </span>
              </div>
            </div>

            {/* Professional Tagline */}
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-xs max-w-2xl mx-auto lg:mx-0">
              <p className="text-slate-600 text-sm sm:text-base italic leading-relaxed">
                "{PERSONAL_INFO.tagline}"
              </p>
            </div>

            {/* Key Quick Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-600 flex-wrap">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>900+ Problems Solved</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                <span>Technical Educator</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                <BrainCircuit className="w-4 h-4 text-purple-500" />
                <span>B.E. CSE — Data Science</span>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl text-sm font-bold text-slate-800 bg-white border border-slate-300 shadow-xs hover:bg-slate-50 hover:border-indigo-300 hover:text-indigo-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Let's Connect
                <Sparkles className="w-4 h-4 text-indigo-500" />
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 flex-wrap">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">Profiles:</span>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 hover:shadow-md transition-all duration-200"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-amber-600 hover:text-amber-700 hover:border-amber-300 hover:shadow-md transition-all duration-200 flex items-center justify-center"
                title="LeetCode Profile"
              >
                <LeetCodeIcon className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.socials.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-red-600 hover:text-red-700 hover:border-red-300 hover:shadow-md transition-all duration-200 flex items-center justify-center"
                title="Pinterest Profile"
              >
                <PinterestIcon className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.socials.quora}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-red-700 hover:text-red-800 hover:border-red-400 hover:shadow-md transition-all duration-200 flex items-center justify-center"
                title="Quora Profile"
              >
                <QuoraIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-purple-600 hover:border-purple-300 hover:shadow-md transition-all duration-200"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Graphic & Rounded Card */}
          <div className="lg:col-span-5 relative flex justify-center">

            {/* Main Rounded Card */}
            <div className="relative w-full max-w-md">

              {/* Outer Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-md opacity-30 animate-pulse-subtle"></div>

              <div className="relative bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xl overflow-hidden">

                {/* Profile Image Wrapper */}
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-indigo-50 via-slate-100 to-purple-50 mb-6 group border border-slate-100">
                  <img
                    src="Herop.png"
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80"></div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-2.5 py-1 rounded-md bg-indigo-600/90 text-[11px] font-bold uppercase tracking-wider">
                      Bangalore, India 📍
                    </span>
                    <h3 className="text-xl font-extrabold text-white mt-1">
                      {PERSONAL_INFO.name}
                    </h3>
                  </div>
                </div>

                {/* Sub-Card Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                        <Database className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">Data Science & ML</p>
                        <p className="text-[11px] text-slate-500">Python, SQL, Scikit-learn</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">B.E. CSE</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">Technical Pedagogy</p>
                        <p className="text-[11px] text-slate-500">DSA & Problem Solving Trainer</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md">Educator</span>
                  </div>
                </div>

              </div>

              {/* Floating Node Badges around the Card
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200 shadow-lg animate-float-slow flex items-center gap-2 z-10">
                <span className="text-lg">🐍</span>
                <div>
                  <p className="text-xs font-bold text-slate-800">Python Expert</p>
                  <p className="text-[10px] text-slate-500">Core & Data Stack</p>
                </div>
              </div> */}

              {/* <div className="absolute top-1/3 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200 shadow-lg animate-float-medium flex items-center gap-2 z-10">
                <div className="p-1.5 rounded-lg bg-indigo-100 text-indigo-600">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">ML & Analytics</p>
                  <p className="text-[10px] text-emerald-600 font-semibold">93.99% Model Acc.</p>
                </div>
              </div> */}

              {/* <div className="absolute -bottom-4 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200 shadow-lg animate-float-slow flex items-center gap-2 z-10">
                <div className="p-1.5 rounded-lg bg-amber-100 text-amber-600">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">900+ DSA Solved</p>
                  <p className="text-[10px] text-slate-500">LeetCode & CodeChef</p>
                </div>
              </div> */}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
