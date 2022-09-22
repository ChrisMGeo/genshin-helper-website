import { CharacterKey } from "./consts";

export interface Character {
  name: string;
  title?: string;
  vision: string;
  weapon: string;
  nation: string;
  affiliation: string;
  rarity: number;
  constellation: string;
  birthday?: string;
  description: string;
  skillTalents: SkillTalent[];
  passiveTalents: PassiveTalent[];
  constellations: Constellation[];
  vision_key: string;
  weapon_type: string;
  gender?: string;
  specialDish?: string;
  outfits?: Outfit[];
}

export interface SkillTalent {
  name: string;
  unlock: string;
  description: string;
  type?: string;
  upgrades?: Upgrade[];
}

export interface Upgrade {
  name: string;
  value: string;
}

export interface PassiveTalent {
  name: string;
  unlock: string;
  description: string;
  level?: number;
}

export interface Constellation {
  name: string;
  unlock: string;
  description: string;
  level: number;
}

export interface Outfit {
  type: string;
  name: string;
  description: string;
  rarity: number;
  price: number;
  image: string;
}

export interface CharacterEx extends Character {
  characterKey: CharacterKey;
  id: string;
}
