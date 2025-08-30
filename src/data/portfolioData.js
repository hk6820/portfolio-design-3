// Portfolio Configuration File
// Users can easily customize their portfolio by editing this file
//
// 📁 IMPORTANT: File Locations
// - Put your profile photo in: /public/assets/your-photo.jpg
// - Put your resume in: /public/assets/resume.pdf  
// - Put project images in: /public/assets/project1.jpg, project2.jpg, etc.
// - Then update the paths below to match your file names

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Alex Johnson", // ✏️ Replace with your full name
    title: "Full Stack Developer", // ✏️ Replace with your job title
    subtitle: "Hello, I'm", // ✏️ Customize your greeting
    description: "I design beautiful, user-friendly interfaces and experiences that solve real problems. Let's build something meaningful together.", // ✏️ Write 2-3 sentences about yourself
    avatar: "/assets/icons/colorphoto.png", // 📸 Put your photo in /public/assets/ and update filename here
    resumeUrl: "/files/yourresume.pdf", // 📄 Put your resume PDF in /public/assets/ and update filename here
  },

  // Navigation Links - ⚠️ IMPORTANT: href values must match section IDs in components
  // Current section IDs: #home, #experience, #skills, #projects, #education, #contact
  navigation: [
    { label: "Home", href: "#home" },           // ✏️ Links to Home section
    { label: "Experience", href: "#experience" }, // ✏️ Links to Experience section  
    { label: "Skills", href: "#skills" },       // ✏️ Links to Skills section
    { label: "Projects", href: "#projects" },   // ✏️ Links to Projects section
    { label: "Education", href: "#education" }, // ✏️ Links to Education section
    { label: "Contact", href: "#contact" },     // ✏️ Links to Contact section
  ],

  // Experience Data - Add your work experience here
  experience: [
    {
      title: "Senior Full Stack Developer",
      employer: "TechNova Solutions",
      companyIcon: "/assets/icons/ge.png",
      techStack: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
      years: "2022 - Present",
      description: `Led development of scalable web applications serving 100K+ users.
Built microservices architecture using Node.js and Docker containers.
Migrated legacy codebase to modern React with hooks and TypeScript.
Improved performance by 35% through code-splitting and lazy loading.
Mentored junior developers and conducted weekly code reviews.`,
    },
    {
      title: "Frontend Developer",
      employer: "Digital Solutions Inc",
      companyIcon: "/assets/icons/rbc.png",
      techStack: ["React", "JavaScript", "Python", "PostgreSQL", "Docker"],
      years: "2021 - 2022",
      description: `Created interactive UI components and design systems with Tailwind CSS.
Led prototyping efforts for high-priority client projects using Figma.
Worked closely with backend teams to build full-stack apps using Node.js.
Conducted usability testing and implemented feedback to boost engagement.
Automated component testing with Jest and React Testing Library.`,
    },
    {
      title: "Software Developer",
      employer: "SafePay Systems",
      companyIcon: "/assets/icons/science.png",
      techStack: ["React", "Redux", "JavaScript", "Styled Components", "HTML", "CSS"],
      years: "July 2021 - Nov 2022",
      description: `Developed responsive web applications using React and Redux.
Implemented secure payment processing systems with modern JavaScript.
Collaborated with design teams to create pixel-perfect UI components.
Optimized application performance and improved user experience.
Participated in code reviews and maintained high code quality standards.`,
    },
    {
      title: "Junior Developer",
      employer: "Wipro",
      companyIcon: "/assets/icons/wipro.png",
      techStack: ["React", "JavaScript", "HTML", "CSS"],
      years: "Feb 2019 - July 2021",
      description: `Started career as a junior developer working on web applications.
Learned modern web development practices and frameworks.
Contributed to various client projects using React and JavaScript.
Gained experience in responsive design and cross-browser compatibility.
Participated in agile development processes and team collaboration.`,
    },
  ],

  // Projects Data - Add your projects here
  projects: [
    {
      title: "E-Commerce Platform", // ✏️ Replace with your project name
      description: "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.", // ✏️ Describe what your project does
      image: "/assets/icons/project.png", // 📸 Put project screenshot in /public/assets/ and update filename
      link: "https://ecommerce-demo.alexjohnson.dev", // 🔗 Replace with your project URL or GitHub link
      tags: ["React", "Node.js", "MongoDB", "Stripe API"], // 🏷️ List technologies used
    },
    {
      title: "Task Management System", // ✏️ Replace with your project name
      description: "A collaborative task management application with real-time updates and team collaboration features.", // ✏️ Describe what your project does
      image: "/assets/icons/todolist.png", // 📸 Put project screenshot in /public/assets/ and update filename
      link: "https://taskmanager.alexjohnson.dev", // 🔗 Replace with your project URL or GitHub link
      tags: ["React", "TypeScript", "Socket.io", "PostgreSQL"], // 🏷️ List technologies used
    },
    {
      title: "Weather Dashboard", // ✏️ Replace with your project name
      description: "A responsive weather application with location-based forecasts and interactive maps.", // ✏️ Describe what your project does
      image: "/assets/icons/photo-react.png", // 📸 Put project screenshot in /public/assets/ and update filename
      link: "https://weather.alexjohnson.dev", // 🔗 Replace with your project URL or GitHub link
      tags: ["React", "Weather API", "Chart.js"], // 🏷️ List technologies used
    },
  ],

  // Skills/Technologies - Grouped format
  skills: [
    {
      title: "Programming Languages",
      borderColor: "border-blue-500",
      items: [
        {
          label: "React.JS",
          icon: "/assets/icons/photo-react.png"
        },
        {
          label: "Next.JS",
          icon: "/assets/icons/icons8-nextjs-64.png"
        },
        {
          label: "JavaScript",
          icon: "/assets/icons/java-script.png"
        },
        {
          label: "TypeScript",
          icon: "/assets/icons/icons8-typescript-24.png"
        },
        {
          label: "HTML5",
          icon: "/assets/icons/html.png"
        },
        {
          label: "CSS3",
          icon: "/assets/icons/css-3.png"
        },
        {
          label: "Redux",
          icon: "/assets/icons/redux-logo-svgrepo-com.svg"
        },
        {
          label: "Tailwind CSS",
          icon: "/assets/icons/tailwindicon.png"
        }
      ]
    },
    {
      title: "Tools & Technologies",
      borderColor: "border-blue-500",
      items: [
        {
          label: "GitLab",
          icon: "/assets/icons/gitlab.png"
        },
        {
          label: "Git",
          icon: "/assets/icons/git.png"
        },
        {
          label: "Figma",
          icon: "/assets/icons/figma.png"
        },
        {
          label: "Jira",
          icon: "/assets/icons/jira.png"
        },
        {
          label: "Material UI",
          icon: "/assets/icons/icons8-material-ui-48.png"
        },
        {
          label: "Chakra UI",
          icon: "/assets/icons/icons8-chakra-ui-48.png"
        }
      ]
    }
  ],

  // Education Data
  education: [
    {
      institution: "Indian Institute of Technology (IIT)",
      degree: "B.Tech in Computer Science",
      duration: "2018 - 2022",
      description: "Graduated with honors. Specialized in software engineering, algorithms, and web technologies.",
    },
    {
      institution: "Delhi Public School",
      degree: "Senior Secondary (12th Grade)",
      duration: "2016 - 2018",
      description: "Completed PCM (Physics, Chemistry, Mathematics) stream with distinction.",
    },
  ],

  // Contact Information
  contact: {
    heading: "Let's Connect",
    message: "Interested in collaborating or want to learn more about my work? I'd love to hear from you!",
    email: "alex.johnson.dev@gmail.com",
    phone: "+91-9876543210",
    linkedIn: "https://www.linkedin.com/in/alex-johnson-dev",
    github: "https://github.com/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
    location: "Bangalore, India",
  },

  // Theme Configuration
  theme: {
    primaryColor: "#60a5fa",
    secondaryColor: "#1e3a8a",
    backgroundColor: "#0a0a0a",
    cardBackground: "#111827",
    textColor: "#f5f5f5",
    textSecondary: "#ccc",
  },

  // Section Titles (customizable)
  sectionTitles: {
    experience: "My Experience",
    skills: "Skills & Tools",
    projects: "Projects",
    education: "Education",
  },
};

