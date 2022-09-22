import { Character } from "./Character";

export type SortOrder = "Ascending" | "Descending";

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
  Ascending: {
    [key in SortCriteria]: (a: SortObject, b: SortObject) => -1 | 0 | 1;
  };
  Descending: {
    [key in SortCriteria]?: (a: SortObject, b: SortObject) => -1 | 0 | 1;
  };
  getSortFunc: (
    sortCriteria: SortCriteria,
    sortOrder: SortOrder
  ) => (a: SortObject, b: SortObject) => -1 | 0 | 1;
} => {
  return {
    Ascending: ascending,
    Descending: descending,
    getSortFunc: (sortCriteria: SortCriteria, sortOrder: SortOrder) => {
      if (sortOrder === "Ascending") {
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
//CHARACTER SORTING
export const allCharacterSortCriteria = ["Name", "Rarity"] as const;
export type CharacterSortCriteria = typeof allCharacterSortCriteria[number];

const ascendingCharacterSortMap: {
  [key in CharacterSortCriteria]: (a: Character, b: Character) => -1 | 0 | 1;
} = {
  Name: (a: Character, b: Character) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return 1;
    if (nameA > nameB) return -1;
    return 0;
  },
  Rarity: (a: Character, b: Character) => {
    if (a.rarity > b.rarity) return 1;
    if (a.rarity < b.rarity) return -1;
    return (-1 * ascendingCharacterSortMap["Name"](a, b)) as -1 | 0 | 1;
  },
};
const descendingCharacterSortMap: {
  [key in CharacterSortCriteria]?: (a: Character, b: Character) => -1 | 0 | 1;
} = {
  Rarity: (a: Character, b: Character) => {
    if (a.rarity > b.rarity) return -1;
    if (a.rarity < b.rarity) return 1;
    return (-1 * ascendingCharacterSortMap["Name"](a, b)) as -1 | 0 | 1;
  },
};

export const characterSortMap = createSortMap<CharacterSortCriteria, Character>(
  ascendingCharacterSortMap,
  descendingCharacterSortMap
);
