export const validateExperience = (exp) => {
  if (!exp) return false;
  return exp.role && exp.role.length > 0;
};

export const formatPhoneNumber = (phone) => {
  if (!phone) return "";
  // Simple formatting, you can enhance this
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
};

export const truncateText = (text, maxLength = 150) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

export const safeRender = (value, fallback = "Not specified") => {
  return value || fallback;
};
