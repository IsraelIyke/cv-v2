"use client";

/**
 * Labeled text input. Keeps every form field visually consistent and
 * removes the repeated arbitrary-value markup the old pages used.
 */
export default function Field({
  label,
  hint,
  required = false,
  className = "",
  containerClassName = "",
  ...inputProps
}) {
  return (
    <div className={`flex flex-col ${containerClassName}`}>
      {label && (
        <label className="field-label" htmlFor={inputProps.id}>
          {label}
          {required && <span className="ml-0.5 text-brand-600">*</span>}
        </label>
      )}
      <input className={`field-input ${className}`} {...inputProps} />
      {hint && <p className="mt-1 text-xs text-ink-400">{hint}</p>}
    </div>
  );
}
