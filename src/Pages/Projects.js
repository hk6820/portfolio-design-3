import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Projects({ sectionTitle, projects }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    className: "projects-slider",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section id="projects" className="bg-[#0f172a] text-white py-20">
      <h2 className="text-3xl font-bold text-center mb-12">{sectionTitle}</h2>

      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-4 h-full">
            <div className="bg-[#111827] border border-slate-700 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full min-h-[520px]">
              {/* Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-md mb-4 h-40 object-cover w-full"
                />
              )}

              {/* Title & Description */}
              <h3 className="text-lg font-bold mb-2 text-left">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 text-left line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4 text-left">
                <span className="text-xs text-slate-500">Tech Used:</span>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((t, i) => (
                    <li
                      key={i}
                      className="bg-slate-700 text-xs px-2 py-1 rounded-full text-white"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="mt-auto flex flex-wrap justify-between gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundImage: 'linear-gradient(to right,rgb(0, 32, 240),rgb(0, 175, 223))',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    display: 'inline-block',
                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  View Project
                </a>

                {project.link && project.link.includes('github') && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white px-4 py-2 rounded-full text-sm font-medium hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
