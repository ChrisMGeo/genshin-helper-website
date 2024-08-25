import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Element } from "../consts";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardHeader,
  Collapse,
  Grid,
  // MenuItem,
  Skeleton,
  Stack,
  Tab,
  // Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Suspense, useCallback, useState } from "react";
import CardContentEvenPadding from "../components/card-content-even-padding";
import CloseButton from "../components/close-button";
import CharSelectDropdown from "../components/char-select-dropdown";
// import useLocalStorage from "../hooks/useLocalStorage";
// import DropdownButton from "../components/dropdown-button";
import { theme } from "../theme";
import StickyCard from "../components/sticky-card";
import BuildDisplay from "../components/build-display";
import { translatedCharacterInfo } from "../consts/character-info";
import CardLight from "../components/card-light";
import UnityRichTextComponent from "../components/unity-rich-text";
import characterBuilds from "../consts/character-builds";
import { useTranslation } from "react-i18next";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};
//
const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const PageCharacter = () => {
  const navigate = useNavigate();
  const onClose = useCallback(() => navigate("/"), [navigate]);

  const { characterKey } = useParams<{ characterKey?: string }>();
  const invalidKey = !translatedCharacterInfo().some(charInfo => charInfo.nameId == characterKey);
  if (invalidKey) return <Navigate to="/" />;
  return (
    <Box my={1} display="flex" flexDirection="column" gap={1}>
      <Suspense
        fallback={<Skeleton variant="rectangular" width="100%" height={1000} />}
      >
        {characterKey && (
          <CharacterDisplayCard characterKey={characterKey} onClose={onClose} />
        )}
      </Suspense>
    </Box>
  );
};

interface CharacterDisplayCardProps {
  characterKey: string;
  onClose?: () => void;
}

