export const allWeaponTypes = [
  "sword",
  "claymore",
  "polearm",
  "catalyst",
  "bow",
] as const;
export type WeaponType = typeof allWeaponTypes[number];
export const allElements = ['anemo', 'geo', 'electro', 'hydro', 'pyro', 'cryo', 'dendro'] as const;
export type Element = typeof allElements[number];
export const allTravelerElements = ["anemo", "geo", "electro", "dendro", "hydro"] as const;
export type TravelerElement = typeof allTravelerElements[number];
