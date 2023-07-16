import React from "react";

const useMediaQuery = (query: string) => {
  const matchQueryList = React.useMemo(() => window.matchMedia(query), [query]);
  const [matches, setMatches] = React.useState(matchQueryList.matches);

  React.useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };
    matchQueryList.addEventListener("change", handleChange);
    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [matchQueryList]);
  return matches;
};

export default useMediaQuery;