// Helper functions for safe data access with fallbacks
export const getPersonalData = () => {
  const personal = portfolioConfig.personal || {};
  return {
    name: personal.name || "Your Name",
    title: personal.title || "Developer",
    subtitle: personal.subtitle || "Hello, I'm",
    description: personal.description || "Welcome to my portfolio",
    avatar: personal.avatar || "/assets/icons/colorphoto.png",
    resumeUrl: personal.resumeUrl || "#"
  };
};

export const getContactData = () => {
  const contact = portfolioConfig.contact || {};
  return {
    heading: contact.heading || "Contact",
    message: contact.message || "Get in touch!",
    email: contact.email || "",
    phone: contact.phone || "",
    linkedIn: contact.linkedIn || "",
    github: contact.github || "",
    twitter: contact.twitter || "",
    location: contact.location || ""
  };
};

export const getNavigationData = () => {
  return portfolioConfig.navigation || [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];
};

export const getSkillsData = () => {
  return portfolioConfig.skills || [];
};

export const getExperienceData = () => {
  return portfolioConfig.experience || [];
};

export const getProjectsData = () => {
  return portfolioConfig.projects || [];
};

export const getEducationData = () => {
  return portfolioConfig.education || [];
};

export const getSectionTitles = () => {
  return portfolioConfig.sectionTitles || {
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    education: "Education"
  };
};

export const getTheme = () => {
  return portfolioConfig.theme || {
    primaryColor: "#60a5fa",
    secondaryColor: "#1e3a8a",
    backgroundColor: "#0a0a0a",
    cardBackground: "#111827",
    textColor: "#f5f5f5",
    textSecondary: "#ccc"
  };
};

// Validation helpers
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email && emailRegex.test(email);
};

export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const hasValidSocialLinks = (contact) => {
  return {
    hasLinkedIn: contact.linkedIn && isValidUrl(contact.linkedIn),
    hasGithub: contact.github && isValidUrl(contact.github),
    hasTwitter: contact.twitter && isValidUrl(contact.twitter)
  };
};
