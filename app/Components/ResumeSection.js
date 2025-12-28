// components/ResumeSection.js
import React from "react";
import { safeRender } from "@/utils/validation";

export const ContactSection = ({ contactInfo, personalInfo }) => (
  <div className="contact-section">
    <h3 className="section-title">CONTACT ME</h3>
    <p>
      <strong>Phone:</strong> {safeRender(contactInfo.phoneNumber)}
    </p>
    <p>
      <strong>Email:</strong> {safeRender(contactInfo.email)}
    </p>
    <p>
      <strong>Address:</strong> {safeRender(personalInfo.address)}
    </p>
  </div>
);

export const ProfileSection = ({ contactInfo }) => (
  <div className="profile-section">
    <h3 className="section-title">PROFILE</h3>
    <p>
      <strong>Portfolio:</strong> {safeRender(contactInfo.portfolio)}
    </p>
    <p>
      <strong>LinkedIn:</strong> {safeRender(contactInfo.linkedin)}
    </p>
    <p>
      <strong>GitHub:</strong> {safeRender(contactInfo.github)}
    </p>
  </div>
);

export const EducationSection = ({ educationInfo }) => (
  <div className="education-section">
    <h3 className="section-title">EDUCATION</h3>
    {educationInfo.institution1 && (
      <div className="education-item">
        <p className="institution">{safeRender(educationInfo.institution1)}</p>
        <p className="course">{safeRender(educationInfo.course1)}</p>
        <p className="duration">
          {safeRender(educationInfo.start1)} -{" "}
          {safeRender(educationInfo.finish1)}
        </p>
      </div>
    )}
    {educationInfo.institution2 && (
      <div className="education-item">
        <p className="institution">{safeRender(educationInfo.institution2)}</p>
        <p className="course">{safeRender(educationInfo.course2)}</p>
        <p className="duration">
          {safeRender(educationInfo.start2)} -{" "}
          {safeRender(educationInfo.finish2)}
        </p>
      </div>
    )}
  </div>
);

export const ExperienceSection = ({ experiences = [] }) => (
  <div className="experience-section">
    <h3 className="section-title">WORK EXPERIENCE</h3>
    {experiences
      .filter((exp) => exp && exp.role)
      .map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="experience-header">
            <h4 className="role">{exp.role}</h4>
            <span className="duration">
              {exp.start} - {exp.finish}
            </span>
          </div>
          <p className="company">
            {exp.companyName} / {exp.location}
          </p>
          <p className="achievements">{exp.achievements}</p>
        </div>
      ))}
  </div>
);

export const SkillsSection = ({ skills = [] }) => (
  <div className="skills-section">
    <h3 className="section-title">SKILLS</h3>
    <div className="skills-grid">
      {skills
        .filter((skill) => skill && skill.trim())
        .map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
    </div>
  </div>
);

export const LanguagesSection = ({ languages = [] }) => (
  <div className="languages-section">
    <h3 className="section-title">LANGUAGES</h3>
    {languages
      .filter((lang) => lang && lang.trim())
      .map((language, index) => (
        <p key={index}>{language}</p>
      ))}
  </div>
);
