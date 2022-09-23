import { ArtifactSetKey, CharacterKey, WeaponKey } from "./consts";
import { TravelerElementKey } from "./traveler";

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
type CharacterBuildswoTraveler = {
  [characterKey in Exclude<CharacterKey, "Traveler">]?: CharacterWBuilds;
};
export interface CharacterBuilds extends CharacterBuildswoTraveler {
  Traveler: { [travelerElement in TravelerElementKey]?: CharacterWBuilds };
}

export interface CharacterWBuilds {
  characterKey: CharacterKey;
  notes?: string;
  builds: Build[];
}
export interface Build {
  name: string;
  weapons: Weapon[];
  artifactSets: ArtifactSet[][];
  artifactMainStats: string;
  artifactSubStats: string;
  talentPriority: string;
  abilityTips: string;
  notes: string;
}
export interface WeaponWithNote {
  key: WeaponKey;
  note: string;
}
export type Weapon = WeaponKey | WeaponWithNote;
export interface ArtifactSetWithNote {
  key: ArtifactSetKey;
  note: string;
}
export type ArtifactSet = ArtifactSetKey | ArtifactSetWithNote;
