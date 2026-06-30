// Resume sidebar building blocks. Styled with Tailwind (the previous version
// referenced CSS classes that were never defined, so these rendered unstyled).
// Designed for the dark sidebars used by both templates.
import React from "react";
import { safeRender } from "@/utils/validation";

// Literal class strings so Tailwind's content scanner keeps them.
const ACCENTS = {
  orange: { title: "text-brand-200", bar: "bg-brand-300/80", dot: "bg-brand-300" },
  slate: { title: "text-slate-300", bar: "bg-slate-400/80", dot: "bg-slate-300" },
};

const SectionTitle = ({ children, accent = "orange" }) => {
  const a = ACCENTS[accent] || ACCENTS.orange;
  return (
    <div className="mb-3">
      <h3
        className={`text-[0.72rem] font-bold uppercase tracking-[0.18em] ${a.title}`}
      >
        {children}
      </h3>
      <span className={`mt-1.5 block h-0.5 w-8 rounded-full ${a.bar}`} />
    </div>
  );
};

const Line = ({ label, value }) =>
  value ? (
    <div className="leading-snug">
      <span className="block text-[0.6rem] font-medium uppercase tracking-wide text-white/45">
        {label}
      </span>
      <span className="block break-words text-[0.8rem] text-white/90">
        {value}
      </span>
    </div>
  ) : null;

export const ContactSection = ({ contactInfo = {}, personalInfo = {}, accent }) => (
  <section className="space-y-2.5">
    <SectionTitle accent={accent}>Contact</SectionTitle>
    <Line label="Phone" value={contactInfo.phoneNumber} />
    <Line label="Email" value={contactInfo.email} />
    <Line
      label="Address"
      value={
        [personalInfo.address, personalInfo.city, personalInfo.state]
          .filter(Boolean)
          .join(", ") || safeRender(personalInfo.address, "")
      }
    />
  </section>
);

export const ProfileSection = ({ contactInfo = {}, accent }) => {
  const hasAny = contactInfo.portfolio || contactInfo.linkedin || contactInfo.github;
  if (!hasAny) return null;
  return (
    <section className="space-y-2.5">
      <SectionTitle accent={accent}>Links</SectionTitle>
      <Line label="Portfolio" value={contactInfo.portfolio} />
      <Line label="LinkedIn" value={contactInfo.linkedin} />
      <Line label="GitHub" value={contactInfo.github} />
    </section>
  );
};

export const EducationSection = ({ education = [], accent }) => {
  const items = education.filter((e) => e && (e.institution || e.course));
  if (!items.length) return null;
  return (
    <section className="space-y-3">
      <SectionTitle accent={accent}>Education</SectionTitle>
      {items.map((edu, i) => (
        <div key={i} className="leading-snug">
          <p className="text-[0.82rem] font-semibold text-white">
            {edu.institution}
          </p>
          {edu.course && (
            <p className="text-[0.75rem] text-white/80">{edu.course}</p>
          )}
          {(edu.start || edu.finish) && (
            <p className="text-[0.65rem] text-white/50">
              {[edu.start, edu.finish].filter(Boolean).join(" – ")}
            </p>
          )}
        </div>
      ))}
    </section>
  );
};

export const LanguagesSection = ({ languages = [], accent }) => {
  const items = languages.filter((l) => l && l.trim());
  if (!items.length) return null;
  return (
    <section className="space-y-2">
      <SectionTitle accent={accent}>Languages</SectionTitle>
      <ul className="space-y-1">
        {items.map((language, i) => (
          <li key={i} className="text-[0.8rem] text-white/90">
            {language}
          </li>
        ))}
      </ul>
    </section>
  );
};

export const SkillsSection = ({ skills = [], accent }) => {
  const items = skills.filter((s) => s && s.trim());
  if (!items.length) return null;
  const a = ACCENTS[accent] || ACCENTS.orange;
  return (
    <section className="space-y-2">
      <SectionTitle accent={accent}>Skills</SectionTitle>
      <ul className="space-y-1.5">
        {items.map((skill, i) => (
          <li key={i} className="flex items-center gap-2 text-[0.8rem] text-white/90">
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};
