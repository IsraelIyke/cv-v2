// Template 1 — "Classic": warm orange sidebar + content column.
"use client";

import React from "react";
import TemplateScaffold from "./TemplateScaffold";
import { useResumeExport } from "./useResumeExport";
import { useResume } from "@/app/context/ResumeContext";
import {
  ContactSection,
  ProfileSection,
  EducationSection,
  LanguagesSection,
  SkillsSection,
} from "./ResumeSection";

const DownloadImageComponent = () => {
  const { data, setSection } = useResume();
  const {
    personalInfo,
    contactInfo,
    education,
    experience,
    skills,
    languages,
    photo,
  } = data;

  const { ref, isDownloading, download } = useResumeExport(
    `resume_${personalInfo.firstName || "untitled"}_classic`
  );

  const handlePhoto = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => setSection("photo", e.target.result);
    reader.readAsDataURL(file);
  };

  const validExperience = experience.filter((e) => e && e.role);

  return (
    <TemplateScaffold
      active="template"
      controls={{
        onDownload: download,
        isDownloading,
        onPhotoChange: handlePhoto,
        hasPhoto: !!photo,
      }}
    >
      <div
        ref={ref}
        className="flex h-[842px] w-[595px] overflow-hidden bg-white text-ink-800"
      >
        {/* Sidebar */}
        <aside className="flex w-[38%] flex-col gap-7 bg-gradient-to-b from-brand-600 to-brand-800 p-6 text-white">
          <div className="mx-auto h-32 w-32 overflow-hidden rounded-full ring-4 ring-white/30">
            {photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photo} alt="Profile" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-white/15 text-[0.7rem] uppercase tracking-wide text-white/70">
                Photo
              </div>
            )}
          </div>

          <ContactSection contactInfo={contactInfo} personalInfo={personalInfo} accent="orange" />
          <ProfileSection contactInfo={contactInfo} accent="orange" />
          <EducationSection education={education} accent="orange" />
          <SkillsSection skills={skills} accent="orange" />
          <LanguagesSection languages={languages} accent="orange" />
        </aside>

        {/* Main column */}
        <div className="flex w-[62%] flex-col p-8">
          <header className="border-b border-ink-200 pb-5">
            <h1 className="text-[2.1rem] font-bold uppercase leading-none tracking-tight text-ink-900">
              {personalInfo.firstName || "First"}{" "}
              <span className="text-brand-600">
                {personalInfo.lastName || "Name"}
              </span>
            </h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-ink-500">
              {personalInfo.profession || "Professional Title"}
            </p>
          </header>

          {personalInfo.about && (
            <section className="mt-6">
              <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-700">
                Profile
              </h2>
              <p className="text-[0.82rem] leading-relaxed text-ink-600">
                {personalInfo.about}
              </p>
            </section>
          )}

          <section className="mt-6">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-700">
              Experience
            </h2>
            {validExperience.length ? (
              <div className="space-y-5">
                {validExperience.map((exp, i) => (
                  <div key={i}>
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-[0.95rem] font-semibold text-ink-900">
                        {exp.role}
                      </h3>
                      <span className="shrink-0 text-[0.7rem] font-medium text-ink-400">
                        {[exp.start, exp.finish].filter(Boolean).join(" – ")}
                      </span>
                    </div>
                    <p className="text-[0.78rem] font-medium text-brand-600">
                      {[exp.companyName, exp.location].filter(Boolean).join(" · ")}
                    </p>
                    {exp.achievements && (
                      <p className="mt-1 text-[0.78rem] leading-relaxed text-ink-600">
                        {exp.achievements}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[0.8rem] italic text-ink-400">
                Add your work experience to see it here.
              </p>
            )}
          </section>
        </div>
      </div>
    </TemplateScaffold>
  );
};

export default DownloadImageComponent;
