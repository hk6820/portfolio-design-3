import Navbar from "././Navbar/Navbar";
import Home from "./Home/Home";
import Skills from "././Skills/Skills";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import SectionWrapper from "./SectionWrapper";
import {
  getPersonalData,
  getContactData,
  getNavigationData,
  getSkillsData,
  getExperienceData,
  getProjectsData,
  getEducationData,
  getSectionTitles,
  isValidEmail,
  hasValidSocialLinks
} from "./data/portfolioData";

export default function App() {
  // Get data from centralized configuration with fallbacks
  const personalData = getPersonalData();
  const contactData = getContactData();
  const navigationData = getNavigationData();
  const skillsData = getSkillsData();
  const experienceData = getExperienceData();
  const projectsData = getProjectsData();
  const educationData = getEducationData();
  const sectionTitles = getSectionTitles();
  
  // Generate dynamic navigation based on available data
  const dynamicNavigation = [
    { label: "Home", href: "#home" }, // Always present
    ...(experienceData && experienceData.length > 0 ? [{ label: "Experience", href: "#experience" }] : []),
    ...(skillsData && skillsData.length > 0 ? [{ label: "Skills", href: "#skills" }] : []),
    ...(projectsData && projectsData.length > 0 ? [{ label: "Projects", href: "#projects" }] : []),
    ...(educationData && educationData.length > 0 ? [{ label: "Education", href: "#education" }] : []),
    { label: "Contact", href: "#contact" }, // Always present
  ];
  
  // Validate and prepare contact data
  const validatedContact = {
    ...contactData,
    email: isValidEmail(contactData.email) ? contactData.email : null,
    ...hasValidSocialLinks(contactData)
  };

  return (
    <>
      {/* Navbar with dynamic brand title and links */}
      <SectionWrapper>
        <Navbar
          title={`${personalData?.name}'s Portfolio` || "Portfolio"}
          links={dynamicNavigation}
        />
      </SectionWrapper>

      {/* Main Page Content */}
      <div style={{ background: "#0f172a" }}>
        {/* Hero Section (Home) */}
        <SectionWrapper>
          <Home
            name={personalData?.name}
            subtitle={personalData?.title}
            description={personalData?.description}
            resumeLink={personalData?.resumeUrl}
            imageSrc={personalData?.avatar}
          />
        </SectionWrapper>

        {/* Skills Section - Only render if skills data exists */}
        {skillsData && skillsData.length > 0 && (
          <SectionWrapper>
            <Skills sectionTitle={sectionTitles?.skills} skills={skillsData} />
          </SectionWrapper>
        )}

        {/* Experience Section - Only render if experience data exists */}
        {experienceData && experienceData.length > 0 && (
          <SectionWrapper>
            <Experience
              sectionTitle={sectionTitles?.experience}
              experiences={experienceData}
            />
          </SectionWrapper>
        )}

        {/* Projects Section - Only render if projects data exists */}
        {projectsData && projectsData.length > 0 && (
          <SectionWrapper>
            <Projects sectionTitle={sectionTitles?.projects} projects={projectsData} />
          </SectionWrapper>
        )}

        {/* Education Section - Only render if education data exists */}
        {educationData && educationData.length > 0 && (
          <SectionWrapper>
            <Education sectionTitle={sectionTitles?.education} education={educationData} />
          </SectionWrapper>
        )}

        {/* Contact/Footer Section */}
        <Contact
          heading={contactData?.heading}
          message={contactData?.message}
          email={validatedContact?.email}
          linkedIn={validatedContact?.hasLinkedIn ? contactData?.linkedIn : null}
          github={validatedContact?.hasGithub ? contactData?.github : null}
          instagram={validatedContact?.hasTwitter ? contactData?.twitter : null}
          developerName={personalData?.name || "Developer"}
          linkData={navigationData?.map(link => link.label) || []}
        />
      </div>
    </>
  );
}
