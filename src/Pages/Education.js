import React from "react";

export default function Education({ sectionTitle, education }) {
  return (
    <section id="education" className="bg-slate-900 text-white py-20">
      <h2 className="text-3xl font-bold text-center mb-12">{sectionTitle}</h2>

      {/* Grid: 1 column on small, 2 on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto px-4">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-slate-800 border border-cyan-500 rounded-xl p-6 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-white mb-1">
              🎓 {edu.degree}
            </h3>
            <p className="text-xl font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8">{edu.institution}</p>
            <p className="text-sm text-slate-400 mb-3">{edu.duration}</p>
            <p className="text-slate-300">{edu.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
