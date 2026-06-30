import Logo from "./ui/Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <Logo />
        <p className="text-sm text-ink-500">
          © {year} ugProject. Built to help you get hired.
        </p>
        <p className="text-sm text-ink-400">
          Crafted by <span className="font-medium text-ink-600">Israel Nwangwu</span>
        </p>
      </div>
    </footer>
  );
}
