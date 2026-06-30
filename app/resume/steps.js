// Single source of truth for the resume builder flow.
export const STEPS = [
  { id: "personal-info", label: "Personal", href: "/resume/personal-info" },
  { id: "education", label: "Education", href: "/resume/education" },
  { id: "experience", label: "Experience", href: "/resume/experience" },
  { id: "contact", label: "Contact", href: "/resume/contact" },
  { id: "skills", label: "Skills", href: "/resume/skills" },
  { id: "template", label: "Template", href: "/resume/template" },
];

export const stepIndex = (id) => STEPS.findIndex((s) => s.id === id);
