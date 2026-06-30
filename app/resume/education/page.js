"use client";

import BuilderShell from "@/app/Components/BuilderShell";
import Field from "@/app/Components/ui/Field";
import {
  useResume,
  EMPTY_EDUCATION,
} from "@/app/context/ResumeContext";

export default function EducationPage() {
  const { data, updateListItem, addListItem, removeListItem } = useResume();
  const education = data.education;

  const set = (index, field) => (e) =>
    updateListItem("education", index, { [field]: e.target.value });

  return (
    <BuilderShell
      step="education"
      title="Education"
      description="Add the schools and programs you want recruiters to see."
      prevHref="/resume/personal-info"
      nextHref="/resume/experience"
    >
      {education.map((edu, index) => (
        <div
          key={index}
          className="rounded-2xl border border-ink-200 bg-ink-50/60 p-5"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-ink-700">
              Education {index + 1}
            </h3>
            {education.length > 1 && (
              <button
                type="button"
                onClick={() => removeListItem("education", index)}
                className="text-xs font-medium text-ink-400 transition-colors hover:text-brand-600"
              >
                Remove
              </button>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Institution"
              placeholder="Stanford University"
              value={edu.institution}
              onChange={set(index, "institution")}
            />
            <Field
              label="Course / Degree"
              placeholder="B.Sc. Computer Science"
              value={edu.course}
              onChange={set(index, "course")}
            />
            <Field
              label="Start date"
              placeholder="2018"
              value={edu.start}
              onChange={set(index, "start")}
            />
            <Field
              label="Finish date"
              placeholder="2022"
              value={edu.finish}
              onChange={set(index, "finish")}
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={() => addListItem("education", { ...EMPTY_EDUCATION })}
        className="btn-soft w-full"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M10 4a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 0 1 1-1Z" />
        </svg>
        Add another education
      </button>
    </BuilderShell>
  );
}
