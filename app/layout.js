import { Inter, Sora } from "next/font/google";
import "./globals.css";
import CookieBanner from "./Components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://ugproject.app"),
  title: {
    default: "ugProject — Build a resume that gets you hired",
    template: "%s · ugProject",
  },
  description:
    "A fast, free resume builder. Fill in your details, pick a clean template, and download a recruiter-ready resume in minutes.",
  keywords: ["resume builder", "cv maker", "free resume", "ugProject"],
  authors: [{ name: "Israel Nwangwu" }],
  openGraph: {
    title: "ugProject — Build a resume that gets you hired",
    description:
      "Fill in your details, pick a clean template, and download a recruiter-ready resume in minutes.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#ea580c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
