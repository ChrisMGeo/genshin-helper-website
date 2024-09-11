import {
  Box,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import CardContentEvenPadding from "./card-content-even-padding";
import CardLight from "./card-light";
import { Fragment } from "react";
import { bgGradient } from "../consts/rarity-colors";
import { CharacterBuild } from "../consts/character-builds";
import { getTranslatedWeaponInfo, TranslatedWeaponInfo } from "../consts/weapon-info";
import { artifactGroups, getTranslatedArtifactInfo } from "../consts/artifact-info";
import UnityRichTextComponent from "./unity-rich-text";
import { useTranslation } from "react-i18next";

interface BuildDisplayProps {
  build: CharacterBuild["builds"][number];
}
const BuildDisplay = ({
  build: { weapons, artifactSets }
}: BuildDisplayProps) => {
  const allWeaponInfo = getTranslatedWeaponInfo();
  const allArtifactInfo = getTranslatedArtifactInfo();
  const { t } = useTranslation();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <Stack flexDirection="column" spacing={2}>
          <Typography variant="h6">{t("ui.character.weapons")}</Typography>

          {weapons.map((weaponId, index) => (
            <Fragment key={index}>
              <WeaponDisplay weaponInfo={allWeaponInfo.find(weaponInfo => weaponInfo.nameId === weaponId)!} />
              {index !== weapons.length - 1 ? <Divider>OR</Divider> : <></>}
            </Fragment>
          ))}
        </Stack>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Stack flexDirection="column" spacing={2}>
          {" "}
          <Typography variant="h6">{t("ui.character.artifactSets")}</Typography>
          {artifactSets.map((artifactId, index) => (
            <Fragment key={index}>
              <ArtifactSetDisplay artifactInfo={allArtifactInfo.find(artifactInfo => artifactInfo.nameId === artifactId)!} />
              {index !== artifactSets.length - 1 ? (
                <Divider>OR</Divider>
              ) : (
                <></>
              )}
            </Fragment>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};
const WeaponDisplay = ({ weaponInfo: { nameId, rarity, name, refinementInfo } }: { weaponInfo: TranslatedWeaponInfo }) => {
  const key = nameId;

  return (
    <CardLight sx={{ borderRadius: 4, display: "flex", maxHeight: "144px" }}>
      <div
        style={{
          backgroundImage: `radial-gradient(at bottom right, ${bgGradient[rarity].light}, ${bgGradient[rarity].dark})`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          alt={`${key}`}
          src={`/genshin-helper-website/weapons/${nameId}/awaken-icon.webp`}
          sx={{
            width: 92,
            height: 92,
            margin: "8px",
          }}
        />
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "100%",
        }}
      >
        <CardContentEvenPadding>
          <div>
            <Typography component="div" variant="h6">
              {name}
            </Typography>
          </div>
          <div style={{ overflowY: "auto", maxHeight: "80px" }}>
            <Typography variant="body2" color="text.secondary" component="div">
              <UnityRichTextComponent>{`<b><color=#ffd780>${refinementInfo[0].name}</color></b>`}</UnityRichTextComponent>
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              <UnityRichTextComponent>{refinementInfo[0].desc.split("\\n").join("\n")}</UnityRichTextComponent>
            </Typography>
          </div>
        </CardContentEvenPadding>
      </Box>
    </CardLight>
  );
};
const ArtifactSetDisplay = ({
  artifactInfo: { nameId: key, maxRarity: rarity, name, setBonuses }
}: {
  artifactInfo: TranslatedArtifactInfo,
}) => {
  const { t } = useTranslation();
  return (
    <CardLight sx={{ borderRadius: 4, display: "flex", maxHeight: "144px" }}>
      <div
        style={{
          backgroundImage: `radial-gradient(at bottom right, ${bgGradient[rarity].light}, ${bgGradient[rarity].dark})`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          alt={`${key}`}
          src={`/genshin-helper-website/artifacts/${key}/set-icon.webp`}
          sx={{
            width: 92,
            height: 92,
            margin: "8px",
          }}
        />
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "100%",
        }}
      >
        <CardContentEvenPadding>
          <div>
            <Typography component="div" variant="h6">
              {name}
            </Typography>
          </div>
          <div style={{ overflowY: "auto", maxHeight: "80px" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              component="div"
              whiteSpace="pre-wrap"
            >
              <UnityRichTextComponent>{[1, 2, 4]
                .map((num: number) => {
                  const exists = num in setBonuses;
                  if (!exists) return "";
                  return `${num !== 1 ? `<color=#ffd780><b>${t(`ui.character.artifact.pieceBonus${num}`)}:</b></color> ` : ""}${setBonuses[num].desc.split("\\n").join("\n")}`;
                })
                .join("\n")}</UnityRichTextComponent>
            </Typography>
          </div>
        </CardContentEvenPadding>
      </Box>
    </CardLight>
  );
};
export default BuildDisplay;
