import { motion } from "framer-motion";

export default function Home({
  name = "Your Name",
  subtitle = "Developer",
  description = "Welcome to my portfolio",
  resumeLink = "#",
  imageSrc = "/assets/icons/colorphoto.png",
}) {
  return (
    <section
      id="home"
      className="relative text-white min-h-screen flex items-center bg-[#0f172a] overflow-hidden"
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-20">
        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2 z-10" style={{ paddingTop: "5rem" }}>
          <div className="inline-block bg-blue-900 text-sm px-4 py-1 rounded-md uppercase tracking-widest text-blue-300 mb-4">
            {name}
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-2">
            HAY! I'M {name ? name.split(" ")[0].toUpperCase() : "DEVELOPER"}
          </h1>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6 bg-blue-500 bg-clip-text text-transparent flex flex-wrap"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.04,
                },
              },
            }}
          >
            {(subtitle || "Developer").split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          <p className="text-slate-300 mb-6  leading-relaxed">
            {description}
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            {resumeLink && resumeLink !== "#" && (
              <a
                href={resumeLink}
                download
                className="px-6 py-3 text-sm font-semibold bg-blue-600 hover:bg-blue-500 rounded-full transition duration-300"
              >
                Download CV
              </a>
            )}
          </div>
        </div>

        {/* Right Side - Image & Effects */}
        <div className="w-full lg:w-1/2 relative z-10 flex justify-end mt-12 lg:mt-0">
          <div className="relative w-full max-w-xl">
            {/* Animated Background Circles */}
            <motion.div
              className="absolute w-32 h-32 bg-cyan-400 rounded-full opacity-20 blur-2xl bottom-0 right-10 z-0"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-20 h-20 bg-purple-500 rounded-full opacity-20 blur-2xl top-0 left-0 z-0"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Line Background */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block z-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[280px] h-[2px] bg-white/10 mb-2 rounded-l-full"
                />
              ))}
            </div>

            {/* Image */}
            <motion.img
              src={imageSrc}
              alt="Profile"
              className="relative z-10 object-cover rounded-full border-[6px] border-slate-900 w-[400px] h-[400px] max-w-full mx-auto lg:mx-0"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
