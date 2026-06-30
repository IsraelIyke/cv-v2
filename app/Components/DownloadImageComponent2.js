// Template 2 — "Minimal": monochrome slate, header band + sidebar.
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

const DownloadImageComponent2 = () => {
  const { data } = useResume();
  const { personalInfo, contactInfo, education, experience, skills, languages } =
    data;

  const { ref, isDownloading, download } = useResumeExport(
    `resume_${personalInfo.firstName || "untitled"}_minimal`
  );

  const validExperience = experience.filter((e) => e && e.role);

  return (
    <TemplateScaffold
      active="template2"
      controls={{ onDownload: download, isDownloading }}
    >
      <div
        ref={ref}
        className="flex h-[842px] w-[595px] flex-col overflow-hidden bg-white text-ink-800"
      >
        {/* Header band */}
        <header className="bg-slate-900 px-9 py-8 text-white">
          <h1 className="text-[2.3rem] font-light uppercase leading-none tracking-[0.12em]">
            {personalInfo.firstName || "First"}{" "}
            <span className="font-bold">{personalInfo.lastName || "Name"}</span>
          </h1>
          <p className="mt-3 text-[0.8rem] font-medium uppercase tracking-[0.3em] text-slate-300">
            {personalInfo.profession || "Professional Title"}
          </p>
        </header>

        <div className="flex flex-1">
          {/* Main column */}
          <div className="flex w-[60%] flex-col p-8">
            {personalInfo.about && (
              <section className="mb-6">
                <h2 className="mb-2 border-b-2 border-slate-900 pb-1 text-sm font-bold uppercase tracking-wider text-slate-900">
                  Profile
                </h2>
                <p className="text-[0.82rem] leading-relaxed text-ink-600">
                  {personalInfo.about}
                </p>
              </section>
            )}

            <section>
              <h2 className="mb-3 border-b-2 border-slate-900 pb-1 text-sm font-bold uppercase tracking-wider text-slate-900">
                Experience
              </h2>
              {validExperience.length ? (
                <div className="space-y-5">
                  {validExperience.map((exp, i) => (
                    <div key={i} className="relative pl-4">
                      <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-slate-900" />
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="text-[0.92rem] font-semibold text-slate-900">
                          {exp.role}
                        </h3>
                        <span className="shrink-0 text-[0.7rem] font-medium text-ink-400">
                          {[exp.start, exp.finish].filter(Boolean).join(" – ")}
                        </span>
                      </div>
                      <p className="text-[0.76rem] font-medium uppercase tracking-wide text-slate-500">
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

          {/* Sidebar */}
          <aside className="flex w-[40%] flex-col gap-7 bg-slate-800 p-7 text-white">
            <ContactSection contactInfo={contactInfo} personalInfo={personalInfo} accent="slate" />
            <ProfileSection contactInfo={contactInfo} accent="slate" />
            <EducationSection education={education} accent="slate" />
            <SkillsSection skills={skills} accent="slate" />
            <LanguagesSection languages={languages} accent="slate" />
          </aside>
        </div>
      </div>
    </TemplateScaffold>
  );
};

export default DownloadImageComponent2;
