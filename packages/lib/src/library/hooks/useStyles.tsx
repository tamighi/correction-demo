import React from "react";

import { Colors, useTheme } from "..";

interface StyleOptions {
  customStyle?: React.CSSProperties;
  background?: keyof Colors | "transparent";
  color?: keyof Colors;
  themeTransition?: boolean;
}

const useStyles = (styleOptions: StyleOptions = {}) => {
  const {
    customStyle = {},
    background = "primary",
    color = "text",
    themeTransition: transition = true,
  } = styleOptions;

  const theme = useTheme();

  const colors = theme.palette.colors;

  const defaultStyles: React.CSSProperties = {
    backgroundColor:
      (background !== "transparent" && colors[background]) || "transparent",
    color: colors[color],
  };

  const mergedStyles: React.CSSProperties = {
    transition: !transition
      ? customStyle.transition
      : customStyle.transition
      ? theme.transition + ", " + customStyle.transition
      : theme.transition,
  };

  const styles: React.CSSProperties = {
    ...defaultStyles,
    ...customStyle,
    ...mergedStyles,
  };

  return styles;
};

export default useStyles;
