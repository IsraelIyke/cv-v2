"use client";

import { useState } from "react";

export default function TagInput({
  items = [],
  onChange,
  placeholder = "Type and press Enter",
  max = 30,
}) {
  const [draft, setDraft] = useState("");

  const commit = () => {
    const value = draft.trim();
    if (!value) return;
    if (items.length >= max) return;
    if (items.some((i) => i.toLowerCase() === value.toLowerCase())) {
      setDraft("");
      return;
    }
    onChange([...items, value]);
    setDraft("");
  };

  const remove = (index) => onChange(items.filter((_, i) => i !== index));

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      commit();
    } else if (e.key === "Backspace" && !draft && items.length) {
      remove(items.length - 1);
    }
  };

  return (
    <div className="field-input flex flex-wrap items-center gap-2 !py-2">
      {items.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 py-1 pl-3 pr-1.5 text-sm font-medium text-brand-700 ring-1 ring-inset ring-brand-200"
        >
          {item}
          <button
            type="button"
            onClick={() => remove(i)}
            className="grid h-4 w-4 place-items-center rounded-full text-brand-500 transition-colors hover:bg-brand-200 hover:text-brand-800"
            aria-label={`Remove ${item}`}
          >
            <svg viewBox="0 0 14 14" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 3l8 8M11 3l-8 8" />
            </svg>
          </button>
        </span>
      ))}
      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={onKeyDown}
        onBlur={commit}
        placeholder={items.length ? "" : placeholder}
        className="min-w-[8rem] flex-1 bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-400"
      />
    </div>
  );
}
