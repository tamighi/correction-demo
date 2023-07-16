import { dataProvider, GetListParams } from "services/api";
import { ResourceString, ResourceType } from "types";
import { useQuery } from "react-query";

export const useGetList = <R extends ResourceString>(
  resource: R,
  params: GetListParams<ResourceType<R>>
) => {
  const queryResult = useQuery([resource, params], () =>
    dataProvider.getList<R>(resource, params)
  );
  return queryResult;
};
