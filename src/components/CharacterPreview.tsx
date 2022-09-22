import { Suspense } from "react";
import characterAssets from "../data/Characters";
import { CharacterKey, WeaponTypeKey } from "../types/consts";
import TravelerNameCard from "../data/Extras/Traveler/Traveler_Namecard.webp";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  CardActionArea,
  Avatar,
  Skeleton,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { getWeaponIcon } from "../types/icons";
import { CharacterEx } from "../types/Character";

interface CharacterPreviewProps {
  characterInfo: CharacterEx;
}
const CharacterPreview = ({
  characterInfo: { characterKey, name, vision_key, weapon_type },
}: CharacterPreviewProps) => {
  const isTraveler = characterKey === "Traveler";
  return (
    <Suspense
      fallback={
        <Skeleton variant="rectangular" sx={{ width: 256, borderRadius: 4 }} />
      }
    >
      <Card sx={{ width: 256, borderRadius: 4 }}>
        <CardActionArea component={RouterLink} to={`/${characterKey}`}>
          <Box
            display="flex"
            position="relative"
            sx={{
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                opacity: 0.7,
                backgroundImage: `url(${
                  !isTraveler
                    ? characterAssets[characterKey].Banner
                    : TravelerNameCard
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              },
            }}
            width="100%"
          >
            <Box
              flexShrink={1}
              sx={{ maxWidth: { xs: "40%", lg: "40%" } }}
              alignSelf="flex-end"
              display="flex"
              flexDirection="column"
              zIndex={1}
            >
              <Box
                component="img"
                src={characterAssets[characterKey].Icon}
                width="102.39px"
                height="102.39px"
                sx={{ mt: "auto" }}
                alt={`Icon for ${(name as string) ?? characterKey}`}
              />
            </Box>
          </Box>
          <CardContent>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="h5"
                component="div"
                sx={{
                  minWidth: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {(name as string) ??
                  characterKey.replace(/([a-z])([A-Z])/g, "$1 $2")}
              </Typography>
              <Stack direction="row" justifyContent="end" alignItems="center">
                <Chip
                  label={isTraveler ? "????" : (vision_key as string) ?? "N/A"}
                  color={`${
                    isTraveler
                      ? "default"
                      : (((vision_key as string) ?? "default").toLowerCase() as
                          | "geo"
                          | "anemo"
                          | "dendro"
                          | "pyro"
                          | "hydro"
                          | "electro"
                          | "cryo"
                          | "default")
                  }`}
                  size="small"
                  variant="outlined"
                />
                <Avatar
                  alt={`${
                    (weapon_type as string) ?? isTraveler ? "SWORD" : "N/A"
                  }`}
                  src={
                    isTraveler
                      ? getWeaponIcon("sword")
                      : getWeaponIcon(
                          (
                            (weapon_type as string) ?? ""
                          ).toLowerCase() as WeaponTypeKey
                        )
                  }
                  sx={{ height: 24, width: 24 }}
                >
                  ?
                </Avatar>
              </Stack>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Suspense>
  );
};
export default CharacterPreview;
