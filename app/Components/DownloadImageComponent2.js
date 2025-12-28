// components/DownloadImageComponent2.js (Template 2)
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import Link from "next/link";
import {
  loadFromLocalStorage,
  getDefaultResumeData,
} from "@/utils/resumeStorage";
import {
  ContactSection,
  ProfileSection,
  EducationSection,
  ExperienceSection,
  SkillsSection,
  LanguagesSection,
} from "./ResumeSection";

const DownloadImageComponent2 = () => {
  const divRef = useRef(null);
  const [resumeData, setResumeData] = useState(getDefaultResumeData());
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    try {
      const data = {
        personalInfo: loadFromLocalStorage("personalInfo", {}),
        educationInfo: loadFromLocalStorage("educationInfo", {}),
        experienceInfo: loadFromLocalStorage("experienceInfo", {
          experiences: [],
        }),
        contactInfo: loadFromLocalStorage("contactInfo", {}),
        skillsInfo: loadFromLocalStorage("skills", { skills: [] }),
        languagesInfo: loadFromLocalStorage("languages", { languages: [] }),
      };
      setResumeData(data);
    } catch (error) {
      console.error("Error loading resume data:", error);
    }
  }, []);

  const handleDownload = useCallback(async () => {
    if (!divRef.current || isDownloading) return;

    setIsDownloading(true);

    try {
      const canvas = await html2canvas(divRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: null,
      });

      const dataUrl = canvas.toDataURL("image/png", 1.0);
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `resume_${
        resumeData.personalInfo.firstName || "template"
      }_green.png`;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Failed to generate resume. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  }, [isDownloading, resumeData.personalInfo.firstName]);

  const {
    personalInfo,
    educationInfo,
    experienceInfo,
    contactInfo,
    skillsInfo,
    languagesInfo,
  } = resumeData;

  const validExperiences =
    experienceInfo.experiences?.filter((exp) => exp?.role) || [];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 bg-gray-50">
      {/* Navigation */}
      <div className="order-2 lg:order-1 lg:mr-8">
        <Link href="/resume/template" className="group">
          <div className="w-16 h-16 lg:w-20 lg:h-20 border-r-[32px] lg:border-r-[40px] border-r-green-500 border-l-[32px] lg:border-l-[40px] border-l-transparent border-t-[32px] lg:border-t-[40px] border-t-transparent border-b-[32px] lg:border-b-[40px] border-b-transparent hover:border-r-green-600 transition-all duration-300"></div>
          <span className="text-xs text-gray-500 mt-2 block text-center">
            ← Template 1
          </span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="order-1 lg:order-2 flex flex-col items-center w-full max-w-4xl">
        {/* Download Button */}
        <div className="mb-6 w-full max-w-md">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`w-full bg-green-500 hover:bg-green-600 py-3 px-6 text-white font-semibold rounded-lg transition-all duration-300 ${
              isDownloading
                ? "opacity-70 cursor-not-allowed"
                : "hover:shadow-lg"
            }`}
          >
            {isDownloading ? "Generating..." : "Download Resume"}
          </button>
        </div>

        {/* Resume Template */}
        <div
          ref={divRef}
          className="relative w-full max-w-[595px] h-[842px] shadow-2xl overflow-hidden"
        >
          {/* Modern Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-50 -z-10"></div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-green-100 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-100 rounded-full translate-x-24 translate-y-24"></div>

          <div className="relative w-full h-full flex flex-col lg:flex-row">
            {/* Right Content (First on mobile) */}
            <div className="lg:w-3/5 p-8 order-2 lg:order-1">
              {/* Header */}
              <div className="text-center mb-12 pt-8">
                <h1 className="text-4xl font-light uppercase tracking-widest text-green-700">
                  {personalInfo.firstName || "First"}
                </h1>
                <h1 className="text-5xl font-bold uppercase tracking-wider text-gray-800 mt-2">
                  {personalInfo.lastName || "Name"}
                </h1>
                <p className="text-lg text-gray-600 mt-4 border-t border-gray-200 pt-4 inline-block">
                  {personalInfo.profession || "Professional Title"}
                </p>
              </div>

              {/* About Section */}
              <div className="mb-10 px-4">
                <h2 className="text-2xl font-bold uppercase mb-6 text-gray-800 border-b border-green-500 pb-2">
                  Professional Profile
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {personalInfo.about ||
                    "Your professional summary goes here..."}
                </p>
              </div>

              {/* Experience Section */}
              <div className="px-4">
                <h2 className="text-2xl font-bold uppercase mb-6 text-gray-800 border-b border-green-500 pb-2">
                  Work Experience
                </h2>
                {validExperiences.length > 0 ? (
                  <div className="space-y-8">
                    {validExperiences.slice(0, 3).map((exp, index) => (
                      <div
                        key={index}
                        className="relative pl-6 border-l-2 border-green-300"
                      >
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                        <div className="flex flex-col lg:flex-row lg:justify-between mb-2">
                          <h3 className="font-bold text-xl text-gray-800">
                            {exp.role}
                          </h3>
                          <span className="text-green-600 font-medium">
                            {exp.start} - {exp.finish}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">
                          <span className="font-semibold">
                            {exp.companyName}
                          </span>{" "}
                          • {exp.location}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {exp.achievements}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 italic text-center py-8">
                    Add your work experience to see it here
                  </p>
                )}
              </div>
            </div>

            {/* Left Sidebar */}
            <div className="lg:w-2/5 bg-gradient-to-b from-green-600 to-green-800 text-white p-8 order-1 lg:order-2">
              <div className="space-y-10">
                <ContactSection
                  contactInfo={contactInfo}
                  personalInfo={personalInfo}
                />

                <ProfileSection contactInfo={contactInfo} />

                <EducationSection educationInfo={educationInfo} />

                <LanguagesSection languages={languagesInfo.languages} />

                {/* Skills Section */}
                <div>
                  <h3 className="text-xl font-bold uppercase mb-6 border-b border-green-300 pb-2">
                    Skills
                  </h3>
                  {skillsInfo.skills?.length > 0 ? (
                    <div className="space-y-3">
                      {skillsInfo.skills.map((skill, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-green-300 rounded-full mr-3"></div>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-green-200 italic">No skills added</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
            Resume Template • Modern Design
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadImageComponent2;
