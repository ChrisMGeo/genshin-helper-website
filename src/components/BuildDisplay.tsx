import {
  Box,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import weaponAssets from "../data/Weapons";
import { ArtifactSet, Build, Weapon } from "../types/Character";
import { ArtifactSetKey, WeaponKey } from "../types/consts";
import CardContentEvenPadding from "./CardContentEvenPadding";
import CardLight from "./CardLight";
import allWeaponInfo from "../data/Weapons/allWeaponInfo.json";
import allArtifactSetInfo from "../data/Artifacts/allArtifactSetInfo.json";
import { Fragment } from "react";
import { bgGradient } from "../styles/rarityColors";
import artifactAssets from "../data/Artifacts";

interface BuildDisplayProps {
  build: Build;
}
const BuildDisplay = ({
  build: { weapons, artifactSets },
}: BuildDisplayProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <Stack flexDirection="column" spacing={2}>
          <Typography variant="h6">Weapons</Typography>

          {weapons.map((weapon, index) => (
            <Fragment key={index}>
              <WeaponDisplay weapon={weapon} />
              {index !== weapons.length - 1 ? <Divider>OR</Divider> : <></>}
            </Fragment>
          ))}
        </Stack>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Stack flexDirection="column" spacing={2}>
          {" "}
          <Typography variant="h6">Artifact Sets</Typography>
          {artifactSets.map((artifactSetArr: ArtifactSet[], index) => (
            <Fragment key={index}>
              <ArtifactSetDisplay artifactSetArr={artifactSetArr} />
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
const WeaponDisplay = ({ weapon }: { weapon: Weapon }) => {
  const weaponWithNote = typeof weapon !== "string";
  const key = weaponWithNote ? weapon.key : weapon;
  const weaponInfo = allWeaponInfo.find(
    (weaponInfo) =>
      key ===
      weaponInfo.name
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.substring(1))
        .join(" ")
        .replaceAll(" ", "")
        .replaceAll("'", "")
        .replaceAll('"', "")
        .replaceAll("-", "")
  );
  const rarity: 1 | 2 | 3 | 4 | 5 = (
    weaponInfo === undefined ? 4 : weaponInfo.rarity
  ) as 1 | 2 | 3 | 4 | 5;

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
          src={weaponAssets[key as WeaponKey].Icon}
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
              {(weaponInfo === undefined ? key : weaponInfo.name) + " "}
              {weaponWithNote ? (
                <Tooltip title={weapon.note}>
                  <span>*</span>
                </Tooltip>
              ) : (
                <></>
              )}
            </Typography>
          </div>
          <div style={{ overflowY: "auto", maxHeight: "80px" }}>
            <Typography variant="body2" color="text.secondary" component="div">
              {weaponInfo === undefined ? "" : weaponInfo.passiveDesc}
            </Typography>
          </div>
        </CardContentEvenPadding>
      </Box>
    </CardLight>
  );
};
const ArtifactSetDisplay = ({
  artifactSetArr,
}: {
  artifactSetArr: ArtifactSet[];
}) => {
  if (artifactSetArr.length === 1) {
    const artifactSet = artifactSetArr[0];
    const artifactWithNote = typeof artifactSet !== "string";
    const key = artifactWithNote ? artifactSet.key : artifactSet;
    const artifactSetInfo = allArtifactSetInfo.find(
      (artifactSetInfo) =>
        key ===
        artifactSetInfo.name
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.substring(1))
          .join(" ")
          .replaceAll(" ", "")
          .replaceAll("'", "")
          .replaceAll('"', "")
          .replaceAll("-", "")
    );
    const rarity: 1 | 2 | 3 | 4 | 5 = (
      artifactSetInfo === undefined ? 4 : artifactSetInfo.max_rarity
    ) as 1 | 2 | 3 | 4 | 5;
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
            src={artifactAssets[key as ArtifactSetKey].Circlet}
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
                {(artifactSetInfo === undefined ? key : artifactSetInfo.name) +
                  " "}
                {artifactWithNote ? (
                  <Tooltip title={artifactSet.note}>
                    <span>*</span>
                  </Tooltip>
                ) : (
                  <></>
                )}
              </Typography>
            </div>
            <div style={{ overflowY: "auto", maxHeight: "80px" }}>
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
                whiteSpace="pre-wrap"
              >
                {artifactSetInfo === undefined
                  ? ""
                  : [1, 2, 4]
                      .map((num: number) => {
                        const bonusKey:
                          | "1-piece_bonus"
                          | "2-piece_bonus"
                          | "4-piece_bonus" = `${num}-piece_bonus` as
                          | "1-piece_bonus"
                          | "2-piece_bonus"
                          | "4-piece_bonus";
                        const exists = bonusKey in artifactSetInfo;
                        if (!exists) return "";
                        return `${num}-Piece Set: ${artifactSetInfo[bonusKey]}`;
                      })
                      .join("\n")}
              </Typography>
            </div>
          </CardContentEvenPadding>
        </Box>
      </CardLight>
    );
  } else if (artifactSetArr.length === 2) {
    const artifactSet1 = artifactSetArr[0];
    const artifactSet2 = artifactSetArr[1];

    const artifactWithNote1 = typeof artifactSet1 !== "string";
    const artifactWithNote2 = typeof artifactSet2 !== "string";

    const key1 = artifactWithNote1 ? artifactSet1.key : artifactSet1;
    const key2 = artifactWithNote2 ? artifactSet2.key : artifactSet2;

    const artifactSetInfo1 = allArtifactSetInfo.find(
      (artifactSetInfo) =>
        key1 ===
        artifactSetInfo.name
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.substring(1))
          .join(" ")
          .replaceAll(" ", "")
          .replaceAll("'", "")
          .replaceAll('"', "")
          .replaceAll("-", "")
    );
    const artifactSetInfo2 = allArtifactSetInfo.find(
      (artifactSetInfo) =>
        key2 ===
        artifactSetInfo.name
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.substring(1))
          .join(" ")
          .replaceAll(" ", "")
          .replaceAll("'", "")
          .replaceAll('"', "")
          .replaceAll("-", "")
    );
    console.log(artifactSetInfo1, artifactSetInfo2);

    const rarity1: 1 | 2 | 3 | 4 | 5 = (
      artifactSetInfo1 === undefined ? 4 : artifactSetInfo1.max_rarity
    ) as 1 | 2 | 3 | 4 | 5;
    const rarity2: 1 | 2 | 3 | 4 | 5 = (
      artifactSetInfo2 === undefined ? 4 : artifactSetInfo2.max_rarity
    ) as 1 | 2 | 3 | 4 | 5;

    return (
      <CardLight
        sx={{
          borderRadius: 4,
          display: "flex",
          maxHeight: "144px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            backgroundImage: `radial-gradient(at bottom right, ${bgGradient[rarity1].light}, ${bgGradient[rarity1].dark})`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            alt={`${key1}`}
            src={artifactAssets[key1 as ArtifactSetKey].Circlet}
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
                {(artifactSetInfo1 === undefined
                  ? key1
                  : artifactSetInfo1.name) + " "}
                {artifactWithNote1 ? (
                  <Tooltip title={artifactSet1.note}>
                    <span>*</span>
                  </Tooltip>
                ) : (
                  <></>
                )}
                {"| "}
                {(artifactSetInfo2 === undefined
                  ? key2
                  : artifactSetInfo2.name) + " "}
                {artifactWithNote2 ? (
                  <Tooltip title={artifactSet2.note}>
                    <span>*</span>
                  </Tooltip>
                ) : (
                  <></>
                )}
              </Typography>
            </div>
            <div style={{ overflowY: "auto", maxHeight: "80px" }}>
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
                whiteSpace="pre-wrap"
              >
                {artifactSetInfo1 === undefined
                  ? ""
                  : [1, 2]
                      .map((num: number) => {
                        const bonusKey: "1-piece_bonus" | "2-piece_bonus" =
                          `${num}-piece_bonus` as
                            | "1-piece_bonus"
                            | "2-piece_bonus";
                        const exists = bonusKey in artifactSetInfo1;
                        if (!exists) return "";
                        return `${num}-Piece ${artifactSetInfo1.name}: ${artifactSetInfo1[bonusKey]}`;
                      })
                      .join("\n")}
                {artifactSetInfo2 === undefined
                  ? ""
                  : [1, 2]
                      .map((num: number) => {
                        const bonusKey: "1-piece_bonus" | "2-piece_bonus" =
                          `${num}-piece_bonus` as
                            | "1-piece_bonus"
                            | "2-piece_bonus";
                        const exists = bonusKey in artifactSetInfo2;
                        if (!exists) return "";
                        return `${num}-Piece ${artifactSetInfo2.name}: ${artifactSetInfo2[bonusKey]}`;
                      })
                      .join("\n")}
              </Typography>
            </div>
          </CardContentEvenPadding>
        </Box>
        <div
          style={{
            backgroundImage: `radial-gradient(at bottom left, ${bgGradient[rarity2].light}, ${bgGradient[rarity2].dark})`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            alt={`${key2}`}
            src={artifactAssets[key2 as ArtifactSetKey].Circlet}
            sx={{
              width: 92,
              height: 92,
              margin: "8px",
            }}
          />
        </div>
      </CardLight>
    );
  }
  return (
    <>
      <Typography variant="h6">Choose two sets:</Typography>
      {artifactSetArr.map((artifactSet, index: number) => {
        const artifactWithNote = typeof artifactSet !== "string";
        const key = artifactWithNote ? artifactSet.key : artifactSet;
        const artifactSetInfo = allArtifactSetInfo.find(
          (artifactSetInfo) =>
            key ===
            artifactSetInfo.name
              .split(" ")
              .map((word) => word[0].toUpperCase() + word.substring(1))
              .join(" ")
              .replaceAll(" ", "")
              .replaceAll("'", "")
              .replaceAll('"', "")
              .replaceAll("-", "")
        );
        const rarity: 1 | 2 | 3 | 4 | 5 = (
          artifactSetInfo === undefined ? 4 : artifactSetInfo.max_rarity
        ) as 1 | 2 | 3 | 4 | 5;
        return (
          <CardLight
            key={index}
            sx={{ borderRadius: 4, display: "flex", maxHeight: "144px" }}
          >
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
                src={artifactAssets[key as ArtifactSetKey].Circlet}
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
                    {(artifactSetInfo === undefined
                      ? key
                      : artifactSetInfo.name) + " "}
                    {artifactWithNote ? (
                      <Tooltip title={artifactSet.note}>
                        <span>*</span>
                      </Tooltip>
                    ) : (
                      <></>
                    )}
                  </Typography>
                </div>
                <div style={{ overflowY: "auto", maxHeight: "80px" }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="div"
                    whiteSpace="pre-wrap"
                  >
                    {artifactSetInfo === undefined
                      ? ""
                      : [1, 2]
                          .map((num: number) => {
                            const bonusKey: "1-piece_bonus" | "2-piece_bonus" =
                              `${num}-piece_bonus` as
                                | "1-piece_bonus"
                                | "2-piece_bonus";
                            const exists = bonusKey in artifactSetInfo;
                            if (!exists) return "";
                            return `${num}-Piece Set: ${artifactSetInfo[bonusKey]}`;
                          })
                          .join("\n")}
                  </Typography>
                </div>
              </CardContentEvenPadding>
            </Box>
          </CardLight>
        );
      })}
    </>
  );
};
export default BuildDisplay;
