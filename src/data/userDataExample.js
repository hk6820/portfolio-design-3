/**
 * USER DATA CONFIGURATION EXAMPLE
 * 
 * This file shows how users can provide their own data dynamically.
 * Users can provide partial data - missing fields will use default values.
 * The application will not break if any field is missing or invalid.
 */

// EXAMPLE: Complete user data configuration
export const exampleUserData = {
  // Personal Information (Hero Section)
  personal: {
    name: "John Smith",                    // Required: Your full name
    subtitle: "Frontend Developer",        // Required: Your job title/role
    description: `Passionate developer with 3+ years of experience in React and modern web technologies.
I love creating beautiful, responsive user interfaces and solving complex problems.
Currently focused on learning TypeScript and exploring new frontend frameworks.`,
    resumeLink: "/files/john-smith-resume.pdf",  // Optional: Path to resume file
    imageSrc: "/assets/icons/my-photo.jpg"       // Optional: Path to profile image
  },

  // Contact Information
  contact: {
    email: "john.smith@example.com",              // Optional: Will be validated
    linkedIn: "https://linkedin.com/in/johnsmith", // Optional: Will be validated
    github: "https://github.com/johnsmith",        // Optional: Will be validated
    instagram: "https://instagram.com/johnsmith",  // Optional: Will be validated
    phone: "+1-234-567-8900"                      // Optional: Not currently displayed
  },

  // Navigation Bar
  navbar: {
    title: "John's Portfolio",                    // Optional: Defaults to "Portfolio"
    links: [                                      // Optional: Defaults to standard links
      { label: "About", href: "#aboutme" },
      { label: "Skills", href: "#skills&tools" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" }
    ]
  },

  // Skills Section (Array of skill categories)
  skills: [
    {
      title: "Frontend Development",
      borderColor: "border-blue-500",             // Optional: CSS border color class
      items: [
        { label: "React", icon: "/assets/icons/react.png" },
        { label: "JavaScript", icon: "/assets/icons/js.png" },
        { label: "HTML5", icon: "/assets/icons/html.png" },
        { label: "CSS3", icon: "/assets/icons/css.png" },
        { label: "Tailwind CSS", icon: "/assets/icons/tailwind.png" }
      ]
    },
    {
      title: "Tools & Technologies",
      borderColor: "border-green-500",
      items: [
        { label: "Git", icon: "/assets/icons/git.png" },
        { label: "VS Code", icon: "/assets/icons/vscode.png" },
        { label: "Figma", icon: "/assets/icons/figma.png" }
      ]
    }
  ],

  // Work Experience (Array of jobs)
  experience: [
    {
      company: "Tech Solutions Inc",
      logo: "/assets/icons/company1.png",         // Optional: Company logo
      duration: "Jan 2022 – Present",
      techStack: ["React", "JavaScript", "CSS"],  // Array of technologies used
      responsibilities: [                          // Array of job responsibilities
        "Developed responsive web applications using React and modern CSS frameworks",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Optimized application performance resulting in 30% faster load times",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      company: "StartupXYZ",
      logo: "/assets/icons/company2.png",
      duration: "Jun 2020 – Dec 2021",
      techStack: ["HTML", "CSS", "JavaScript"],
      responsibilities: [
        "Built landing pages and marketing websites from scratch",
        "Implemented responsive design principles for mobile-first approach",
        "Worked closely with marketing team to improve conversion rates"
      ]
    }
  ],

  // Projects Portfolio (Array of projects)
  projects: [
    {
      title: "E-Commerce Website",
      description: "A full-featured online store with shopping cart, user authentication, and payment processing. Built with React and integrated with Stripe API.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],  // Technologies used
      image: "/assets/icons/project1.png",              // Project screenshot
      live: "https://mystore.example.com",              // Live demo URL
      github: "https://github.com/johnsmith/ecommerce"  // GitHub repository
    },
    {
      title: "Weather App",
      description: "A responsive weather application with location-based forecasts and beautiful UI animations.",
      tech: ["React", "Weather API", "CSS3"],
      image: "/assets/icons/project2.png",
      live: "https://weather-app.example.com",
      github: "https://github.com/johnsmith/weather-app"
    }
  ],

  // Education Background (Array of educational qualifications)
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      duration: "2016 – 2020",
      note: "Graduated Magna Cum Laude. Focused on web development and software engineering."
    },
    {
      degree: "High School Diploma",
      institution: "Central High School",
      duration: "2012 – 2016",
      note: "Valedictorian. President of Computer Science Club."
    }
  ]
};

// EXAMPLE: Minimal user data (most fields will use defaults)
export const minimalUserData = {
  personal: {
    name: "Jane Doe",
    subtitle: "Web Developer"
  },
  contact: {
    email: "jane@example.com"
  },
  projects: [
    {
      title: "My First Website",
      description: "A simple portfolio website built with HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/assets/icons/project.png",
      github: "https://github.com/jane/first-website"
    }
  ]
};

// EXAMPLE: How to handle missing or invalid data
export const partialUserData = {
  personal: {
    name: "Bob Wilson",
    // subtitle is missing - will use default
    description: "Learning to code and building cool projects!"
    // resumeLink is missing - download button won't show
    // imageSrc is missing - will use default image
  },
  contact: {
    email: "invalid-email",  // Invalid email - won't be displayed
    github: "https://github.com/bobwilson"  // Valid GitHub - will be displayed
    // Other social links missing - won't be displayed
  },
  // skills array is missing - entire skills section won't render
  // experience array is missing - entire experience section won't render
  // projects array is missing - entire projects section won't render
  // education array is missing - entire education section won't render
};

/**
 * INSTRUCTIONS FOR USERS:
 * 
 * 1. Copy the structure from `exampleUserData` above
 * 2. Replace the example data with your own information
 * 3. Remove any sections you don't want to include
 * 4. Save your data in the `userData` object in portfolioData.js
 * 5. The application will automatically handle missing fields
 * 
 * IMPORTANT NOTES:
 * - All fields are optional except personal.name
 * - Invalid URLs or emails will be ignored
 * - Empty arrays will hide entire sections
 * - Missing icons will use default placeholders
 * - The application will never crash due to missing data
 */
