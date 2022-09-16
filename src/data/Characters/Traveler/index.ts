import Icon from "./Icon.webp";
import IconSide from "./IconSide.webp";
import TravelerFemaleCard from "./Traveler_Female_Card.webp";
import TravelerMaleCard from "./Traveler_Male_Card.webp";
const elements = ["geo", "electro", "anemo", "dendro"];
let elementURLs: any = {};
elements.forEach((element) => {
  elementURLs[element] = {
    Burst: require(`./${element}/Burst.webp`),
    Skill: require(`./${element}/Burst.webp`),
    Passive1: require(`./${element}/passive1.webp`),
    Passive2: require(`./${element}/passive2.webp`),
    Constellation1: require(`./${element}/constellation1.webp`),
    Constellation2: require(`./${element}/constellation2.webp`),
    Constellation3: require(`./${element}/constellation3.webp`),
    Constellation4: require(`./${element}/constellation4.webp`),
    Constellation5: require(`./${element}/constellation5.webp`),
    Constellation6: require(`./${element}/constellation6.webp`),
  };
});

const Character = {
  Icon: Icon,
  IconSide: IconSide,
  TravelerFemaleCard: TravelerFemaleCard,
  TravelerMaleCard: TravelerMaleCard,
  elements: elementURLs,
};

export default Character;
