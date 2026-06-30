"use client";

import Link from "next/link";

const TEMPLATES = [
  { id: "template", label: "Classic", href: "/resume/template" },
  { id: "template2", label: "Minimal", href: "/resume/template2" },
];

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
    </svg>
  );
}

export default function TemplateControls({
  active,
  onDownload,
  isDownloading,
  onPhotoChange,
  hasPhoto,
}) {
  return (
    <div className="card mx-auto flex w-full max-w-xl flex-col gap-4 p-4 sm:p-5">
      {/* Template switcher */}
      <div className="flex rounded-full bg-ink-100 p-1">
        {TEMPLATES.map((t) => {
          const isActive = t.id === active;
          return (
            <Link
              key={t.id}
              href={t.href}
              className={`flex-1 rounded-full px-4 py-2 text-center text-sm font-semibold transition-all ${
                isActive
                  ? "bg-white text-ink-900 shadow-sm"
                  : "text-ink-500 hover:text-ink-800"
              }`}
            >
              {t.label}
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        {onPhotoChange && (
          <label className="flex-1 cursor-pointer">
            <span className="field-label">Profile photo</span>
            <div className="flex items-center gap-3 rounded-xl border border-dashed border-ink-300 bg-ink-50 px-3 py-2 text-sm text-ink-500 transition-colors hover:border-brand-400 hover:text-ink-700">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M3 16l5-5 4 4 3-3 6 6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <rect x="3" y="4" width="18" height="16" rx="2" />
              </svg>
              {hasPhoto ? "Change photo" : "Upload photo"}
            </div>
            <input type="file" accept="image/*" onChange={onPhotoChange} className="hidden" />
          </label>
        )}

        <button
          onClick={onDownload}
          disabled={isDownloading}
          className="btn-primary mt-auto h-[42px] flex-1"
        >
          {isDownloading ? (
            "Generating…"
          ) : (
            <>
              <DownloadIcon /> Download PNG
            </>
          )}
        </button>
      </div>

      <Link
        href="/resume/skills"
        className="text-center text-sm font-medium text-ink-400 transition-colors hover:text-brand-600"
      >
        ← Back to editing
      </Link>
    </div>
  );
}
