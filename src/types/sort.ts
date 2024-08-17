import { TranslatedCharacterInfo as Character } from "../consts/character-info";

export const allSortOrders = ["ascending", "descending"] as const;
export type SortOrder = typeof allSortOrders[number];
export const allCharacterSortCriteria = ["name", "rarity"] as const;
export type CharacterSortCriteria = typeof allCharacterSortCriteria[number];

const createSortMap = <
  SortCriteria extends number | string | symbol,
  SortObject
>(
  ascending: {
    [key in SortCriteria]: (a: SortObject, b: SortObject) => -1 | 0 | 1;
  },
  descending: {
    [key in SortCriteria]?: (a: SortObject, b: SortObject) => -1 | 0 | 1;
  }
): {
  ascending: {
    [key in SortCriteria]: (a: SortObject, b: SortObject) => -1 | 0 | 1;
  };
  descending: {
    [key in SortCriteria]?: (a: SortObject, b: SortObject) => -1 | 0 | 1;
  };
  getSortFunc: (
    sortCriteria: SortCriteria,
    sortOrder: SortOrder
  ) => (a: SortObject, b: SortObject) => -1 | 0 | 1;
} => {
  return {
    ascending: ascending,
    descending: descending,
    getSortFunc: (sortCriteria: SortCriteria, sortOrder: SortOrder) => {
      if (sortOrder === "ascending") {
        return ascending[sortCriteria];
      } else {
        const d = descending[sortCriteria];
        return d === undefined
          ? (a: SortObject, b: SortObject): -1 | 0 | 1 =>
            (-1 * ascending[sortCriteria](a, b)) as -1 | 0 | 1
          : d;
      }
    },
  };
};

const ascendingCharacterSortMap: {
  [key in CharacterSortCriteria]: (a: Character, b: Character) => -1 | 0 | 1;
} = {
  name: (a: Character, b: Character) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return 1;
    if (nameA > nameB) return -1;
    return 0;
  },
  rarity: (a: Character, b: Character) => {
    if (a.rarity > b.rarity) return 1;
    if (a.rarity < b.rarity) return -1;
    return (-1 * ascendingCharacterSortMap["name"](a, b)) as -1 | 0 | 1;
  },
};
const descendingCharacterSortMap: {
  [key in CharacterSortCriteria]?: (a: Character, b: Character) => -1 | 0 | 1;
} = {
  rarity: (a: Character, b: Character) => {
    if (a.rarity > b.rarity) return -1;
    if (a.rarity < b.rarity) return 1;
    return (-1 * ascendingCharacterSortMap["name"](a, b)) as -1 | 0 | 1;
  },
};

export const characterSortMap = createSortMap<CharacterSortCriteria, Character>(
  ascendingCharacterSortMap,
  descendingCharacterSortMap
);
