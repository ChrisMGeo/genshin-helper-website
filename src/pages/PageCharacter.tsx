import { Navigate, useNavigate, useParams } from "react-router-dom";
import { allCharacterKeys, CharacterKey, ElementKey } from "../types/consts";
import { allCharInfo as allCharacterInfo } from "../types/api";
import {
  Box,
  Card,
  Grid,
  MenuItem,
  Skeleton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Suspense, useCallback, useState } from "react";
import CardContentEvenPadding from "../components/CardContentEvenPadding";
import CloseButton from "../components/CloseButton";
import CharSelectDropdown from "../components/CharSelectDropdown";
import useLocalStorage from "../hooks/useLocalStorage";
import { allTravelerElements, TravelerElementKey } from "../types/traveler";
import DropdownButton from "../components/DropdownButton";
import { theme } from "../Theme";
import StickyCard from "../components/StickyCard";
import SkillTalentCard from "../components/SkillTalentCard";
import PassiveTalentCard from "../components/PassiveTalentCard";
import ConstellationCard from "../components/ConstellationCard";
import {
  Build,
  CharacterBuilds,
  CharacterEx,
  CharacterWBuilds,
  Constellation,
  PassiveTalent,
  SkillTalent,
} from "../types/Character";
import untypedBuilds from "../data/Characters/characterBuilds.json";
import BuildDisplay from "../components/BuildDisplay";
const characterBuilds: CharacterBuilds = untypedBuilds as CharacterBuilds;

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

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const PageCharacter = () => {
  const navigate = useNavigate();
  const onClose = useCallback(() => navigate("/"), [navigate]);

  const { characterKey } = useParams<{ characterKey?: CharacterKey }>();
  const invalidKey = !allCharacterKeys.includes((characterKey as any) ?? "");
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
  characterKey: CharacterKey;
  onClose?: () => void;
}

const CharacterDisplayCard = ({
  characterKey,
  onClose,
}: CharacterDisplayCardProps) => {
  const [buildTab, setBuildTab] = useState(0);
  const handleBuildChange = (_e: React.SyntheticEvent, newValue: number) => {
    setBuildTab(newValue);
  };
  const [travelerElement, setTravelerElement] =
    useLocalStorage<TravelerElementKey>("travelerElement", "anemo");
  const travelerId = `traveler-${travelerElement}`;
  const isTraveler = characterKey === "Traveler";

  const characterInfo = allCharacterInfo.find((char) =>
    isTraveler ? char.id === travelerId : char.characterKey === characterKey
  ) as CharacterEx;
  console.log(characterInfo);
  const characterWBuilds: CharacterWBuilds = (
    characterKey === "Traveler"
      ? characterBuilds.Traveler[travelerElement as TravelerElementKey]
      : characterBuilds[characterKey as Exclude<CharacterKey, "Dori">]
  ) as CharacterWBuilds;
  const builds: Build[] = (characterWBuilds?.builds as Build[]) ?? [];
  console.log(builds);

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
                  (characterInfo.vision_key.toLowerCase() as ElementKey) ??
                  "success"
                }
              />
              {isTraveler && (
                <DropdownButton
                  variant="outlined"
                  color={travelerElement}
                  title={<strong>{travelerElement}</strong>}
                  sx={{ borderRadius: 4 }}
                >
                  {allTravelerElements.map((ele) => (
                    <MenuItem
                      key={ele}
                      selected={ele === travelerElement}
                      disabled={ele === travelerElement}
                      onClick={() => setTravelerElement(ele)}
                    >
                      <strong>
                        {ele.charAt(0).toUpperCase() + ele.slice(1)}
                      </strong>
                    </MenuItem>
                  ))}
                </DropdownButton>
              )}
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
                    (characterInfo.vision_key.toLowerCase() as ElementKey) ??
                      "primary"
                  ].main,
              },
            }}
          >
            {builds.map((build, index) => (
              <Tab
                label={build.name}
                {...a11yProps(index)}
                sx={{
                  color: `${
                    theme.palette[
                      (characterInfo.vision_key.toLowerCase() as ElementKey) ??
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
              <Typography variant="h5">Build Info</Typography>
              {builds.map((build: Build, index) => (
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
              <Typography variant="h5">Skills</Typography>
              <Grid container spacing={2}>
                {characterInfo.skillTalents.map(
                  (skillTalent: SkillTalent, index: number) => (
                    <Grid
                      item
                      xs={12}
                      sm={characterInfo.skillTalents.length < 4 ? 12 : 6}
                      md={
                        characterInfo.skillTalents.length < 4
                          ? 12 / characterInfo.skillTalents.length
                          : 6
                      }
                      lg={12 / characterInfo.skillTalents.length}
                      key={index}
                    >
                      <SkillTalentCard
                        skillTalent={skillTalent}
                        characterKey={characterKey}
                        characterInfo={characterInfo}
                        travelerElement={travelerElement}
                      />
                    </Grid>
                  )
                )}
              </Grid>
              <Typography variant="h5">Passives</Typography>
              <Grid container spacing={2}>
                {characterInfo.passiveTalents.map(
                  (passive: PassiveTalent, index: number) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={isTraveler ? 6 : 4}
                        lg={isTraveler ? 6 : 4}
                        key={index}
                      >
                        <PassiveTalentCard
                          passiveTalent={passive}
                          characterKey={characterKey}
                          travelerElement={travelerElement}
                          index={(index + 1) as 1 | 2 | 3}
                        />
                      </Grid>
                    );
                  }
                )}
              </Grid>
              <Typography variant="h5">
                Constellations - {characterInfo.constellation}
              </Typography>
              <Grid container spacing={2}>
                {characterInfo.constellations.map(
                  (constellation: Constellation, index: number) => {
                    return (
                      <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
                        <ConstellationCard
                          constellation={constellation}
                          characterKey={characterKey}
                          travelerElement={travelerElement}
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

export default PageCharacter;
