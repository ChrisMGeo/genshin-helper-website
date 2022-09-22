import {
  Avatar,
  CardActionArea,
  CardHeader,
  Collapse,
  Typography,
} from "@mui/material";
import { CharacterKey } from "../types/consts";
import CardLight from "./CardLight";
import characterAssets from "../data/Characters";
import { TravelerElementKey } from "../types/traveler";
import CardContentEvenPadding from "./CardContentEvenPadding";
import { useState } from "react";
import { PassiveTalent } from "../types/Character";

interface PassiveTalentCardProps {
  passiveTalent: PassiveTalent;
  characterKey: CharacterKey;
  travelerElement: TravelerElementKey;
  index: 1 | 2 | 3 | 4;
}
const PassiveTalentCard = ({
  passiveTalent,
  characterKey,
  travelerElement,
  index,
}: PassiveTalentCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <CardLight sx={{ borderRadius: 4 }}>
      <CardActionArea onClick={handleExpandClick}>
        <CardHeader
          title={
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              {passiveTalent.name}
            </Typography>
          }
          avatar={
            <Avatar
              src={
                characterKey !== "Traveler"
                  ? characterKey === "SangonomiyaKokomi"
                    ? characterAssets[characterKey][`Passive${index}`]
                    : characterAssets[characterKey][
                        `Passive${index as 1 | 2 | 3}`
                      ]
                  : characterAssets.Traveler.elements[travelerElement][
                      `Passive${index}`
                    ]
              }
              alt={`Passive${index}`}
            />
          }
        ></CardHeader>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContentEvenPadding sx={{ whiteSpace: "pre-wrap" }}>
            <Typography variant="body1">{passiveTalent.description}</Typography>
          </CardContentEvenPadding>
        </Collapse>
      </CardActionArea>
    </CardLight>
  );
};
export default PassiveTalentCard;
