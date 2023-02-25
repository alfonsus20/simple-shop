export const deepClone = <T extends unknown>(data: T): T => {
  return JSON.parse(JSON.stringify(data));
};