const CharacterDisplayCard = ({
  characterKey,
  onClose,
}: CharacterDisplayCardProps) => {
  const builds = characterBuilds.find(buildInfo => buildInfo.nameId === characterKey)?.builds;
  const [buildTab, setBuildTab] = useState(0);
  const handleBuildChange = (_e: React.SyntheticEvent, newValue: number) => {
    setBuildTab(newValue);
  };
  // const [travelerElement, setTravelerElement] =
  //   useLocalStorage<TravelerElement>("travelerElement", "anemo");
  const isTraveler = characterKey === "traveler";

  const characterInfo = translatedCharacterInfo().find((char) =>
    // isTraveler ? char.nameId === travelerId : 
    char.nameId === characterKey
  )!;
  const { t } = useTranslation();

  return (
    <>
      <StickyCard>
        <CardContentEvenPadding
          sx={{ display: "flex", flexDirection: "column", gap: 1 }}
        >
          <Box display="flex">
            <Box display="flex" gap={1} flexWrap="wrap" flexGrow={1}>
              <CharSelectDropdown
                characterKey={characterKey}
                characterName={characterInfo.name}
                color={
                  (characterInfo.vision as Element) ??
                  "success"
                }
              />
              {/* {isTraveler && ( */}
              {/*   <DropdownButton */}
              {/*     variant="outlined" */}
              {/*     color={travelerElement} */}
              {/*     title={<strong>{travelerElement}</strong>} */}
              {/*     sx={{ borderRadius: 4 }} */}
              {/*   > */}
              {/*     {allTravelerElements.map((ele) => ( */}
              {/*       <MenuItem */}
              {/*         key={ele} */}
              {/*         selected={ele === travelerElement} */}
              {/*         disabled={ele === travelerElement} */}
              {/*         onClick={() => setTravelerElement(ele)} */}
              {/*       > */}
              {/*         <strong> */}
              {/*           {ele.charAt(0).toUpperCase() + ele.slice(1)} */}
              {/*         </strong> */}
              {/*       </MenuItem> */}
              {/*     ))} */}
              {/*   </DropdownButton> */}
              {/* )} */}
            </Box>
            {!!onClose && (
              <CloseButton
                onClick={onClose}
                sx={{ borderRadius: 4 }}
                aria-label="close"
              />
            )}
          </Box>
          <Tabs
            value={buildTab}
            onChange={handleBuildChange}
            aria-label="build tabs"
            variant="fullWidth"
            TabIndicatorProps={{
              sx: {
                backgroundColor:
                  theme.palette[
                    (characterInfo.vision as Element) ??
                    "primary"
                  ].main,
              },
            }}
          >
            {(builds ?? [{ name: "WIP" }]).map((build, index) => (
              <Tab
                label={build.name}
                {...a11yProps(index)}
                sx={{
                  color: `${theme.palette[
                    (characterInfo.vision.toLowerCase() as Element) ??
                    "primary"
                  ].main
                    } !important`,
                }}
                key={index}
              />
            ))}
          </Tabs>
        </CardContentEvenPadding>
      </StickyCard>
      <Suspense
        fallback={
          <Skeleton
            variant="rectangular"
            sx={{ width: "100%", height: "100%", minHeight: 5000 }}
          />
        }
      >
        <Card sx={{ borderRadius: 4 }}>
          <CardContentEvenPadding>
            <Stack flexDirection="column" gap={2}>
              <Typography variant="h5">{t("ui.character.buildInfo")}</Typography>
              {(builds ?? []).map((build, index) => (
                <TabPanel value={buildTab} index={index} key={index}>
                  <BuildDisplay build={build} />
                </TabPanel>
              ))}
            </Stack>
          </CardContentEvenPadding>
        </Card>
        <Card sx={{ borderRadius: 4 }}>
          <CardContentEvenPadding>
            <Stack flexDirection="column" gap={2}>
              <Typography variant="h5">{t("ui.character.skills")}</Typography>
              <Grid container spacing={2}>
                {[...characterInfo.skills, characterInfo.energySkill].map(
                  (skillTalent, index: number, arr) => (
                    <Grid
                      item
                      xs={12}
                      sm={arr.length < 4 ? 12 : 6}
                      md={
                        arr.length < 4
                          ? 12 / arr.length
                          : 6
                      }
                      lg={12 / arr.length}
                      key={index}
                    >
                      <SkillCard
                        skill={skillTalent}
                        index={skillTalent === characterInfo.energySkill ? `/genshin-helper-website/characters/${characterKey}/elemental-burst.webp` : `/genshin-helper-website/characters/${characterKey}/skill-${index + 1}.webp`}
                      />
                    </Grid>
                  )
                )}
              </Grid>
              <Typography variant="h5">{t("ui.character.passives")}</Typography>
              <Grid container spacing={2}>
                {characterInfo.passives.map(
                  (passive, index: number) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={isTraveler ? 6 : 4}
                        lg={isTraveler ? 6 : 4}
                        key={index}
                      >
                        <SkillCard
                          skill={passive}
                          index={`/genshin-helper-website/characters/${characterKey}/passive-${index + 1}.webp`}
                        />
                      </Grid>
                    );
                  }
                )}
              </Grid>
              <Typography variant="h5">
                {t("ui.character.constellations")} - {characterInfo.constellation}
              </Typography>
              <Grid container spacing={2}>
                {characterInfo.constellations.map(
                  (constellation, index: number) => {
                    return (
                      <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
                        <SkillCard
                          skill={constellation}
                          index={`/genshin-helper-website/characters/${characterKey}/constellation-${index + 1}.webp`}
                        />
                      </Grid>
                    );
                  }
                )}
              </Grid>
            </Stack>
          </CardContentEvenPadding>
        </Card>
      </Suspense>
    </>
  );
};
//
export default PageCharacter;

interface SkillCardProps {
  index: string;
  skill: { name: string, desc: string };
}
const SkillCard = ({
  index,
  skill,
}: SkillCardProps) => {
  const split = skill.desc.split("\\n").join("\n");
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
              {skill.name}
            </Typography>
          }
          avatar={
            <Avatar
              src={
                index
              }
            />
          }
        ></CardHeader>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContentEvenPadding sx={{ whiteSpace: "pre-wrap" }}>
            <Typography variant="body1"><UnityRichTextComponent>{split}</UnityRichTextComponent></Typography>
          </CardContentEvenPadding>
        </Collapse>
      </CardActionArea>
    </CardLight>
  );
};
