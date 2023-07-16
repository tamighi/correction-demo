import { dataProvider, GetListParams, UpdateParams } from "services/api";
import { ResourceString, ResourceType } from "types";
import { useMutation, useQueryClient } from "react-query";

interface UpdateOneOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const useUpdateOne = <R extends ResourceString>(
  resource: ResourceString,
  options: UpdateOneOptions = {},
  query?: GetListParams<ResourceType<R>>
) => {
  const queryClient = useQueryClient();

  const queryKey = query ? [resource, query] : [resource];

  const { onError, ...rest } = options;

  const mutation = useMutation(
    (params: UpdateParams<ResourceType<R>>) =>
      dataProvider.update<R>(resource, params),
    {
      onMutate: async (newData) => {
        // Mutate old data list
        await queryClient.cancelQueries(queryKey);

        const oldData = queryClient.getQueryData<{
          data: { id: number | string }[];
        }>([resource, queryKey]);

        if (oldData) {
          queryClient.setQueryData(queryKey, () => {
            return {
              ...oldData,
              data: [
                ...oldData.data.map((previous) =>
                  previous.id == newData.id
                    ? { ...previous, ...newData.data }
                    : previous
                ),
              ],
            };
          });
        }

        // Mutate old data entity
        const updated = queryClient.getQueryData<{
          data: { id: number | string };
        }>([resource, { id: newData.id.toString() }]);
        if (updated) {
          queryClient.setQueryData(
            [resource, { id: newData.id.toString() }],
            () => {
              return {
                ...updated,
                data: { ...updated?.data, ...newData.data },
              };
            }
          );
        }

        return { oldData, updated };
      },
      onError: (error, _, context) => {
        onError?.(error);
        if (context?.updated) {
          queryClient.setQueryData(
            [resource, { id: context.updated.data.id.toString() }],
            context?.updated
          );
        }
        if (context?.oldData) {
          queryClient.setQueryData(queryKey, context.oldData);
        }
      },
      onSettled: (data) => {
        queryClient.invalidateQueries([
          resource,
          { id: data?.data.id.toString() },
        ]);
        queryClient.invalidateQueries(queryKey);
      },
      ...rest,
    }
  );
  return mutation;
};
