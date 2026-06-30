"use client";

import BuilderShell from "@/app/Components/BuilderShell";
import Field from "@/app/Components/ui/Field";
import TextArea from "@/app/Components/ui/TextArea";
import { useResume } from "@/app/context/ResumeContext";

export default function PersonalInfoPage() {
  const { data, updateSection } = useResume();
  const p = data.personalInfo;
  const set = (field) => (e) =>
    updateSection("personalInfo", { [field]: e.target.value });

  return (
    <BuilderShell
      step="personal-info"
      title="Personal information"
      description="Start with the basics. This headlines your resume."
      nextHref="/resume/education"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="First name"
          placeholder="Jane"
          value={p.firstName}
          onChange={set("firstName")}
        />
        <Field
          label="Last name"
          placeholder="Doe"
          value={p.lastName}
          onChange={set("lastName")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Profession"
          placeholder="Product Designer"
          value={p.profession}
          onChange={set("profession")}
        />
        <Field
          label="Address"
          placeholder="123 Market St"
          value={p.address}
          onChange={set("address")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="City" placeholder="San Francisco" value={p.city} onChange={set("city")} />
        <Field label="State" placeholder="CA" value={p.state} onChange={set("state")} />
        <Field label="Zip code" placeholder="94103" value={p.zipCode} onChange={set("zipCode")} />
      </div>

      <TextArea
        label="Professional summary"
        hint="2–3 sentences on who you are and what you do best."
        rows={5}
        placeholder="Results-driven designer with 5+ years crafting intuitive products…"
        value={p.about}
        onChange={set("about")}
      />
    </BuilderShell>
  );
}
