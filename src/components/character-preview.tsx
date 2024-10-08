import { Suspense } from "react";
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
import { TranslatedCharacterInfo } from "../consts/character-info";
// import { TranslatedTravelerInfo } from "../consts/traveler-info";
import { useTranslation } from "react-i18next";

interface CharacterPreviewProps {
  characterInfo: TranslatedCharacterInfo;
}
const CharacterPreview = ({
  characterInfo
}: CharacterPreviewProps) => {
  const { t } = useTranslation();
  const isTraveler = characterInfo.nameId as any === "traveler";
  return (
    <Suspense
      fallback={
        <Skeleton variant="rectangular" sx={{ width: 256, borderRadius: 4 }} />
      }
    >
      <Card sx={{ width: 256, borderRadius: 4 }}>
        <CardActionArea component={RouterLink}
          to={`/${characterInfo.nameId}`}
        >
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
                backgroundImage: `url(${!isTraveler
                  ? `/genshin-helper-website/characters/${characterInfo.nameId}/name-card-p.webp`
                  : ""
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
                src={`/genshin-helper-website/characters/${characterInfo.nameId}/icon.webp`}
                width="102.39px"
                height="102.39px"
                sx={{ mt: "auto" }}
                alt={`Icon for ${characterInfo.name}`}
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
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {characterInfo.name}
              </Typography>
              <Stack direction="row" justifyContent="end" alignItems="center">
                <Chip
                  label={isTraveler ? "????" : t(`ui.elements.${characterInfo.vision}`) ?? "N/A"}
                  color={`${isTraveler
                    ? "default"
                    : (((characterInfo.vision as string) ?? "default").toLowerCase() as
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
                  alt={`${characterInfo.weaponType ?? isTraveler ? "sword" : "N/A"
                    }`}
                  src={
                    isTraveler
                      ? `/genshin-helper-website/weapon-types/sword.webp`
                      : `/genshin-helper-website/weapon-types/${characterInfo.weaponType.toLowerCase()}.webp`
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
