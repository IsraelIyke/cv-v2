"use client";

import { useCallback, useRef, useState } from "react";
import html2canvas from "html2canvas";

/**
 * Shared PNG export logic for the resume templates.
 * Returns a ref to attach to the A4 sheet plus a download handler.
 */
export function useResumeExport(filenameBase = "resume") {
  const ref = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const download = useCallback(async () => {
    if (!ref.current || isDownloading) return;
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(ref.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });
      const dataUrl = canvas.toDataURL("image/png", 1.0);
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `${filenameBase || "resume"}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Failed to generate resume. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  }, [isDownloading, filenameBase]);

  return { ref, isDownloading, download };
}
