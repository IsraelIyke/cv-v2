import Link from "next/link";

export default function Logo({ href = "/", className = "" }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 ${className}`}
      aria-label="ugProject home"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow transition-transform duration-300 group-hover:-rotate-6">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 4h7l4 4v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
          <path d="M13 4v5h5" />
          <path d="M9.5 13.5h5M9.5 16.5h3.5" />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight text-ink-900">
        ug<span className="text-brand-600">·Project</span>
      </span>
    </Link>
  );
}
