import Link from "next/link";
import Nav from "./Components/nav";
import Footer from "./Components/footer";

function StepCard({ n, title, body }) {
  return (
    <div className="card group relative overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1">
      <span className="font-display text-5xl font-bold text-brand-100 transition-colors group-hover:text-brand-200">
        {n}
      </span>
      <h3 className="mt-2 text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{body}</p>
    </div>
  );
}

// A lightweight CSS mockup of a resume — no heavy images.
function ResumePreview() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand-radial blur-2xl" />
      <div className="animate-float rounded-2xl border border-ink-200 bg-white p-3 shadow-card">
        <div className="flex overflow-hidden rounded-xl">
          <div className="w-[38%] space-y-3 bg-gradient-to-b from-brand-600 to-brand-800 p-4">
            <div className="mx-auto h-14 w-14 rounded-full bg-white/25" />
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-1.5">
                <div className="h-1.5 w-10 rounded bg-brand-200/80" />
                <div className="h-1.5 w-full rounded bg-white/30" />
                <div className="h-1.5 w-2/3 rounded bg-white/30" />
              </div>
            ))}
          </div>
          <div className="w-[62%] space-y-3 p-4">
            <div className="h-3 w-2/3 rounded bg-ink-800" />
            <div className="h-1.5 w-1/3 rounded bg-brand-400" />
            <div className="space-y-1.5 pt-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 rounded bg-ink-200"
                  style={{ width: `${90 - (i % 3) * 18}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-ink-50">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-grid-faint [background-size:32px_32px]">
        <div className="absolute inset-0 -z-10 bg-brand-radial" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-2 lg:pb-24 lg:pt-36">
          <div className="animate-fade-up text-center lg:text-left">
            <span className="eyebrow">Free · No sign-up</span>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] text-ink-900 sm:text-5xl lg:text-6xl">
              Build a{" "}
              <span className="text-gradient">resume</span> that lands the{" "}
              <span className="text-gradient">interview</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-md text-balance text-base leading-relaxed text-ink-500 lg:mx-0 lg:text-lg">
              Fill in your details, pick a clean template, and download a
              recruiter-ready resume in minutes. It’s fast, simple, and yours.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link href="/resume/personal-info" className="btn-primary w-full sm:w-auto">
                Start building — it’s free
              </Link>
              <Link href="/resume" className="btn-ghost w-full sm:w-auto">
                How it works
              </Link>
            </div>
            <p className="mt-5 text-xs text-ink-400">
              Your data never leaves your browser.
            </p>
          </div>

          <div className="animate-fade-in lg:pl-8">
            <ResumePreview />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl">
            Three steps to a standout resume
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <StepCard
            n="1"
            title="Fill in your details"
            body="Add your experience, education, and skills with a guided, distraction-free form."
          />
          <StepCard
            n="2"
            title="Pick a template"
            body="Choose between polished, recruiter-friendly layouts that adapt to your content."
          />
          <StepCard
            n="3"
            title="Download & apply"
            body="Export a crisp, high-resolution resume and start landing more interviews."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-14 text-center shadow-glow">
          <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
            Ready to get hired faster?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-brand-50/90">
            Your next opportunity starts with a great resume. Build yours now.
          </p>
          <Link
            href="/resume/personal-info"
            className="btn mt-7 bg-white text-brand-700 hover:bg-brand-50 hover:-translate-y-0.5"
          >
            Create my resume
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
