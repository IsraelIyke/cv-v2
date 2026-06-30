"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import html2canvas from "html2canvas";
import Nav from "./nav";
import ResumeDocument, { PAGE_W, PAGE_H } from "./ResumeDocument";
import { useResume } from "@/app/context/ResumeContext";
import {
  TEMPLATES,
  getTemplate,
  layoutLabel,
  LAYOUTS,
} from "@/app/resume/templates";

const THUMB_SCALE = 0.22;

function Icon({ d }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export default function TemplateStudio() {
  const { data, setSection } = useResume();
  const previewRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const selected = getTemplate(data.templateId);
  const supportsPhoto = selected.layout !== LAYOUTS.SINGLE;
  const fileBase = `resume_${data.personalInfo.firstName || "untitled"}_${selected.id}`;

  const choose = (id) => setSection("templateId", id);

  const handlePhoto = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return alert("Please select a valid image file.");
    if (file.size > 5 * 1024 * 1024) return alert("Image size should be less than 5MB.");
    const reader = new FileReader();
    reader.onload = (e) => setSection("photo", e.target.result);
    reader.readAsDataURL(file);
  };

  // Selectable-text, multi-page PDF via the browser's own print engine.
  const downloadPdf = useCallback(() => {
    const node = previewRef.current;
    if (!node) return;
    const iframe = document.createElement("iframe");
    iframe.setAttribute("aria-hidden", "true");
    Object.assign(iframe.style, {
      position: "fixed",
      right: "0",
      bottom: "0",
      width: "0",
      height: "0",
      border: "0",
      visibility: "hidden",
    });
    document.body.appendChild(iframe);
    const idoc = iframe.contentWindow.document;
    idoc.open();
    idoc.write(
      `<!doctype html><html><head><meta charset="utf-8">` +
        `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap">` +
        `<style>` +
        `:root{--font-inter:'Inter',Arial,sans-serif}` +
        // Reset like Tailwind's preflight so the PDF matches the preview;
        // inline styles still win, so intended spacing is preserved.
        `*{margin:0;padding:0;box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}` +
        `@page{size:A4 portrait;margin:0}` +
        `html,body{margin:0;padding:0;background:#fff}` +
        `.resume-doc{box-shadow:none!important}` +
        `.resume-entry{break-inside:avoid;page-break-inside:avoid}` +
        `</style></head><body>${node.outerHTML}</body></html>`
    );
    idoc.close();
    const run = () => {
      try {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      } finally {
        setTimeout(() => iframe.remove(), 1500);
      }
    };
    // Give the webfont + layout a beat to settle before printing.
    iframe.onload = () => setTimeout(run, 400);
  }, []);

  const downloadPng = useCallback(async () => {
    const node = previewRef.current;
    if (!node || isDownloading) return;
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(node, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        windowWidth: PAGE_W,
      });
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/png", 1.0);
      a.download = `${fileBase}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Failed to generate image. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  }, [fileBase, isDownloading]);

  return (
    <div className="min-h-screen bg-ink-100">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-24 sm:px-6">
        <div className="mb-7 text-center">
          <span className="eyebrow">Final step</span>
          <h1 className="mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">
            Choose a template and download
          </h1>
          <p className="mt-2 text-sm text-ink-500">
            {TEMPLATES.length} styles. Your details stay the same when you switch.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem]">
          {/* Preview + controls */}
          <div>
            <div className="card mb-6 flex flex-col gap-4 p-4 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row">
                {supportsPhoto && (
                  <label className="flex-1 cursor-pointer">
                    <span className="field-label">Profile photo</span>
                    <div className="flex items-center gap-2 rounded-xl border border-dashed border-ink-300 bg-ink-50 px-3 py-2.5 text-sm text-ink-500 transition-colors hover:border-brand-400 hover:text-ink-700">
                      <Icon d="M3 16l5-5 4 4 3-3 6 6M3 5h18v14H3z" />
                      {data.photo ? "Change photo" : "Upload photo"}
                    </div>
                    <input type="file" accept="image/*" onChange={handlePhoto} className="hidden" />
                  </label>
                )}
                <div className="flex flex-1 items-end gap-2">
                  <button onClick={downloadPdf} className="btn-primary h-[42px] flex-1">
                    <Icon d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" /> Download PDF
                  </button>
                  <button
                    onClick={downloadPng}
                    disabled={isDownloading}
                    className="btn-ghost h-[42px] flex-1"
                  >
                    {isDownloading ? "Saving…" : "PNG"}
                  </button>
                </div>
              </div>
              <p className="text-center text-xs text-ink-400">
                PDF keeps text selectable and searchable, and flows onto extra
                pages automatically. Choose &ldquo;Save as PDF&rdquo; in the dialog.
              </p>
              <Link
                href="/resume/skills"
                className="text-center text-sm font-medium text-ink-400 transition-colors hover:text-brand-600"
              >
                Back to editing
              </Link>
            </div>

            {/* A4 preview with faint page-break guides */}
            <div className="overflow-x-auto pb-2">
              <div
                className="relative mx-auto bg-white shadow-card ring-1 ring-ink-200"
                style={{ width: PAGE_W }}
              >
                <ResumeDocument
                  template={selected}
                  data={data}
                  innerRef={previewRef}
                  className="resume-sheet"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, transparent 0, transparent " +
                      (PAGE_H - 1) +
                      "px, rgba(225,29,72,0.25) " +
                      (PAGE_H - 1) +
                      "px, rgba(225,29,72,0.25) " +
                      PAGE_H +
                      "px)",
                  }}
                />
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-ink-400">
              The red guide marks each A4 page boundary.
            </p>
          </div>

          {/* Gallery */}
          <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
            <h2 className="mb-3 text-sm font-semibold text-ink-700">
              All templates
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {TEMPLATES.map((t) => {
                const active = t.id === selected.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => choose(t.id)}
                    className={`group overflow-hidden rounded-xl border bg-white text-left transition-all ${
                      active
                        ? "border-brand-500 ring-2 ring-brand-500/40"
                        : "border-ink-200 hover:border-brand-300 hover:shadow-soft"
                    }`}
                  >
                    <div
                      className="relative overflow-hidden bg-ink-50"
                      style={{ width: "100%", height: PAGE_H * THUMB_SCALE }}
                    >
                      <div
                        className="pointer-events-none absolute left-1/2 top-0 origin-top"
                        style={{
                          width: PAGE_W,
                          transform: `translateX(-50%) scale(${THUMB_SCALE})`,
                        }}
                      >
                        <ResumeDocument template={t} data={data} sample />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-1 px-2.5 py-1.5">
                      <span className={`truncate text-xs font-semibold ${active ? "text-brand-700" : "text-ink-700"}`}>
                        {t.name}
                      </span>
                      <span className="shrink-0 text-[0.6rem] uppercase tracking-wide text-ink-400">
                        {layoutLabel(t.layout)}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
