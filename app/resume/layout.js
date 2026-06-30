import { ResumeProvider } from "@/app/context/ResumeContext";

export const metadata = {
  title: "Build your resume",
};

export default function ResumeLayout({ children }) {
  return <ResumeProvider>{children}</ResumeProvider>;
}
