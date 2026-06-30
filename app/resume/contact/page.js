"use client";

import BuilderShell from "@/app/Components/BuilderShell";
import Field from "@/app/Components/ui/Field";
import { useResume } from "@/app/context/ResumeContext";

export default function ContactPage() {
  const { data, updateSection } = useResume();
  const c = data.contactInfo;
  const set = (field) => (e) =>
    updateSection("contactInfo", { [field]: e.target.value });

  return (
    <BuilderShell
      step="contact"
      title="Contact & links"
      description="How recruiters reach you and see your work."
      prevHref="/resume/experience"
      nextHref="/resume/skills"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Email address"
          type="email"
          placeholder="jane@example.com"
          value={c.email}
          onChange={set("email")}
        />
        <Field
          label="Phone number"
          type="tel"
          placeholder="(555) 123-4567"
          value={c.phoneNumber}
          onChange={set("phoneNumber")}
        />
        <Field
          label="LinkedIn"
          placeholder="linkedin.com/in/jane"
          value={c.linkedin}
          onChange={set("linkedin")}
        />
        <Field
          label="Portfolio"
          placeholder="janedoe.com"
          value={c.portfolio}
          onChange={set("portfolio")}
        />
        <Field
          label="GitHub"
          placeholder="github.com/jane"
          value={c.github}
          onChange={set("github")}
          containerClassName="sm:col-span-2"
        />
      </div>
    </BuilderShell>
  );
}
