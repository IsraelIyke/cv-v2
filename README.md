# ugProject — Resume Builder

A fast, free **resume builder**. Fill in your details through a guided multi-step
flow, pick a clean template, and download a recruiter-ready resume as a
high-resolution PNG — all in the browser, with nothing leaving your device.

---

## ✨ Features

- **Guided builder** — a 6-step flow (personal info → education → experience →
  contact → skills → template) with a live progress stepper.
- **Global state + autosave** — all data lives in a single React Context
  (`ResumeProvider`) and is persisted to `localStorage`, so progress survives
  page reloads and navigating between steps.
- **Dynamic sections** — add/remove education and experience entries; add skills
  and languages as tags.
- **Two polished templates** — *Classic* (warm orange sidebar) and *Minimal*
  (monochrome slate). Switch anytime without losing your data.
- **One-click export** — render the resume to a crisp PNG via `html2canvas`.
- **Cookie/storage consent banner** that remembers the user's choice.
- **Cohesive design system** — custom Tailwind theme (brand palette, typography,
  shadows, motion) and reusable UI primitives.

---

## 🛠 Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- React 18
- Tailwind CSS 3
- `html2canvas` for PNG export
- `react-icons`

---

## 🚀 Getting Started

```bash
git clone https://github.com/IsraelIyke/cv-v2.git
cd cv-v2
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start the dev server       |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint                 |

---

## 🗂 Project Structure

```
app/
  layout.js                Root layout, fonts, metadata, cookie banner
  page.js                  Landing page
  globals.css              Design tokens + reusable component classes
  context/
    ResumeContext.js       Global resume state + localStorage persistence
  Components/
    nav, footer, Stepper, BuilderShell, CookieBanner
    DownloadImageComponent(2), TemplateScaffold, TemplateControls
    ResumeSection.js       Shared resume sidebar blocks
    ui/                    Field, TextArea, TagInput, Logo
  resume/
    layout.js              Wraps the builder in ResumeProvider
    steps.js               Single source of truth for the flow
    personal-info | education | experience | contact | skills
    template | template2   Template preview + export
```

---

## 📄 License

MIT License

## 👤 Author

**Israel Nwangwu**
