import Link from "next/link";
import Nav from "../Components/nav";
import { STEPS } from "./steps";

export const metadata = { title: "Get started" };

export default function ResumeIntro() {
  const checklist = [
    "Your name, title and a short summary",
    "Education and work history",
    "Contact links and key skills",
  ];

  return (
    <div className="min-h-screen bg-ink-50">
      <Nav />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Let’s begin</span>
          <h1 className="mt-5 text-balance text-4xl font-extrabold text-ink-900 sm:text-5xl">
            Create your professional resume in minutes
          </h1>
          <p className="mt-4 text-ink-500">
            Six quick steps. You can jump between them anytime — your progress is
            saved automatically in your browser.
          </p>
          <Link
            href="/resume/personal-info"
            className="btn-primary mt-8 inline-flex"
          >
            Start building
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <div className="card p-7">
            <h2 className="text-lg font-semibold text-ink-900">
              What you’ll need
            </h2>
            <ul className="mt-4 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-600">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                    <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.29 6.8-6.79a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-7">
            <h2 className="text-lg font-semibold text-ink-900">The steps</h2>
            <ol className="mt-4 space-y-2.5">
              {STEPS.map((step, i) => (
                <li key={step.id} className="flex items-center gap-3 text-sm text-ink-600">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink-100 text-xs font-bold text-ink-500">
                    {i + 1}
                  </span>
                  {step.label}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}
