import { useSearchParams } from "react-router-dom";
import { useGetCurrentQuery } from "./useGetCurrentQuery";

export const useSetQuery = () => {
  const [_, setSearchParams] = useSearchParams();

  const currentQuery = useGetCurrentQuery();

  const setQuery = (newQuery: {
    filter?: object;
    sort?: { [k: string]: "ASC" | "DESC" };
    range?: number[];
  }) => {
    const { filter, sort, range } = newQuery;

    setSearchParams((params) => {
      params.set(
        "filter",
        filter ? JSON.stringify(filter) : JSON.stringify(currentQuery.filter)
      );
      params.set(
        "sort",
        sort ? JSON.stringify(sort) : JSON.stringify(currentQuery.sort)
      );
      params.set(
        "range",
        range ? JSON.stringify(range) : JSON.stringify(currentQuery.range)
      );
      return params;
    });
  };

  return setQuery;
};
