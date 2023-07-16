import { useSearchParams } from "react-router-dom";

const baseParams = {
  filter: "{}",
  range: "[0, 19]",
  sort: '["id", "DESC"]',
};

export const useGetCurrentQuery = () => {
  const [currentParams] = useSearchParams();

  const params = {
    ...baseParams,
    ...Object.fromEntries(currentParams),
  };

  const query = {
    sort: JSON.parse(params.sort),
    filter: JSON.parse(params.filter),
    range: JSON.parse(params.range),
  };

  return query;
};
