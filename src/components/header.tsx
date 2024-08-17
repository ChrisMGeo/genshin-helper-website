import {
  AppBar,
  Container,
  MenuItem,
  Skeleton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Suspense } from "react";
import DropdownButton from "./dropdown-button";
import { languages } from "../consts/languages";
import { useTranslation } from "react-i18next";

const Header = () => {
  return (
    <Suspense fallback={<Skeleton variant="rectangular" height={56} />}>
      <HeaderContent />
    </Suspense>
  );
};

const LocaleDropdown = () => {
  const { i18n } = useTranslation();
  return <DropdownButton title={languages[i18n.resolvedLanguage ?? "en"]} color="success" style={{ marginLeft: "auto" }}>
    {Object.keys(languages).map((langId) => {
      const lang = languages[langId];
      return <MenuItem
        key={langId}
        onClick={() => i18n.changeLanguage(langId)}
      >
        {lang}
      </MenuItem>
    })}
  </DropdownButton>
}

const HeaderContent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) return <MobileHeader />;
  return (
    <>
      <AppBar
        sx={{ display: "flex", flexWrap: "nowrap" }}
        position="static"
        id="back-to-top-anchor"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap>
              Genshin Helper Website
            </Typography>
            <LocaleDropdown />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
const MobileHeader = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{ display: "flex", flexWrap: "nowrap" }}
        id="back-to-top-anchor"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap>
              Genshin Helper Website
            </Typography>
            <LocaleDropdown />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Header;
