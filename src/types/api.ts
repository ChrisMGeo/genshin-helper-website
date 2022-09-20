import { allCharacterKeys, CharacterKey, ElementKey } from "./consts";
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
const allCharacters = allCharacterKeys.map((characterKey) => {
  const result = allCharInfo.find((char) =>
    characterKey === "Traveler"
      ? char.characterKey === "Traveler" &&
        (char.vision_key.toLowerCase() as ElementKey) === "anemo"
      : char.characterKey === characterKey
  );
  if (result !== undefined) return result;
  return allCharInfo[0];
});
export { apiCharacterKeys, apiToCharKeyMap, allCharInfo, allCharacters };
