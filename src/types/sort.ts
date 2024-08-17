export const allSortOrders = ["ascending", "descending"] as const;
export type SortOrder = typeof allSortOrders[number];
export const allCharacterSortCriteria = ["name", "rarity"] as const;
export type CharacterSortCriteria = typeof allCharacterSortCriteria[number];
