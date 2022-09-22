import {
  Avatar,
  CardActionArea,
  CardHeader,
  Collapse,
  Typography,
} from "@mui/material";
import { CharacterKey, WeaponTypeKey } from "../types/consts";
import { getWeaponIcon } from "../types/icons";
import CardLight from "./CardLight";
import characterAssets from "../data/Characters";
import { TravelerElementKey } from "../types/traveler";
import CardContentEvenPadding from "./CardContentEvenPadding";
import { useState } from "react";
import { CharacterEx, SkillTalent } from "../types/Character";

interface SkillTalentCardProps {
  skillTalent: SkillTalent;
  characterInfo: CharacterEx;
  characterKey: CharacterKey;
  travelerElement: TravelerElementKey;
}
const SkillTalentCard = ({
  skillTalent,
  characterInfo,
  characterKey,
  travelerElement,
}: SkillTalentCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const skillType =
    skillTalent.type === "ELEMENTAL_SKILL"
      ? "Skill"
      : skillTalent.type === "ELEMENTAL_BURST"
      ? "Burst"
      : "Sprint";
  return (
    <CardLight sx={{ borderRadius: 4 }}>
      <CardActionArea onClick={handleExpandClick}>
        <CardHeader
          title={
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              {skillTalent.name}
            </Typography>
          }
          avatar={
            <Avatar
              src={
                skillTalent.type === "NORMAL_ATTACK"
                  ? getWeaponIcon(
                      characterInfo.weapon_type.toLowerCase() as WeaponTypeKey
                    )
                  : characterKey !== "Traveler"
                  ? characterAssets[characterKey][skillType]
                  : characterAssets.Traveler.elements[travelerElement][
                      skillType
                    ]
              }
              alt={
                skillTalent.type === "NORMAL_ATTACK"
                  ? "Normal Attack"
                  : skillType
              }
            />
          }
        ></CardHeader>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContentEvenPadding sx={{ whiteSpace: "pre-wrap" }}>
            <Typography
              variant="body1"
              dangerouslySetInnerHTML={{
                __html: skillTalent.description
                  .split("\n")
                  .map((line: string) =>
                    line.split(" ").length >= 4 ? line : `<b>${line}</b>`
                  )
                  .join("\n"),
              }}
            ></Typography>
          </CardContentEvenPadding>
        </Collapse>
      </CardActionArea>
    </CardLight>
  );
};
export default SkillTalentCard;
