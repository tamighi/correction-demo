import { dataProvider, GetListParams, GetOneParams } from "services/api";
import { ResourceString, ResourceType } from "types";
import { useQuery, useQueryClient } from "react-query";

export const useGetOne = <R extends ResourceString>(
  resource: R,
  params: GetOneParams,
  query?: GetListParams<ResourceType<R>>
) => {
  const { id } = params;

  const queryKey = query ? [resource, query] : [resource];

  const queryClient = useQueryClient();

  const initialData = () => {
    const data =
      queryClient.getQueryData<Record<string, ResourceType<R>[]>>(queryKey);

    const initialData = data?.data?.find((item) => item.id == id);

    return initialData ? { data: initialData } : undefined;
  };

  const queryResult = useQuery(
    [resource, params],
    () => dataProvider.getOne<R>(resource, params),
    {
      initialData,
    }
  );
  return queryResult;
};
