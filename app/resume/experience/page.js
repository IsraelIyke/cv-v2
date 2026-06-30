"use client";

import BuilderShell from "@/app/Components/BuilderShell";
import Field from "@/app/Components/ui/Field";
import TextArea from "@/app/Components/ui/TextArea";
import {
  useResume,
  EMPTY_EXPERIENCE,
} from "@/app/context/ResumeContext";

export default function ExperiencePage() {
  const { data, updateListItem, addListItem, removeListItem } = useResume();
  const experience = data.experience;

  const set = (index, field) => (e) =>
    updateListItem("experience", index, { [field]: e.target.value });

  const toggleCurrent = (index) => (e) =>
    updateListItem("experience", index, {
      isCurrentlyWorking: e.target.checked,
      finish: e.target.checked ? "Present" : "",
    });

  return (
    <BuilderShell
      step="experience"
      title="Work experience"
      description="List your most relevant roles, most recent first."
      prevHref="/resume/education"
      nextHref="/resume/contact"
    >
      {experience.map((exp, index) => (
        <div
          key={index}
          className="rounded-2xl border border-ink-200 bg-ink-50/60 p-5"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-ink-700">
              Experience {index + 1}
            </h3>
            {experience.length > 1 && (
              <button
                type="button"
                onClick={() => removeListItem("experience", index)}
                className="text-xs font-medium text-ink-400 transition-colors hover:text-brand-600"
              >
                Remove
              </button>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Company"
              placeholder="Acme Inc."
              value={exp.companyName}
              onChange={set(index, "companyName")}
            />
            <Field
              label="Role"
              placeholder="Senior Engineer"
              value={exp.role}
              onChange={set(index, "role")}
            />
            <Field
              label="Location"
              placeholder="Remote · New York, NY"
              value={exp.location}
              onChange={set(index, "location")}
            />
            <div className="grid grid-cols-2 gap-4">
              <Field
                label="Start"
                placeholder="Jan 2021"
                value={exp.start}
                onChange={set(index, "start")}
              />
              <Field
                label="Finish"
                placeholder="Present"
                value={exp.finish}
                onChange={set(index, "finish")}
                disabled={exp.isCurrentlyWorking}
              />
            </div>
          </div>

          <label className="mt-4 inline-flex cursor-pointer select-none items-center gap-2 text-sm text-ink-600">
            <input
              type="checkbox"
              checked={exp.isCurrentlyWorking}
              onChange={toggleCurrent(index)}
              className="h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500/30"
            />
            I currently work here
          </label>

          <div className="mt-4">
            <TextArea
              label="Achievements"
              hint="Use action verbs and quantify impact where you can."
              rows={4}
              placeholder="Led a team of 4 to ship… increasing conversion by 18%"
              value={exp.achievements}
              onChange={set(index, "achievements")}
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={() => addListItem("experience", { ...EMPTY_EXPERIENCE })}
        className="btn-soft w-full"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M10 4a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 0 1 1-1Z" />
        </svg>
        Add another role
      </button>
    </BuilderShell>
  );
}
