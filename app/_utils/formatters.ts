export const formatValue = (value: any) => {
  if (Array.isArray(value)) {
    return value.join(", ");
  } else if (typeof value === "object" && value !== null) {
    return JSON.stringify(value); // or a more custom rendering if needed
  }
  return value;
};

export const formatKey = (key: string) => {
  return key.replace(/_/g, " ");
};
