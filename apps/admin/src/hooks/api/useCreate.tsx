import { CreateParams, dataProvider } from "services/api";
import { useMutation, useQueryClient } from "react-query";
import { ResourceString, ResourceType } from "types";

interface CreateOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const useCreate = <R extends ResourceString>(
  resource: ResourceString,
  options: CreateOptions = {}
) => {
  const queryClient = useQueryClient();

  const { onError, onSuccess: onSuccessCallback } = options;

  const onSuccess = (data: CreateParams<ResourceType<R>>) => {
    onSuccessCallback?.();

    const oldData = queryClient.getQueryData<{ data: object[] }>([resource]);

    if (oldData) {
      queryClient.setQueryData([resource], () => {
        return {
          ...oldData,
          data: [data.data, ...oldData.data],
        };
      });
    }

    queryClient.invalidateQueries([resource]);
  };

  const mutation = useMutation(
    (params: CreateParams<ResourceType<R>>) =>
      dataProvider.create(resource, params),
    {
      onSuccess,
      onError,
    }
  );

  return mutation;
};
