# Portfolio Configuration Guide

This portfolio follows a **standardized data structure** that makes it easy to customize and maintain. All portfolio designs should use this same structure for consistency.

## 📁 File Structure

```
src/
├── data/
│   ├── portfolioData.js          # Main configuration file (EDIT THIS)
│   └── userDataExample.js        # Examples and documentation
├── components/                   # React components
└── ...
```

## 🔧 How to Customize Your Portfolio

### 1. Edit the Configuration File

Open `/src/data/portfolioData.js` and update the `portfolioConfig` object:

```javascript
export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Your Name",                    // ✏️ Your full name
    title: "Your Job Title",              // ✏️ Your profession
    subtitle: "Hello, I'm",               // ✏️ Greeting text
    description: "Your bio...",           // ✏️ 2-3 sentences about you
    avatar: "/assets/your-photo.jpg",     // 📸 Your profile photo
    resumeUrl: "/assets/resume.pdf",      // 📄 Your resume file
  },
  
  // Add your projects, experience, skills, etc.
}
```

### 2. Add Your Files

- **Profile Photo**: Put in `/public/assets/your-photo.jpg`
- **Resume**: Put in `/public/assets/resume.pdf`
- **Project Images**: Put in `/public/assets/project1.jpg`, etc.

### 3. Update File Paths

Make sure the paths in `portfolioConfig` match your actual file names.

## 📋 Data Structure Reference

### Personal Information
```javascript
personal: {
  name: "string",           // Required: Your full name
  title: "string",          // Required: Job title/role
  subtitle: "string",       // Optional: Greeting text
  description: "string",    // Optional: Bio paragraph
  avatar: "string",         // Optional: Photo path
  resumeUrl: "string"       // Optional: Resume file path
}
```

### Navigation
```javascript
navigation: [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  // Add more navigation items
]
```

### Experience
```javascript
experience: [
  {
    title: "string",         // Job title
    employer: "string",      // Company name
    years: "string",         // Duration (e.g., "2020 - 2023")
    techStack: ["array"],    // Technologies used
    description: "string"    // Job description (supports line breaks)
  }
]
```

### Projects
```javascript
projects: [
  {
    title: "string",         // Project name
    description: "string",   // What the project does
    image: "string",         // Screenshot path
    link: "string",          // Live demo or GitHub URL
    tags: ["array"]          // Technologies used
  }
]
```

### Skills
```javascript
skills: [
  {
    name: "string",          // Technology name
    description: "string",   // Brief description
    link: "string"           // Optional: Documentation link
  }
]
```

### Education
```javascript
education: [
  {
    institution: "string",   // School/University name
    degree: "string",        // Degree type
    duration: "string",      // Years attended
    description: "string"    // Additional details
  }
]
```

### Contact Information
```javascript
contact: {
  heading: "string",        // Contact section title
  message: "string",        // Contact message
  email: "string",          // Email address
  phone: "string",          // Phone number
  linkedIn: "string",       // LinkedIn URL
  github: "string",         // GitHub URL
  twitter: "string",        // Twitter URL
  location: "string"        // Your location
}
```

## 🎨 Theme Configuration

```javascript
theme: {
  primaryColor: "#60a5fa",      // Main accent color
  secondaryColor: "#1e3a8a",    // Secondary color
  backgroundColor: "#0a0a0a",   // Background color
  cardBackground: "#111827",    // Card background
  textColor: "#f5f5f5",         // Primary text color
  textSecondary: "#ccc"         // Secondary text color
}
```

## 🔒 Error Handling

The portfolio is **bulletproof** - it won't break if data is missing:

- ✅ Missing fields use default values
- ✅ Invalid URLs are filtered out
- ✅ Empty sections are hidden automatically
- ✅ All data is validated before display

## 🚀 Benefits of This Structure

1. **Consistent**: All portfolio designs use the same format
2. **Flexible**: Add or remove any section
3. **Safe**: Never crashes due to missing data
4. **Easy**: Clear documentation and examples
5. **Maintainable**: Centralized configuration

## 📝 Quick Start

1. Copy your portfolio files
2. Edit `/src/data/portfolioData.js`
3. Add your photos and resume to `/public/assets/`
4. Update file paths in the config
5. Run `npm start` to preview

## 🔧 Advanced Customization

- **Section Titles**: Customize in `sectionTitles` object
- **Navigation**: Modify the `navigation` array
- **Theme Colors**: Update the `theme` object
- **Validation**: All data is automatically validated

---

**Note**: This structure should be used across ALL portfolio designs for consistency and maintainability.
