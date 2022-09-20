import CharacterPreview from "../components/CharacterPreview";
import {
  allElements,
  allWeaponTypeKeys,
  ElementKey,
  WeaponTypeKey,
} from "../types/consts";
import {
  Avatar,
  Box,
  Collapse,
  Grid,
  Pagination,
  Skeleton,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { ChangeEvent, MouseEvent, Suspense, useEffect, useState } from "react";
import { getWeaponIcon } from "../types/icons";
import { elementSvg } from "../components/StatIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "../Theme";
import useLocalStorage from "../hooks/useLocalStorage";
import SortByButton from "../components/SortByButton";
import {
  allCharacterSortCriteria,
  CharacterSortCriteria,
  characterSortMap,
  SortOrder,
} from "../types/sort";

import { allCharacters } from "../types/api";
import usePagination from "../hooks/usePagination";
import useMediaQueryUp from "../hooks/useMediaQueryUp";
import CardContentEvenPadding from "../components/CardContentEvenPadding";
import { allTravelerElements } from "../types/traveler";
import StickyCard from "../components/StickyCard";
import ExpandMore from "../components/ExpandMore";
import { ExpandMoreRounded } from "@mui/icons-material";

const PageHome = () => {
  const [expanded, setExpanded] = useLocalStorage("expanded", false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [page, setPage] = useState(1);
  const PER_PAGE = 25;

  const brPt = useMediaQueryUp();
  const toggleButtonSizeMap = { xs: 14, sm: 21, md: 21, lg: 28, xl: 28 };
  const toggleButtonSize = toggleButtonSizeMap[brPt];

  const [elementFilter, setElementFilter] = useLocalStorage("elementFilter", [
    ...allElements,
  ] as ElementKey[]);
  const [weaponFilter, setWeaponFilter] = useLocalStorage("weaponFilter", [
    ...allWeaponTypeKeys,
  ] as WeaponTypeKey[]);
  const [sortCriteria, setSortCriteria] = useLocalStorage(
    "sortCriteria",
    "Name" as CharacterSortCriteria
  );
  const [sortOrder, setSortOrder] = useLocalStorage(
    "sortOrder",
    "Ascending" as SortOrder
  );
  const [searchName, setSearchName] = useState("" as string);
  const handleElements = (
    _: MouseEvent<HTMLElement>,
    newElements: ElementKey[]
  ) => {
    if (newElements.length) {
      setElementFilter(newElements);
    }
  };
  const handleWeapons = (
    _: MouseEvent<HTMLElement>,
    newWeapons: WeaponTypeKey[]
  ) => {
    if (newWeapons.length) {
      setWeaponFilter(newWeapons);
    }
  };
  const charToShow: any[] = allCharacters
    .sort((a, b) => characterSortMap.getSortFunc(sortCriteria, sortOrder)(a, b))
    .filter(
      (char) =>
        (char.characterKey === "Traveler"
          ? allTravelerElements.some((ele) => elementFilter.includes(ele))
          : elementFilter.includes(char.vision_key.toLowerCase())) &&
        weaponFilter.includes(char.weapon_type.toLowerCase()) &&
        char.name.toLowerCase().includes(searchName.toLowerCase())
    );
  const count = Math.ceil(charToShow.length / PER_PAGE);
  const _data = usePagination(charToShow, PER_PAGE);
  const handlePageChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    _data.jump(p);
    const anchor = (
      (e.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");
    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  useEffect(() => {
    const finalPage = _data.jump(page);
    setPage(finalPage);
    document.querySelector("#back-to-top-anchor")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementFilter, weaponFilter, searchName]);
  return (
    <Box my={1} display="flex" flexDirection="column" gap={1}>
      <StickyCard>
        <CardContentEvenPadding
          sx={{ display: "flex", flexDirection: "column", gap: 1 }}
        >
          <Collapse in={expanded} timeout={200} unmountOnExit easing="linear">
            <Grid container spacing={1}>
              <Grid item>
                <ToggleButtonGroup
                  value={elementFilter}
                  onChange={handleElements}
                >
                  {allElements.map((element) => (
                    <ToggleButton
                      value={element}
                      color="success"
                      key={element}
                      aria-label={element}
                    >
                      <FontAwesomeIcon
                        icon={elementSvg[element] as any}
                        color={theme.palette[element].main}
                        style={{
                          fontSize: `${toggleButtonSize}px`,
                        }}
                      />
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Grid>
              <Grid item>
                <ToggleButtonGroup
                  value={weaponFilter}
                  onChange={handleWeapons}
                >
                  {allWeaponTypeKeys.map((weapon) => (
                    <ToggleButton
                      value={weapon}
                      key={weapon}
                      color="success"
                      aria-label={weapon}
                    >
                      <Avatar
                        src={getWeaponIcon(weapon)}
                        sx={{
                          width: toggleButtonSizeMap,
                          height: toggleButtonSizeMap,
                        }}
                        alt={weapon as string}
                      />
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Grid>
              <Grid item flexGrow={1}>
                <TextField
                  value={searchName}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setSearchName(e.target.value)
                  }
                  autoFocus
                  size="small"
                  label="Character Name"
                  sx={{ height: "100%" }}
                  InputProps={{
                    sx: { height: "100%" },
                  }}
                />
              </Grid>
              <Grid item>
                <SortByButton
                  sx={{ height: "100%" }}
                  sortKeys={[...allCharacterSortCriteria]}
                  value={sortCriteria}
                  onChangeCriteria={setSortCriteria}
                  order={sortOrder}
                  onChangeOrder={setSortOrder}
                />
              </Grid>
            </Grid>
          </Collapse>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Pagination
                count={count}
                page={page}
                onChange={handlePageChange}
              />
            </Grid>
            <Grid item flexGrow={1}></Grid>
            <Grid item>
              <ExpandMore expand={expanded} onClick={handleExpandClick}>
                <ExpandMoreRounded />
              </ExpandMore>
            </Grid>
          </Grid>
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
        <Grid container spacing={2} justifyContent="space-around">
          {_data.currentData().map((char) => (
            <Grid
              item
              key={`${char.characterKey}.${char.vision_key.toLowerCase()}`}
            >
              <CharacterPreview characterInfo={char} />
            </Grid>
          ))}
        </Grid>
      </Suspense>
    </Box>
  );
};
export default PageHome;
