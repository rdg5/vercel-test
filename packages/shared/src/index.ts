export const getTimestamp = (): string => {
  return `Timestamp: ${new Date().toISOString()}`;
};

export const getVersion = (): string => {
  return "v1.0.0";
};
