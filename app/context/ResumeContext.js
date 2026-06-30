"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const STORAGE_KEY = "ugproject:resume";

export const EMPTY_EXPERIENCE = {
  companyName: "",
  role: "",
  location: "",
  start: "",
  finish: "",
  isCurrentlyWorking: false,
  achievements: "",
};

export const EMPTY_EDUCATION = {
  institution: "",
  course: "",
  start: "",
  finish: "",
};

const DEFAULT_DATA = {
  personalInfo: {
    firstName: "",
    lastName: "",
    profession: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    about: "",
  },
  education: [{ ...EMPTY_EDUCATION }],
  experience: [{ ...EMPTY_EXPERIENCE }],
  contactInfo: {
    email: "",
    phoneNumber: "",
    linkedin: "",
    portfolio: "",
    github: "",
  },
  skills: [],
  languages: [],
  // Kept in memory only (base64 can exceed the localStorage quota).
  photo: null,
};

/**
 * One-time migration from the old per-section localStorage keys used by the
 * previous version so returning users don't lose their data.
 */
function migrateLegacy() {
  try {
    const read = (k) => {
      const v = localStorage.getItem(k);
      return v ? JSON.parse(v) : null;
    };
    const personal = read("personalInfo");
    const education = read("educationInfo");
    const experience = read("experienceInfo");
    const contact = read("contactInfo");
    const skills = read("skills");
    const languages = read("languages");

    if (!personal && !education && !experience && !contact && !skills) {
      return null;
    }

    const legacyEducation = [];
    if (education) {
      for (const i of [1, 2]) {
        if (education[`institution${i}`] || education[`course${i}`]) {
          legacyEducation.push({
            institution: education[`institution${i}`] || "",
            course: education[`course${i}`] || "",
            start: education[`start${i}`] || "",
            finish: education[`finish${i}`] || "",
          });
        }
      }
    }

    return {
      ...DEFAULT_DATA,
      personalInfo: { ...DEFAULT_DATA.personalInfo, ...(personal || {}) },
      education: legacyEducation.length ? legacyEducation : DEFAULT_DATA.education,
      experience:
        experience?.experiences?.length
          ? experience.experiences
          : DEFAULT_DATA.experience,
      contactInfo: { ...DEFAULT_DATA.contactInfo, ...(contact || {}) },
      skills: (skills?.skills || []).filter((s) => s && s.trim()),
      languages: (languages?.languages || []).filter((l) => l && l.trim()),
    };
  } catch {
    return null;
  }
}

const ResumeContext = createContext(null);

export function ResumeProvider({ children }) {
  const [data, setData] = useState(DEFAULT_DATA);
  const [hydrated, setHydrated] = useState(false);
  const saveTimer = useRef(null);

  // Load once on mount (with legacy migration).
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setData({ ...DEFAULT_DATA, ...JSON.parse(stored), photo: null });
      } else {
        const migrated = migrateLegacy();
        if (migrated) setData(migrated);
      }
    } catch {
      /* ignore corrupt storage */
    } finally {
      setHydrated(true);
    }
  }, []);

  // Autosave to cache (debounced), excluding the in-memory photo.
  useEffect(() => {
    if (!hydrated) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try {
        const { photo, ...persistable } = data;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(persistable));
      } catch {
        /* quota / private mode — fail silently */
      }
    }, 300);
    return () => saveTimer.current && clearTimeout(saveTimer.current);
  }, [data, hydrated]);

  const api = useMemo(() => {
    const setSection = (section, value) =>
      setData((prev) => ({ ...prev, [section]: value }));

    const updateSection = (section, partial) =>
      setData((prev) => ({
        ...prev,
        [section]: { ...prev[section], ...partial },
      }));

    const updateListItem = (section, index, partial) =>
      setData((prev) => {
        const list = [...prev[section]];
        list[index] = { ...list[index], ...partial };
        return { ...prev, [section]: list };
      });

    const addListItem = (section, item) =>
      setData((prev) => ({ ...prev, [section]: [...prev[section], item] }));

    const removeListItem = (section, index) =>
      setData((prev) => ({
        ...prev,
        [section]: prev[section].filter((_, i) => i !== index),
      }));

    const reset = () => setData({ ...DEFAULT_DATA });

    return {
      setSection,
      updateSection,
      updateListItem,
      addListItem,
      removeListItem,
      reset,
    };
  }, []);

  const value = useMemo(
    () => ({ data, hydrated, ...api }),
    [data, hydrated, api]
  );

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
}

export function useResume() {
  const ctx = useContext(ResumeContext);
  if (!ctx) {
    throw new Error("useResume must be used within a <ResumeProvider>");
  }
  return ctx;
}
