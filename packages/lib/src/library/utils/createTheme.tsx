import { lightTheme, darkTheme } from "../constants";
import { Palette, Theme } from "../types";

type DeepPartial<T> = T extends object
  ? { [Key in keyof T]?: DeepPartial<T[Key]> }
  : T | undefined;

const createPalette = (userPalette: DeepPartial<Palette> | undefined) => {
  const palette =
    userPalette?.mode === "dark" ? darkTheme.palette : lightTheme.palette;

  if (userPalette?.mode !== undefined) {
    palette.mode = userPalette.mode;
  }

  if (userPalette?.colors) {
    palette.colors = {
      ...palette.colors,
      ...userPalette.colors,
    };
  }
  return palette;
};

export const createTheme = (userTheme: DeepPartial<Theme>): Theme => {
  const theme = {
    palette: createPalette(userTheme.palette),
    transition: userTheme.transition || lightTheme.transition,
  };
  return theme;
};
