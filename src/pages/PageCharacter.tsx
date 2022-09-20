import { Navigate, useNavigate, useParams } from "react-router-dom";
import { allCharacterKeys, CharacterKey, ElementKey } from "../types/consts";
// import allCharacterInfo from "../data/Characters/allCharacterInfo.json";
import { allCharInfo as allCharacterInfo } from "../types/api";
import { Box, Card, MenuItem, Skeleton, Tab, Tabs } from "@mui/material";
import { Suspense, useCallback, useState } from "react";
// import characterAssets from "../data/Characters";
import CardContentEvenPadding from "../components/CardContentEvenPadding";
import CloseButton from "../components/CloseButton";
import CharSelectDropdown from "../components/CharSelectDropdown";
import useLocalStorage from "../hooks/useLocalStorage";
import { allTravelerElements, TravelerElementKey } from "../types/traveler";
import DropdownButton from "../components/DropdownButton";
import { theme } from "../Theme";
import StickyCard from "../components/StickyCard";

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
  ) as any;
  console.log(characterInfo);

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
            <Tab
              label="Item one"
              {...a11yProps(0)}
              sx={{
                color: `${
                  theme.palette[
                    (characterInfo.vision_key.toLowerCase() as ElementKey) ??
                      "primary"
                  ].main
                } !important`,
              }}
            />
            <Tab
              label="Item two"
              {...a11yProps(1)}
              sx={{
                color: `${
                  theme.palette[
                    (characterInfo.vision_key.toLowerCase() as ElementKey) ??
                      "primary"
                  ].main
                } !important`,
              }}
            />
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
            <TabPanel value={buildTab} index={0}>
              Content one
            </TabPanel>
            <TabPanel value={buildTab} index={1}>
              Content two
            </TabPanel>
          </CardContentEvenPadding>
        </Card>
      </Suspense>
    </>
  );
};

export default PageCharacter;
