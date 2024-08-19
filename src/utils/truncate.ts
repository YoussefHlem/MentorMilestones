export const truncate = (description: string, maxLength: number) => {
  return description.length > maxLength ? description.slice(0, maxLength) + "..." : description;
};
