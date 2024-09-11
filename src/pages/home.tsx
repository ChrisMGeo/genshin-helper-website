import CharacterPreview from "../components/character-preview";
import {
  allTravelerElements,
  allElements,
  allWeaponTypes,
  Element,
  WeaponType
} from "../consts";
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
import { elementSvg } from "../components/stat-icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "../theme";
import useLocalStorage from "../hooks/use-local-storage";
import SortByButton from "../components/sort-by-button";
import {
  allCharacterSortCriteria,
  CharacterSortCriteria,
  SortOrder,
} from "../types/sort";

import usePagination from "../hooks/use-pagination";
import useMediaQueryUp from "../hooks/use-media-query-up";
import CardContentEvenPadding from "../components/card-content-even-padding";
// import { allTravelerElements } from "../types/traveler";
import StickyCard from "../components/sticky-card";
import ExpandMore from "../components/expand-more";
import { ExpandMoreRounded } from "@mui/icons-material";
import { getTranslatedCharacterInfo } from "../consts/character-info";
import { useTranslation } from "react-i18next";
const toggleButtonSizeMap = { xs: 14, sm: 21, md: 21, lg: 28, xl: 28 };
const PageHome = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useLocalStorage("expanded", false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const PER_PAGE = 30;

  const brPt = useMediaQueryUp();
  const toggleButtonSize = toggleButtonSizeMap[brPt];


  const [elementFilter, setElementFilter] = useLocalStorage("elementFilter", [
    ...allElements,
  ] as Element[]);
  const [weaponFilter, setWeaponFilter] = useLocalStorage("weaponFilter", [
    ...allWeaponTypes,
  ] as WeaponType[]);
  const [sortCriteria, setSortCriteria] = useLocalStorage<CharacterSortCriteria>(
    "sortCriteria",
    "name" as CharacterSortCriteria
  );
  const [sortOrder, setSortOrder] = useLocalStorage<SortOrder>(
    "sortOrder",
    "ascending" as SortOrder
  );
  const [searchName, setSearchName] = useState("" as string);
  const handleElements = (
    _: MouseEvent<HTMLElement>,
    newElements: Element[]
  ) => {
    if (newElements.length) {
      setElementFilter(newElements);
    }
  };
  const handleWeapons = (
    _: MouseEvent<HTMLElement>,
    newWeapons: WeaponType[]
  ) => {
    if (newWeapons.length) {
      setWeaponFilter(newWeapons);
    }
  };
  const allCharacterInfo = getTranslatedCharacterInfo();
  const charToShow = [...allCharacterInfo]
    .sort(
      (a, b) => {
        let ascendingRes = 0;
        switch (sortCriteria) {
          case "name":
            ascendingRes = a.name.localeCompare(b.name);
            break;
          case "rarity":
            ascendingRes = a.rarity - b.rarity;
            break;
        }
        return sortOrder === "ascending" ? ascendingRes : -ascendingRes;
      }
    )
    .filter(
      (char) =>
        (char.nameId.startsWith("traveler")
          ? allTravelerElements.some((ele) => elementFilter.includes(ele))
          : elementFilter.includes(char.vision.toLowerCase() as Element)) &&
        weaponFilter.includes(char.weaponType.toLowerCase() as WeaponType) &&
        char.name.toLowerCase().includes(searchName.toLowerCase())
    );
  const count = Math.ceil(charToShow.length / PER_PAGE);
  const _data = usePagination(charToShow, PER_PAGE);
  const handlePageChange = (e: React.ChangeEvent<unknown>, p: number) => {
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
    if (_data.currentPage > _data.maxPage && _data.maxPage > 0) {
      console.log("jumping to max page")
      _data.jump(_data.maxPage);
    }
    document.querySelector("#back-to-top-anchor")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [elementFilter, weaponFilter, searchName]);
  return (
    <Box my={1} display="flex" flexDirection="column" gap={1}>
      <StickyCard>
        <CardContentEvenPadding
          sx={{ display: "flex", flexDirection: "column", gap: 1 }}
        >
          <Collapse in={expanded} timeout={200} unmountOnExit>
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
                  {allWeaponTypes.map((weapon) => (
                    <ToggleButton
                      value={weapon}
                      key={weapon}
                      color="success"
                      aria-label={weapon}
                    >
                      <Avatar
                        src={`/genshin-helper-website/weapon-types/${weapon}.webp`}
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
                  color="success"
                  value={searchName}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setSearchName(e.target.value)
                  }
                  autoFocus
                  size="small"
                  label={t("ui.home.search.characterName")}
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
                  onChangeCriteria={(s) => setSortCriteria(s as CharacterSortCriteria)}
                  order={sortOrder}
                  onChangeOrder={setSortOrder}
                  displayValue={(key) => t(`ui.sort.criterias.${key}`)}
                />
              </Grid>
            </Grid>
          </Collapse>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Pagination
                count={count}
                page={_data.currentPage}
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
              key={`${char.id}`}
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
