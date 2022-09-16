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
import Offset from "./components/Offset";

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
      <AppBar position="fixed" sx={{ display: "flex", flexWrap: "nowrap" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap>
              Genshin Helper Website
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Offset />
    </>
  );
}
function MobileHeader() {
  return (
    <>
      <AppBar position="fixed" sx={{ display: "flex", flexWrap: "nowrap" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap>
              Genshin Helper Website
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
}
