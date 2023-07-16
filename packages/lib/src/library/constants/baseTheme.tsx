import { Theme } from "../types";

export const lightTheme: Theme = {
  palette: {
    mode: "light",
    colors: {
      primary: "#45dced",
      secondary: "#03cac6",
      surface: "#ffffff",
      text: "black",
    },
    actions: {
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      hoverImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
    },
  },
  transition: undefined,
} as const;

export const darkTheme: Theme = {
  palette: {
    mode: "light",
    colors: {
      primary: "#393053",
      secondary: "#144272",
      surface: "#202121",
      text: "white",
    },
    actions: {
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      hoverImage:
        "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
    },
  },
  transition: undefined,
} as const;
