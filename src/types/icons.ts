import iconSword from "../data/Extras/Weapons/Icon_Sword.webp";
import iconClaymore from "../data/Extras/Weapons/Icon_Claymore.webp";
import iconPolearm from "../data/Extras/Weapons/Icon_Polearm.webp";
import iconCatalyst from "../data/Extras/Weapons/Icon_Catalyst.webp";
import iconBow from "../data/Extras/Weapons/Icon_Bow.webp";
import { WeaponTypeKey } from "./consts";
export const weaponIconMap = {
  BOW: iconBow,
  SWORD: iconSword,
  CLAYMORE: iconClaymore,
  POLEARM: iconPolearm,
  CATALYST: iconCatalyst,
};
const getWeaponIcon = (weaponTypeKey: WeaponTypeKey): string =>
  weaponIconMap[
    weaponTypeKey.toUpperCase() as
      | "SWORD"
      | "BOW"
      | "CLAYMORE"
      | "POLEARM"
      | "CATALYST"
  ];
export { getWeaponIcon };
