import React from "react";

type BreakPoints = "xs" | "sm" | "md" | "lg" | "xl";

const getCurrentBreakPoint = (): BreakPoints => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 1536) {
    return "xl";
  } else if (windowWidth >= 1200) {
    return "lg";
  } else if (windowWidth >= 900) {
    return "md";
  } else if (windowWidth >= 600) {
    return "sm";
  } else {
    return "xs";
  }
};
const useCurrentBreakpoint = () => {
  const [currentBreakPoint, setCurrentBreakPoint] =
    React.useState<BreakPoints>(getCurrentBreakPoint);

  React.useEffect(() => {
    function handleResize() {
      setCurrentBreakPoint(getCurrentBreakPoint());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return currentBreakPoint;
};

export default useCurrentBreakpoint;
