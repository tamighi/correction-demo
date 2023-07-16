import { dataProvider, GetListParams, UpdateParams } from "services/api";
import { ResourceString, ResourceType } from "types";
import { useMutation, useQueryClient } from "react-query";

interface UpdateOneOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
  parentResource: ResourceString;
}

export const useUpdateOneRef = <R extends ResourceString>(
  resource: ResourceString,
  options: UpdateOneOptions,
  query?: GetListParams<ResourceType<R>>
) => {
  const queryClient = useQueryClient();

  const { onError, parentResource, onSuccess } = options;

  const queryKey = query ? [parentResource, query] : [parentResource];

  const mutation = useMutation(
    (params: UpdateParams<ResourceType<R>>) =>
      dataProvider.update(resource, params),
    {
      onSuccess: () => {
        onSuccess?.();
        queryClient.invalidateQueries(queryKey);
      },
      onError,
    }
  );
  return mutation;
};
