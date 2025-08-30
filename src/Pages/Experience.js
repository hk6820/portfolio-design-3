import React, { useState } from "react";

export default function Experience({ sectionTitle, experiences }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="bg-slate-900 text-white py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">{sectionTitle}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-slate-800 border border-slate-600 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
          >
            {/* Company Header with Icon */}
            <div className="flex items-center gap-3 mb-4">
              {exp.companyIcon && (
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-white p-1">
                  <img
                    src={exp.companyIcon}
                    alt={`${exp.employer} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{exp.employer}</h3>
              </div>
            </div>

            {/* Duration */}
            <p className="text-slate-400 text-sm mb-3">{exp.years}</p>

            {/* Tech Stack */}
            {exp.techStack?.length > 0 && (
              <div className="mb-4">
                <span className="text-slate-300 text-sm">Tech Stack: </span>
                <span className="text-slate-400 text-sm">
                  {exp.techStack.join(', ')}
                </span>
              </div>
            )}

            {/* Description */}
            {expandedIndex === idx && exp.description && (
              <div className="text-slate-300 text-sm leading-relaxed mb-4">
                {exp.description.split('\n').map((line, i) => (
                  <p key={i} className="mb-2">
                    {line}
                  </p>
                ))}
              </div>
            )}

            {/* Read More Button */}
            <div className="flex justify-end">
              <button
                onClick={() => toggleReadMore(idx)}
                className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
              >
                {expandedIndex === idx ? "Read less" : "Read more"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
