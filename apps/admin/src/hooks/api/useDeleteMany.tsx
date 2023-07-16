import { dataProvider, DeleteManyParams, GetListParams } from "services/api";
import { useMutation, useQueryClient } from "react-query";
import { ResourceString, ResourceType } from "types";
import { useAlert } from "lib";
import { HttpError } from "services/utils";
import { Alert } from "components";

interface DeleteManyOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const useDeleteMany = <R extends ResourceString>(
  resource: ResourceString,
  options: DeleteManyOptions = {},
  query?: GetListParams<ResourceType<R>>
) => {
  const queryClient = useQueryClient();
  const alert = useAlert();

  const queryKey = query ? [resource, query] : [resource];

  const { onError, onSuccess } = options;

  const mutation = useMutation(
    (params: DeleteManyParams) => dataProvider.deleteMany(resource, params),
    {
      onMutate: async (params) => {
        await queryClient.cancelQueries(queryKey);

        const oldData = queryClient.getQueryData<{
          data: { id: number | string }[];
        }>(queryKey);

        if (oldData) {
          queryClient.setQueryData(queryKey, () => {
            return {
              ...oldData,
              data: oldData.data.filter(
                (object) => !params.ids.includes(object.id)
              ),
            };
          });
        }
        return { oldData };
      },
      onError: (error, _, context) => {
        if (error instanceof HttpError) {
          if (error.status === 403) {
            alert.show({
              render: (
                <Alert message="This is a demo. Regular users cannot delete instances for safety reasons." />
              ),
            });
          }
        }
        queryClient.setQueryData(queryKey, context?.oldData);
        onError?.(error);
      },
      onSettled: () => {
        queryClient.invalidateQueries(queryKey);
      },
      onSuccess,
    }
  );

  return mutation;
};
