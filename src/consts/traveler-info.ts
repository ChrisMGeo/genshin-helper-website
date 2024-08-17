import { TravelerElement } from ".";

const travelerInfo = {
  anemo: {
    nameId: "traveler"
  },
  geo: {
    nameId: "traveler"
  },
  electro: {
    nameId: "traveler"
  },
  dendro: {
    nameId: "traveler"
  },
  hydro: {
    nameId: "traveler"
  },
} as const satisfies {
  [key in TravelerElement]: {};
};
export type TravelerInfo = typeof travelerInfo[TravelerElement];
export type TranslatedTravelerInfo = {};
export default travelerInfo;
