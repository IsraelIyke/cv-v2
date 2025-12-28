export const loadFromLocalStorage = (key, defaultValue = {}) => {
  if (typeof window === "undefined") return defaultValue;

  try {
    const item = localStorage.getItem(key);
    if (!item) return defaultValue;

    return JSON.parse(item);
  } catch (error) {
    console.error(`Error parsing localStorage item "${key}":`, error);
    return defaultValue;
  }
};

export const saveToLocalStorage = (key, value) => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving to localStorage "${key}":`, error);
  }
};

export const getDefaultResumeData = () => ({
  personalInfo: {
    firstName: "",
    lastName: "",
    profession: "",
    about: "",
    address: "",
  },
  educationInfo: {
    institution1: "",
    course1: "",
    start1: "",
    finish1: "",
    institution2: "",
    course2: "",
    start2: "",
    finish2: "",
  },
  experienceInfo: {
    experiences: [],
  },
  contactInfo: {
    phoneNumber: "",
    email: "",
    portfolio: "",
    linkedin: "",
    github: "",
  },
  skillsInfo: {
    skills: [],
  },
  languagesInfo: {
    languages: [],
  },
});
