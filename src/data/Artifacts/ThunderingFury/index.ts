/*eslint-disable*/
let Flower = "";
try {
  // eslint-disable-next-line
  Flower = require("./flower.webp");
} catch (e1) {}
let Goblet = "";
try {
  // eslint-disable-next-line
  Goblet = require("./goblet.webp");
} catch (e1) {}
let Plume = "";
try {
  // eslint-disable-next-line
  Plume = require("./plume.webp");
} catch (e1) {}
let Sands = "";
try {
  // eslint-disable-next-line
  Sands = require("./sands.webp");
} catch (e1) {}
let Circlet = "";
try {
  // eslint-disable-next-line
  Circlet = require("./circlet.webp");
} catch (e1) {}

const Artifact = {
  Circlet: Circlet,
  Flower: Flower,
  Goblet: Goblet,
  Plume: Plume,
  Sands: Sands,
};

export default Artifact;
