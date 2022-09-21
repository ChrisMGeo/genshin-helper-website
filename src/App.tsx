import { KeyboardArrowUp } from "@mui/icons-material";
import "./App.scss";
import {
  StyledEngineProvider,
  CssBaseline,
  ThemeProvider,
  useScrollTrigger,
  Zoom,
  Box,
  Fab,
  Grid,
  Container,
  Skeleton,
} from "@mui/material";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import { theme } from "./Theme";
import { lazy, Suspense } from "react";
import Footer from "./Footer";
const PageHome = lazy(() => import("./pages/PageHome"));
const PageCharacter = lazy(() => import("./pages/PageCharacter"));

const ScrollTop = ({ children }: { children: React.ReactElement }) => {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 85, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
};

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter basename="/">
          <Content />
          <ScrollTop>
            <Fab size="small" color="default" aria-label="scroll back to top">
              <KeyboardArrowUp />
            </Fab>
          </ScrollTop>
        </HashRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
const Content = () => {
  return (
    <Grid container direction="column" minHeight="100vh">
      <Grid item>
        <Header />
      </Grid>
      <Container maxWidth="xl" sx={{ px: { xs: 0.5, sm: 1, md: 2 } }}>
        <Suspense
          fallback={
            <Skeleton
              variant="rectangular"
              sx={{ width: "100%", height: "100%" }}
            />
          }
        >
          <Routes>
            <Route index element={<PageHome />} />
            <Route path=":characterKey/*" element={<PageCharacter />} />
          </Routes>
        </Suspense>
      </Container>
      <Grid item flexGrow={1} />
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default App;
