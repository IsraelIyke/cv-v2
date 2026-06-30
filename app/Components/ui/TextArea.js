"use client";

export default function TextArea({
  label,
  hint,
  required = false,
  className = "",
  containerClassName = "",
  ...textareaProps
}) {
  return (
    <div className={`flex flex-col ${containerClassName}`}>
      {label && (
        <label className="field-label" htmlFor={textareaProps.id}>
          {label}
          {required && <span className="ml-0.5 text-brand-600">*</span>}
        </label>
      )}
      <textarea
        className={`field-input resize-y leading-relaxed ${className}`}
        {...textareaProps}
      />
      {hint && <p className="mt-1 text-xs text-ink-400">{hint}</p>}
    </div>
  );
}
