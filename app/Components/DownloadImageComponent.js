// components/DownloadImageComponent.js (Template 1)
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import Link from "next/link";
import Image from "next/image";
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
import { validateExperience } from "@/utils/validation";

const DownloadImageComponent = () => {
  const divRef = useRef(null);
  const [resumeData, setResumeData] = useState(getDefaultResumeData());
  const [isDownloading, setIsDownloading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Load all data with proper error handling
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
      // Optionally show a user-friendly error message
    }
  }, []);

  const handleDownload = useCallback(async () => {
    if (!divRef.current || isDownloading) return;

    setIsDownloading(true);

    try {
      const canvas = await html2canvas(divRef.current, {
        scale: 2, // Higher quality
        useCORS: true,
        logging: false,
        backgroundColor: null,
      });

      const dataUrl = canvas.toDataURL("image/png", 1.0);
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `resume_${
        resumeData.personalInfo.firstName || "template"
      }.png`;

      // Clean up after download
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

  const handleImageChange = useCallback((event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file (JPEG, PNG, etc.)");
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB");
      return;
    }

    setImageError(false);
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };

    reader.onerror = () => {
      setImageError(true);
      alert("Failed to read the image file. Please try another image.");
    };

    reader.readAsDataURL(file);
  }, []);

  const {
    personalInfo,
    educationInfo,
    experienceInfo,
    contactInfo,
    skillsInfo,
    languagesInfo,
  } = resumeData;

  const validExperiences =
    experienceInfo.experiences?.filter(validateExperience) || [];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 bg-gray-50">
      {/* Navigation Arrows */}
      <div className="order-2 lg:order-1 lg:mr-8">
        <Link href="/resume/template2" className="group">
          <div className="w-16 h-16 lg:w-20 lg:h-20 border-r-[32px] lg:border-r-[40px] border-r-transparent border-l-[32px] lg:border-l-[40px] border-l-transparent border-t-[32px] lg:border-t-[40px] border-t-transparent border-b-[32px] lg:border-b-[40px] border-b-transparent hover:border-b-orange-500 transition-all duration-300"></div>
          <span className="text-xs text-gray-500 mt-2 block text-center">
            Template 2 →
          </span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="order-1 lg:order-2 flex flex-col items-center w-full max-w-4xl">
        {/* Controls */}
        <div className="mb-6 w-full max-w-md">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`w-full bg-orange-500 hover:bg-orange-600 py-3 px-6 mb-4 text-white font-semibold rounded-lg transition-all duration-300 ${
              isDownloading
                ? "opacity-70 cursor-not-allowed"
                : "hover:shadow-lg"
            }`}
          >
            {isDownloading ? "Generating..." : "Download Resume"}
          </button>

          <div className="bg-white p-4 rounded-lg shadow">
            <label className="block mb-2 font-medium">
              Upload Profile Photo
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="w-full p-2 border rounded text-sm"
            />
            {imageError && (
              <p className="text-red-500 text-sm mt-1">Error loading image</p>
            )}
          </div>
        </div>

        {/* Resume Template */}
        <div
          ref={divRef}
          className="relative w-full max-w-[595px] h-[842px] shadow-2xl bg-white overflow-hidden"
        >
          {/* Template Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white -z-10"></div>

          <div className="relative w-full h-full flex">
            {/* Left Sidebar */}
            <div className="w-2/5 bg-gradient-to-b from-orange-600 to-orange-700 text-white p-8">
              {/* Profile Image */}
              <div className="mb-8">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <ContactSection
                  contactInfo={contactInfo}
                  personalInfo={personalInfo}
                />

                <ProfileSection contactInfo={contactInfo} />

                <EducationSection educationInfo={educationInfo} />

                <LanguagesSection languages={languagesInfo.languages} />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-3/5 p-8">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold uppercase tracking-wide">
                  <span className="text-gray-800">
                    {personalInfo.lastName || "LAST"}
                  </span>{" "}
                  <span className="text-orange-600">
                    {personalInfo.firstName || "NAME"}
                  </span>
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                  {personalInfo.profession || "Professional Title"}
                </p>
              </div>

              {/* About Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold uppercase mb-4 text-gray-800">
                  About Me
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {personalInfo.about ||
                    "Add your professional summary here..."}
                </p>
              </div>

              {/* Experience Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold uppercase mb-4 text-gray-800">
                  Professional Experience
                </h2>
                {validExperiences.length > 0 ? (
                  validExperiences.slice(0, 3).map((exp, index) => (
                    <div key={index} className="mb-6 last:mb-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-lg">{exp.role}</h3>
                        <span className="text-sm text-gray-500">
                          {exp.start} - {exp.finish}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {exp.companyName} • {exp.location}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {exp.achievements}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic">
                    No experience entries yet
                  </p>
                )}
              </div>

              {/* Skills Section */}
              <div>
                <h2 className="text-xl font-bold uppercase mb-4 text-gray-800">
                  Skills
                </h2>
                {skillsInfo.skills?.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {skillsInfo.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">No skills added yet</p>
                )}
              </div>
            </div>
          </div>

          {/* Watermark */}
          <div className="absolute bottom-4 right-4 text-xs text-gray-400">
            Generated with Resume Builder
          </div>
        </div>
      </div>

      {/* Right Navigation */}
      <div className="order-3 lg:ml-8 mt-8 lg:mt-0">
        <Link href="/" className="group">
          <div className="w-16 h-16 lg:w-20 lg:h-20 border-r-[32px] lg:border-r-[40px] border-r-green-500 border-l-[32px] lg:border-l-[40px] border-l-transparent border-t-[32px] lg:border-t-[40px] border-t-transparent border-b-[32px] lg:border-b-[40px] border-b-transparent hover:border-r-green-600 transition-all duration-300"></div>
          <span className="text-xs text-gray-500 mt-2 block text-center">
            ← Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DownloadImageComponent;
