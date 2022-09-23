import { createTheme, darkScrollbar } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    geo: Palette["primary"];
    dendro: Palette["primary"];
    pyro: Palette["primary"];
    hydro: Palette["primary"];
    cryo: Palette["primary"];
    electro: Palette["primary"];
    anemo: Palette["primary"];
    physical: Palette["primary"];
  }
  interface PaletteOptions {
    geo?: PaletteOptions["primary"];
    dendro?: PaletteOptions["primary"];
    pyro?: PaletteOptions["primary"];
    hydro?: PaletteOptions["primary"];
    cryo?: PaletteOptions["primary"];
    electro?: PaletteOptions["primary"];
    anemo?: PaletteOptions["primary"];
    physical?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    geo: true;
    dendro: true;
    pyro: true;
    hydro: true;
    cryo: true;
    electro: true;
    anemo: true;
    physical: true;
  }
}

declare module "@mui/material/ToggleButton" {
  interface ToggleButtonPropsColorOverrides {
    geo: true;
    dendro: true;
    pyro: true;
    hydro: true;
    cryo: true;
    electro: true;
    anemo: true;
    physical: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    geo: true;
    dendro: true;
    pyro: true;
    hydro: true;
    cryo: true;
    electro: true;
    anemo: true;
    physical: true;
  }
}
declare module "@mui/material/InputBase" {
  interface InputBasePropsColorOverrides {
    geo: true;
    dendro: true;
    pyro: true;
    hydro: true;
    cryo: true;
    electro: true;
    anemo: true;
    physical: true;
  }
}

const defaultTheme = createTheme({
  palette: {
    mode: `dark`,
  },
});
export const theme = createTheme({
  palette: {
    mode: "dark",

    geo: defaultTheme.palette.augmentColor({
      color: { main: "#f8ba4e", contrastText: "#fff" },
      name: "geo",
    }),
    dendro: defaultTheme.palette.augmentColor({
      color: { main: "#a5c83b", contrastText: "#fff" },
      name: "dendro",
    }),
    pyro: defaultTheme.palette.augmentColor({
      color: { main: "#bf2818" },
      name: "pyro",
    }),
    hydro: defaultTheme.palette.augmentColor({
      color: { main: "#2f63d4" },
      name: "hydro",
    }),
    cryo: defaultTheme.palette.augmentColor({
      color: { main: "#77a2e6", contrastText: "#fff" },
      name: "cryo",
    }),
    electro: defaultTheme.palette.augmentColor({
      color: { main: "#b25dcd" },
      name: "electro",
    }),
    anemo: defaultTheme.palette.augmentColor({
      color: { main: "#61dbbb", contrastText: "#fff" },
      name: "anemo",
    }),
    physical: defaultTheme.palette.augmentColor({
      color: { main: "#aaaaaa" },
      name: "physical",
    }),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: defaultTheme.palette.mode === "dark" ? darkScrollbar() : null,
      },
    },
  },
});
