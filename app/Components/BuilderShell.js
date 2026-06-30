"use client";

import Link from "next/link";
import Nav from "./nav";
import Stepper from "./Stepper";

function Arrow({ dir = "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${dir === "left" ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/**
 * Consistent chrome for every builder step: nav, progress stepper, a titled
 * content card and the prev/next controls. Data persistence is handled by the
 * ResumeProvider, so navigation never loses progress.
 */
export default function BuilderShell({
  step,
  title,
  description,
  children,
  prevHref,
  nextHref,
  nextLabel = "Continue",
}) {
  return (
    <div className="min-h-screen bg-ink-50">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[14rem_1fr]">
          <aside className="lg:pt-2">
            <Stepper current={step} />
          </aside>

          <section className="card animate-fade-up p-6 sm:p-8">
            <header className="mb-7 border-b border-ink-100 pb-5">
              <h1 className="text-2xl font-bold text-ink-900">{title}</h1>
              {description && (
                <p className="mt-1.5 text-sm text-ink-500">{description}</p>
              )}
            </header>

            <div className="space-y-6">{children}</div>

            <div className="mt-9 flex items-center justify-between border-t border-ink-100 pt-6">
              {prevHref ? (
                <Link href={prevHref} className="btn-ghost">
                  <Arrow dir="left" />
                  Back
                </Link>
              ) : (
                <span />
              )}
              <Link href={nextHref} className="btn-primary">
                {nextLabel}
                <Arrow />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
