import React, { useState } from "react";

export default function Experience({ sectionTitle, experiences }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="bg-slate-900 text-white py-20">
      <h2 className="text-3xl font-bold text-center mb-12">{sectionTitle}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto px-4">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-slate-800 p-6 rounded-2xl border border-cyan-500 shadow-xl hover:shadow-cyan-700/30 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Logo & Company */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-14 h-14 object-contain"
                />
                <h3 className="text-2xl font-bold">{exp.company}</h3>
              </div>

              {/* Duration */}
              <p className="text-slate-300 font-semibold mb-4">{exp.duration}</p>

              {/* Tech Stack */}
              {exp.techStack?.length > 0 && (
                <p className="text-slate-300 mb-4 text-sm">
                  <span className="text-cyan-400 font-semibold">Tech Stack:</span>{" "}
                  {exp.techStack.join(", ")}
                </p>
              )}

              {/* Responsibilities */}
              {expandedIndex === idx && (
                <ul className="space-y-3 text-slate-300 text-sm leading-relaxed mb-6 mt-2">
                  {exp.responsibilities.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 text-base mt-[3px]">•</span>
                      <span className="text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Read More Button - bottom right */}
            <div className="flex justify-end mt-auto">
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === idx ? null : idx)
                }
                className="text-cyan-400 text-sm font-medium mt-4 self-end hover:text-cyan-300 hover:underline transition duration-200"
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
