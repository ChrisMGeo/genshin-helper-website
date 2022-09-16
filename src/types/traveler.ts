export const allTravelerElements = [
  "anemo",
  "geo",
  "electro",
  "dendro",
] as const;
export type TravelerElementKey = typeof allTravelerElements[number];
