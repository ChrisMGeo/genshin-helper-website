import { KeyboardArrowUp } from "@mui/icons-material";
import './App.css'
import {
  StyledEngineProvider,
  CssBaseline,
  ThemeProvider,
  Fab,
  Grid,
  Container,
  Skeleton,
} from "@mui/material";
import { HashRouter, Route, Routes } from "react-router-dom";
import ScrollTop from "./components/scroll-top";
import { theme } from "./theme";
import { Suspense } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import PageHome from "./pages/home";
import PageCharacter from "./pages/character";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter basename="/">
          <Content />
          <ScrollTop>
            <Fab size="small" color="success" aria-label="scroll back to top">
              <KeyboardArrowUp />
            </Fab>
          </ScrollTop>
        </HashRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

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

export default App
