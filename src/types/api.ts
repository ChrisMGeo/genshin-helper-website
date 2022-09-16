import { allCharacterKeys, CharacterKey } from "./consts";
import allCharacterInfo from "../data/Characters/allCharacterInfo.json";
import list from "../data/Characters/list.json";
const allCharactersKeyPairs: { [characterKey in CharacterKey]: string } =
  allCharacterKeys.reduce(
    (acc: { [characterKey in CharacterKey]: string }, curr: CharacterKey) => {
      acc[curr] = curr.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
      return acc;
    },
    {} as { [characterKey in CharacterKey]: string }
  );
const apiCharacterKeys: { [characterKey in CharacterKey]: string } = {
  ...allCharactersKeyPairs,
  KamisatoAyaka: "ayaka",
  KamisatoAyato: "ayato",
  KujouSara: "sara",
  KaedeharaKazuha: "kazuha",
  RaidenShogun: "raiden",
  SangonomiyaKokomi: "kokomi",
};
const swapMap = <K extends string | symbol | number, V>(obj: {
  [key in K]: V;
}) => {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
};
const apiToCharKeyMap = swapMap(apiCharacterKeys);
const allCharInfo = [
  ...allCharacterInfo.map((charInfo, index) => {
    return {
      ...charInfo,
      id: list[index],
      characterKey: list[index].startsWith("traveler")
        ? "Traveler"
        : apiToCharKeyMap[list[index]],
    };
  }),
];
export { apiCharacterKeys, apiToCharKeyMap, allCharInfo };
