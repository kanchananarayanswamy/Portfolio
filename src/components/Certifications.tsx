import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Eye,
  X,
  Calendar,
  Download,
  FileCheck2,
  Building2
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import type { CertificationItem } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getIssuerBadgeStyle = (issuer: string) => {
    if (issuer.includes('Google')) {
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
    if (issuer.includes('NPTEL')) {
      return 'bg-blue-50 text-blue-700 border-blue-200';
    }
    if (issuer.includes('TCS')) {
      return 'bg-purple-50 text-purple-700 border-purple-200';
    }
    if (issuer.includes('Prinston')) {
      return 'bg-indigo-50 text-indigo-700 border-indigo-200';
    }
    return 'bg-slate-100 text-slate-700 border-slate-200';
  };

  const isPdf = (url: string) => url.toLowerCase().endsWith('.pdf');

  return (
    <section id="certifications" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>CERTIFICATIONS & ACHIEVEMENTS</span>
          </div> */}

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certifications & Achievements
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Professional certifications, industry experience, and competitive programming achievements.
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Responsive Cards Grid: Desktop up to 4 / 3 cols, Tablet 2 cols, Mobile 1 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-indigo-300 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header: Issuer Name & Credential Type Label */}
                <div className="flex items-start justify-between gap-2">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${getIssuerBadgeStyle(cert.issuer)}`}>
                    {cert.issuer}
                  </span>

                  <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50/90 px-2.5 py-0.5 rounded-md border border-indigo-100 shrink-0">
                    {cert.credentialLabel}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {/* Issuer & Year Subtitle */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mt-1.5 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {cert.issued}
                    </span>
                  </div>
                </div>

                {/* Description (1-2 lines) */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cert.description}
                </p>

                {/* Tags */}
                {cert.tags && cert.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-4 mt-5 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex-1 py-2 px-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/60 hover:text-indigo-600 text-xs font-bold text-slate-700 shadow-2xs transition-all flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all border border-slate-200 shadow-2xs"
                    title="Open Document in New Tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* PDF & Document Viewer Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh] animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Navigation Bar */}
            <div className="p-4 sm:px-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/90">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-indigo-600 text-white shadow-sm">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {selectedCert.issuer} • Issued {selectedCert.issued} ({selectedCert.credentialLabel})
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-indigo-600 hover:border-indigo-300 transition-all shadow-2xs"
                  title="Open in Fullscreen Tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Tab</span>
                </a>

                <a
                  href={selectedCert.fileUrl}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700 hover:bg-indigo-100 transition-all"
                  title="Download File"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200/70 transition-colors ml-1"
                  title="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF / Document Viewer */}
            <div className="p-4 sm:p-6 overflow-hidden bg-slate-100/80 flex-1 flex flex-col items-center justify-center min-h-[450px]">
              {isPdf(selectedCert.fileUrl) ? (
                <iframe
                  src={`${selectedCert.fileUrl}#toolbar=1&navpanes=0`}
                  title={selectedCert.title}
                  className="w-full h-[62vh] rounded-2xl border border-slate-200 shadow-inner bg-white"
                />
              ) : (
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md max-w-full">
                  <img
                    src={selectedCert.fileUrl}
                    alt={selectedCert.title}
                    className="w-full h-auto max-h-[62vh] object-contain"
                  />
                </div>
              )}
            </div>

            {/* Modal Bottom Information Strip */}
            <div className="p-4 sm:px-6 border-t border-slate-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-slate-700">Tags:</span>
                {selectedCert.tags && selectedCert.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 font-medium border border-indigo-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
