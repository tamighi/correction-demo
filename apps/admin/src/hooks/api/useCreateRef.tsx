import { CreateParams, dataProvider } from "services/api";
import { useMutation, useQueryClient } from "react-query";
import { ResourceString, ResourceType } from "types";

interface CreateRefOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
  parentResource: string;
}

export const useCreateRef = <R extends ResourceString>(
  resource: ResourceString,
  options: CreateRefOptions
) => {
  const queryClient = useQueryClient();

  const { onError, onSuccess: onSuccessCallback, parentResource } = options;

  const onSuccess = () => {
    onSuccessCallback?.();
    queryClient.invalidateQueries([parentResource]);
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
