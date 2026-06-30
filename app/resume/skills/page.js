"use client";

import BuilderShell from "@/app/Components/BuilderShell";
import TagInput from "@/app/Components/ui/TagInput";
import { useResume } from "@/app/context/ResumeContext";

export default function SkillsPage() {
  const { data, setSection } = useResume();

  return (
    <BuilderShell
      step="skills"
      title="Skills & languages"
      description="Add keywords recruiters and ATS systems scan for."
      prevHref="/resume/contact"
      nextHref="/resume/template"
      nextLabel="Choose a template"
    >
      <div>
        <label className="field-label">Skills</label>
        <TagInput
          items={data.skills}
          onChange={(skills) => setSection("skills", skills)}
          placeholder="e.g. Figma, then press Enter"
        />
        <p className="mt-1.5 text-xs text-ink-400">
          Press Enter or comma to add each skill.
        </p>
      </div>

      <div>
        <label className="field-label">Languages</label>
        <TagInput
          items={data.languages}
          onChange={(languages) => setSection("languages", languages)}
          placeholder="e.g. English, then press Enter"
          max={10}
        />
      </div>
    </BuilderShell>
  );
}
