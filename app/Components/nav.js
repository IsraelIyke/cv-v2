import Link from "next/link";
import Logo from "./ui/Logo";

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-30 border-b border-ink-200/70 bg-ink-50/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/"
            className="hidden text-sm font-medium text-ink-600 transition-colors hover:text-ink-900 sm:block"
          >
            Home
          </Link>
          <Link href="/resume/personal-info" className="btn-primary !py-2 !px-4 text-[0.8rem]">
            Build resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
