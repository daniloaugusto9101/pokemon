export const capitalizeFirstLetter = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const validateSearch = (str) => {
  if (!str) return "";
  const search = str.trim();
  if (search) {
    return search.toLocaleLowerCase();
  }
};
