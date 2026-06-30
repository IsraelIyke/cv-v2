// Single renderer for every template. Sized at true A4 width (794px @96dpi)
// and laid out in normal document flow so the browser can paginate it onto
// multiple pages when printed to PDF. All colors are inline so any palette
// renders correctly in both html2canvas (PNG) and the print pipeline (PDF).
import React from "react";
import { PALETTES, LAYOUTS } from "@/app/resume/templates";

export const PAGE_W = 794; // A4 width  @96dpi
export const PAGE_H = 1123; // A4 height @96dpi

const SAMPLE = {
  personalInfo: {
    firstName: "Alex",
    lastName: "Carter",
    profession: "Marketing Manager",
    about:
      "Growth-focused marketing manager with 7+ years building campaigns that convert. I blend data, storytelling and design to grow brands.",
    city: "New York",
    state: "NY",
    address: "200 Park Ave",
  },
  contactInfo: {
    email: "alex.carter@email.com",
    phoneNumber: "(555) 234-1980",
    linkedin: "linkedin.com/in/alexcarter",
    portfolio: "alexcarter.com",
    github: "github.com/alexc",
  },
  education: [
    { institution: "New York University", course: "B.A. Marketing", start: "2013", finish: "2017" },
  ],
  experience: [
    {
      role: "Marketing Manager",
      companyName: "Brightwave",
      location: "New York",
      start: "2021",
      finish: "Present",
      achievements:
        "Led a team of 5 to grow inbound leads by 140% and cut CAC by 28% through lifecycle campaigns.",
    },
    {
      role: "Growth Marketer",
      companyName: "Northwind",
      location: "Remote",
      start: "2017",
      finish: "2021",
      achievements:
        "Owned paid + email channels driving $3.2M in pipeline; scaled the blog to 90k monthly readers.",
    },
  ],
  skills: ["Brand Strategy", "SEO", "Paid Media", "Analytics", "Copywriting", "Figma"],
  languages: ["English", "Spanish"],
  photo: null,
};

