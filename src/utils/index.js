export const filterIntervals = (type, val) => {
  if (type === "fortnightly") {
    if (val === "weekly") {
      return true;
    }
    return false;
  }
  return type === val;
};
