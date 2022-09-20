import {
  AppBar,
  Container,
  Skeleton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Suspense } from "react";

export default function Header() {
  return (
    <Suspense fallback={<Skeleton variant="rectangular" height={56} />}>
      <HeaderContent />
    </Suspense>
  );
}

function HeaderContent() {
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
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
function MobileHeader() {
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
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
