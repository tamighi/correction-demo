export const mergeStyles = (
  customStyle: React.CSSProperties,
  baseStyle: React.CSSProperties
): React.CSSProperties => {
  const mergedStyles: React.CSSProperties = {
    transition: !baseStyle.transition
      ? customStyle.transition
      : customStyle.transition
      ? baseStyle.transition + ", " + customStyle.transition
      : baseStyle.transition,
  };

  const styles: React.CSSProperties = {
    ...baseStyle,
    ...customStyle,
    ...mergedStyles,
  };

  return styles;
};