const hexToRgba = (hex, a) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return hex;
  const [, r, g, b] = m;
  return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${a})`;
};

const fullName = (p) =>
  [p.firstName, p.lastName].filter(Boolean).join(" ") || "Your Name";

// ---- Shared blocks (color-agnostic via `col`) -----------------------------

const Heading = ({ children, col }) => (
  <div style={{ marginBottom: 9 }}>
    <div
      style={{
        fontSize: 10.5,
        fontWeight: 700,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: col.heading,
      }}
    >
      {children}
    </div>
    <div style={{ height: 2, width: 32, marginTop: 5, background: col.rule, borderRadius: 2 }} />
  </div>
);

const Detail = ({ label, value, col }) =>
  value ? (
    <div style={{ marginBottom: 7, lineHeight: 1.3 }}>
      <div
        style={{
          fontSize: 8,
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: col.muted,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 11, color: col.text, wordBreak: "break-word" }}>{value}</div>
    </div>
  ) : null;

const ContactBlock = ({ contact, personal, col }) => {
  const address = [personal.address, personal.city, personal.state].filter(Boolean).join(", ");
  if (!contact.email && !contact.phoneNumber && !address) return null;
  return (
    <section>
      <Heading col={col}>Contact</Heading>
      <Detail label="Email" value={contact.email} col={col} />
      <Detail label="Phone" value={contact.phoneNumber} col={col} />
      <Detail label="Location" value={address} col={col} />
    </section>
  );
};

const LinksBlock = ({ contact, col }) => {
  if (!contact.linkedin && !contact.portfolio && !contact.github) return null;
  return (
    <section>
      <Heading col={col}>Links</Heading>
      <Detail label="Portfolio" value={contact.portfolio} col={col} />
      <Detail label="LinkedIn" value={contact.linkedin} col={col} />
      <Detail label="GitHub" value={contact.github} col={col} />
    </section>
  );
};

const EducationBlock = ({ education, col }) => {
  const items = education.filter((e) => e && (e.institution || e.course));
  if (!items.length) return null;
  return (
    <section>
      <Heading col={col}>Education</Heading>
      {items.map((e, i) => (
        <div key={i} className="resume-entry" style={{ marginBottom: 9 }}>
          <div style={{ fontSize: 11.5, fontWeight: 600, color: col.text }}>{e.institution}</div>
          {e.course && <div style={{ fontSize: 10.5, color: col.muted }}>{e.course}</div>}
          {(e.start || e.finish) && (
            <div style={{ fontSize: 9.5, color: col.muted }}>
              {[e.start, e.finish].filter(Boolean).join(" – ")}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

const SkillsBlock = ({ skills, col, mode = "bullets", accent }) => {
  const items = skills.filter((s) => s && s.trim());
  if (!items.length) return null;
  return (
    <section>
      <Heading col={col}>Skills</Heading>
      {mode === "pills" ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {items.map((s, i) => (
            <span
              key={i}
              style={{
                fontSize: 10,
                fontWeight: 500,
                color: accent,
                background: hexToRgba(accent, 0.1),
                border: `1px solid ${hexToRgba(accent, 0.25)}`,
                borderRadius: 999,
                padding: "3px 10px",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {items.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: col.text }}>
              <span style={{ width: 5, height: 5, borderRadius: 999, background: col.dot, flexShrink: 0 }} />
              {s}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

const LanguagesBlock = ({ languages, col }) => {
  const items = languages.filter((l) => l && l.trim());
  if (!items.length) return null;
  return (
    <section>
      <Heading col={col}>Languages</Heading>
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {items.map((l, i) => (
          <div key={i} style={{ fontSize: 11, color: col.text }}>
            {l}
          </div>
        ))}
      </div>
    </section>
  );
};

const ProfileBlock = ({ about, col }) =>
  about ? (
    <section>
      <Heading col={col}>Profile</Heading>
      <p style={{ fontSize: 11, lineHeight: 1.55, color: col.muted }}>{about}</p>
    </section>
  ) : null;

const ExperienceBlock = ({ experience, col }) => {
  const items = experience.filter((e) => e && e.role);
  return (
    <section>
      <Heading col={col}>Experience</Heading>
      {items.length ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
          {items.map((e, i) => (
            <div key={i} className="resume-entry">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: col.text }}>{e.role}</div>
                <div style={{ fontSize: 9.5, color: col.muted, flexShrink: 0 }}>
                  {[e.start, e.finish].filter(Boolean).join(" – ")}
                </div>
              </div>
              <div style={{ fontSize: 10.5, fontWeight: 500, color: col.accent }}>
                {[e.companyName, e.location].filter(Boolean).join(" · ")}
              </div>
              {e.achievements && (
                <p style={{ fontSize: 10.5, lineHeight: 1.5, color: col.muted, marginTop: 3 }}>
                  {e.achievements}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p style={{ fontSize: 10.5, fontStyle: "italic", color: col.muted }}>
          Your work experience will appear here.
        </p>
      )}
    </section>
  );
};

const Photo = ({ src, size, ring }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: 999,
      overflow: "hidden",
      flexShrink: 0,
      border: `3px solid ${ring}`,
      background: "rgba(255,255,255,0.15)",
    }}
  >
    {src ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    ) : null}
  </div>
);

// ---- Layout engines -------------------------------------------------------

function SidebarLayout({ data, p, side, gradient, accent, accentDark }) {
  const dark = { heading: accentDark, rule: accentDark, text: "#ffffff", muted: "rgba(255,255,255,0.62)", dot: accentDark, accent: accentDark };
  const light = { heading: accent, rule: accent, text: "#1c1917", muted: "#57534e", dot: accent, accent };

  const aside = (
    <aside style={{ width: "36%", background: gradient, color: "#fff", padding: "30px 24px", display: "flex", flexDirection: "column", gap: 20 }}>
      <Photo src={data.photo} size={96} ring="rgba(255,255,255,0.35)" />
      <ContactBlock contact={data.contactInfo} personal={p} col={dark} />
      <LinksBlock contact={data.contactInfo} col={dark} />
      <EducationBlock education={data.education} col={dark} />
      <SkillsBlock skills={data.skills} col={dark} />
      <LanguagesBlock languages={data.languages} col={dark} />
    </aside>
  );

  const main = (
    <main style={{ width: "64%", padding: "34px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
      <header>
        <div style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.05, color: "#1c1917", letterSpacing: "-0.01em" }}>
          {p.firstName || "Your"} <span style={{ color: accent }}>{p.lastName || "Name"}</span>
        </div>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#78716c", marginTop: 6 }}>
          {p.profession || "Your Profession"}
        </div>
      </header>
      <ProfileBlock about={p.about} col={light} />
      <ExperienceBlock experience={data.experience} col={light} />
    </main>
  );

  return (
    <div style={{ display: "flex", minHeight: PAGE_H }}>
      {side === "left" ? (<>{aside}{main}</>) : (<>{main}{aside}</>)}
    </div>
  );
}

function HeaderBandLayout({ data, p, gradient, accent, accentDark }) {
  const light = { heading: accent, rule: accent, text: "#1c1917", muted: "#57534e", dot: accent, accent };
  return (
    <div style={{ minHeight: PAGE_H, display: "flex", flexDirection: "column" }}>
      <header style={{ background: gradient, color: "#fff", padding: "30px 36px", display: "flex", alignItems: "center", gap: 20 }}>
        <Photo src={data.photo} size={84} ring="rgba(255,255,255,0.35)" />
        <div>
          <div style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.01em" }}>{fullName(p)}</div>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", marginTop: 6 }}>
            {p.profession || "Your Profession"}
          </div>
        </div>
      </header>
      <div style={{ display: "flex", flex: 1 }}>
        <main style={{ width: "62%", padding: "30px 30px", display: "flex", flexDirection: "column", gap: 20 }}>
          <ProfileBlock about={p.about} col={light} />
          <ExperienceBlock experience={data.experience} col={light} />
        </main>
        <aside style={{ width: "38%", padding: "30px 26px", background: "#fafaf9", borderLeft: "1px solid #e7e5e4", display: "flex", flexDirection: "column", gap: 18 }}>
          <ContactBlock contact={data.contactInfo} personal={p} col={light} />
          <LinksBlock contact={data.contactInfo} col={light} />
          <EducationBlock education={data.education} col={light} />
          <SkillsBlock skills={data.skills} col={light} mode="pills" accent={accent} />
          <LanguagesBlock languages={data.languages} col={light} />
        </aside>
      </div>
    </div>
  );
}

function SingleLayout({ data, p, accent }) {
  const light = { heading: accent, rule: accent, text: "#1c1917", muted: "#57534e", dot: accent, accent };
  const contactLine = [
    data.contactInfo.email,
    data.contactInfo.phoneNumber,
    [p.city, p.state].filter(Boolean).join(", "),
    data.contactInfo.linkedin,
    data.contactInfo.portfolio,
  ].filter(Boolean);

  return (
    <div style={{ minHeight: PAGE_H, padding: "40px 46px", display: "flex", flexDirection: "column", gap: 20 }}>
      <header style={{ textAlign: "center", borderBottom: `2px solid ${accent}`, paddingBottom: 14 }}>
        <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.01em", color: "#1c1917" }}>{fullName(p)}</div>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: accent, marginTop: 6 }}>
          {p.profession || "Your Profession"}
        </div>
        {contactLine.length > 0 && (
          <div style={{ fontSize: 10, color: "#57534e", marginTop: 9 }}>{contactLine.join("  ·  ")}</div>
        )}
      </header>
      <ProfileBlock about={p.about} col={light} />
      <ExperienceBlock experience={data.experience} col={light} />
      <EducationBlock education={data.education} col={light} />
      <SkillsBlock skills={data.skills} col={light} mode="pills" accent={accent} />
      <LanguagesBlock languages={data.languages} col={light} />
    </div>
  );
}

export default function ResumeDocument({
  template,
  data,
  sample = false,
  innerRef,
  className = "",
}) {
  const palette = PALETTES[template.palette] || PALETTES.ember;
  const gradient = `linear-gradient(160deg, ${palette.from}, ${palette.to})`;
  const d = sample ? SAMPLE : data;
  const p = d.personalInfo || {};

  let body;
  if (template.layout === LAYOUTS.SIDEBAR_LEFT) {
    body = <SidebarLayout data={d} p={p} side="left" gradient={gradient} accent={palette.accent} accentDark={palette.accentDark} />;
  } else if (template.layout === LAYOUTS.SIDEBAR_RIGHT) {
    body = <SidebarLayout data={d} p={p} side="right" gradient={gradient} accent={palette.accent} accentDark={palette.accentDark} />;
  } else if (template.layout === LAYOUTS.HEADER_BAND) {
    body = <HeaderBandLayout data={d} p={p} gradient={gradient} accent={palette.accent} accentDark={palette.accentDark} />;
  } else {
    body = <SingleLayout data={d} p={p} accent={palette.accent} />;
  }

  return (
    <div
      ref={innerRef}
      className={`resume-doc ${className}`}
      style={{
        width: PAGE_W,
        minHeight: PAGE_H,
        background: "#ffffff",
        color: "#1c1917",
        fontFamily: "var(--font-inter), Arial, sans-serif",
      }}
    >
      {body}
    </div>
  );
}
