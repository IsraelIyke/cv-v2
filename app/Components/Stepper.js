"use client";

import Link from "next/link";
import { STEPS, stepIndex } from "@/app/resume/steps";

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.29 6.8-6.79a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Stepper({ current }) {
  const currentIdx = stepIndex(current);

  return (
    <nav aria-label="Progress" className="lg:sticky lg:top-24">
      {/* Mobile: compact progress bar */}
      <div className="lg:hidden">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-semibold text-ink-900">
            {STEPS[currentIdx]?.label}
          </span>
          <span className="text-ink-400">
            Step {currentIdx + 1} of {STEPS.length}
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-600 transition-all duration-500"
            style={{ width: `${((currentIdx + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop: vertical step list */}
      <ol className="hidden lg:flex lg:flex-col lg:gap-1">
        {STEPS.map((step, i) => {
          const isCurrent = i === currentIdx;
          const isDone = i < currentIdx;
          return (
            <li key={step.id}>
              <Link
                href={step.href}
                aria-current={isCurrent ? "step" : undefined}
                className={`group flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors ${
                  isCurrent
                    ? "bg-brand-50 ring-1 ring-inset ring-brand-200"
                    : "hover:bg-ink-100"
                }`}
              >
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold transition-colors ${
                    isCurrent
                      ? "bg-brand-600 text-white shadow-glow"
                      : isDone
                      ? "bg-brand-100 text-brand-700"
                      : "bg-ink-200 text-ink-500 group-hover:bg-ink-300"
                  }`}
                >
                  {isDone ? <Check /> : i + 1}
                </span>
                <span
                  className={`text-sm font-medium ${
                    isCurrent ? "text-brand-800" : "text-ink-600"
                  }`}
                >
                  {step.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
