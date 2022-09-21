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

interface ConstellationCardProps {
  constellation: any;
  characterKey: CharacterKey;
  travelerElement: TravelerElementKey;
}
const ConstellationCard = ({
  constellation,
  characterKey,
  travelerElement,
}: ConstellationCardProps) => {
  const index = constellation.level as 1 | 2 | 3 | 4 | 5 | 6;
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
              {constellation.name}
            </Typography>
          }
          avatar={
            <Avatar
              src={
                characterKey !== "Traveler"
                  ? characterAssets[characterKey][`Constellation${index}`]
                  : characterAssets.Traveler.elements[travelerElement][
                      `Constellation${index}`
                    ]
              }
              alt={`Constellation${index}`}
            />
          }
        ></CardHeader>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContentEvenPadding sx={{ whiteSpace: "pre-wrap" }}>
            <Typography variant="body1">{constellation.description}</Typography>
          </CardContentEvenPadding>
        </Collapse>
      </CardActionArea>
    </CardLight>
  );
};
export default ConstellationCard;
