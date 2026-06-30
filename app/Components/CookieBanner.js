"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "ugproject:cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  // Only show until the user makes a choice; the choice is remembered.
  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
    } catch {
      /* storage blocked — don't nag */
    }
  }, []);

  const decide = (choice) => {
    try {
      localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto flex max-w-3xl animate-fade-up flex-col items-start gap-4 rounded-2xl border border-ink-200 bg-white/95 p-5 shadow-card backdrop-blur sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z" />
              <path d="M8.5 10.5h.01M12 14.5h.01M15.5 9.5h.01" />
            </svg>
          </span>
          <p className="text-sm leading-relaxed text-ink-600">
            We store your resume details in this browser so your progress isn’t
            lost. No data leaves your device.{" "}
            <span className="font-medium text-ink-800">
              Allow local storage?
            </span>
          </p>
        </div>
        <div className="flex w-full shrink-0 gap-2 sm:w-auto">
          <button
            onClick={() => decide("declined")}
            className="btn-ghost flex-1 !px-4 !py-2 text-[0.8rem] sm:flex-none"
          >
            Decline
          </button>
          <button
            onClick={() => decide("accepted")}
            className="btn-primary flex-1 !px-4 !py-2 text-[0.8rem] sm:flex-none"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
