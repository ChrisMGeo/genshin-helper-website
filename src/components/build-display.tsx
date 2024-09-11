import {
  Box,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CardContentEvenPadding from "./card-content-even-padding";
import CardLight from "./card-light";
import { Fragment } from "react";
import { bgGradient } from "../consts/rarity-colors";
import { ArtifactSetChoice, CharacterBuild } from "../consts/character-builds";
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
          {artifactSets.map((artifactChoice, index) => {
            let artifactChoiceDisplayed = undefined;
            switch (artifactChoice.type) {
              case "single":
                artifactChoiceDisplayed = <ArtifactChoiceDisplay artifactInfo={artifactChoice.option} />;
                break;
              case "double":
              case "choose-2":
                artifactChoiceDisplayed = <Stack spacing={2}>
                  {artifactChoice.options.map((choice, i2) => <ArtifactChoiceDisplay artifactInfo={choice} key={i2} excludeSetBonuses={[4]} />)}
                </Stack>;
                break;
            }
            return <Fragment key={index}>
              {artifactChoiceDisplayed}
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
const ArtifactChoiceDisplay = ({
  artifactInfo,
  excludeSetBonuses = []
}: {
  artifactInfo: ArtifactSetChoice,
  excludeSetBonuses?: number[]
}) => {
  const { t } = useTranslation();
  switch (artifactInfo.type) {
    case "set":
      const { maxRarity: rarity, nameId: key, name, setBonuses } = getTranslatedArtifactInfo().find(artifact => artifact.nameId === artifactInfo.id)!;
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
                      if (!exists || excludeSetBonuses.includes(num)) return "";
                      return `${num !== 1 ? `<color=#ffd780><b>${t(`ui.character.artifact.pieceBonus${num}`)}:</b></color> ` : ""}${setBonuses[num].desc.split("\\n").join("\n")}`;
                    })
                    .join("\n")}</UnityRichTextComponent>
                </Typography>
              </div>
            </CardContentEvenPadding>
          </Box>
        </CardLight>
      )
    case "group":
      const res = artifactGroups.find(group => group.nameId === artifactInfo.id);
      if (!res) return <></>;
      const { sets } = res;
      return <Paper elevation={3} sx={{
        borderRadius: 4,
        padding: "8px"
      }}>
        <Typography variant="h6">{t("ui.character.artifact.chooseFromGroup")}</Typography>
        <Stack spacing={2}>
          {sets.map((set, index) => <ArtifactChoiceDisplay key={index} artifactInfo={{ type: "set", id: set }} excludeSetBonuses={excludeSetBonuses} />)}
        </Stack>
      </Paper>
  }
  ;
};
export default BuildDisplay;
