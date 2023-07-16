export type Colors = {
  primary: string;
  secondary: string;
  surface: string;
  text: string;
};

export type Actions = {
  disabled: string;
  disabledBackground: string;
  hoverImage: string;
};

export interface Palette {
  mode: "dark" | "light";
  colors: Colors;
  actions: Actions;
}

export interface Theme {
  palette: Palette;
  transition?: string;
}
