"use client";

import Nav from "./nav";
import TemplateControls from "./TemplateControls";

export default function TemplateScaffold({ active, controls, children }) {
  return (
    <div className="min-h-screen bg-ink-100">
      <Nav />
      <main className="mx-auto max-w-5xl px-4 pb-24 pt-24 sm:px-6">
        <div className="mb-7 text-center">
          <span className="eyebrow">Final step</span>
          <h1 className="mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">
            Pick a template & download
          </h1>
          <p className="mt-2 text-sm text-ink-500">
            Switch styles anytime — your details stay the same.
          </p>
        </div>

        <TemplateControls active={active} {...controls} />

        {/* A4 sheet — horizontally scrollable on small screens */}
        <div className="mt-9 overflow-x-auto pb-4">
          <div className="mx-auto w-fit animate-fade-up rounded-2xl bg-white p-2 shadow-card ring-1 ring-ink-200">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
