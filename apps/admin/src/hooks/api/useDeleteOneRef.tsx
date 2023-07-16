import { dataProvider, DeleteParams } from "services/api";
import { useMutation, useQueryClient } from "react-query";
import { useAlert } from "lib";
import { Alert } from "components";
import { HttpError } from "services/utils";

interface DeleteOneRefOptions {
  parentResource: string;
}

export const useDeleteOneRef = (
  resource: string,
  options: DeleteOneRefOptions
) => {
  const queryClient = useQueryClient();

  const { parentResource } = options;

  const alert = useAlert();

  const mutation = useMutation(
    (params: DeleteParams) => dataProvider.delete(resource, params),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([parentResource]);
        alert.show({ render: <Alert message="Item deleted !" /> });
      },
      onError: (error) => {
        if (error instanceof HttpError && error.status === 403) {
          alert.show({
            render: (
              <Alert message="This is a demo. Regular users cannot delete instances for safety reasons." />
            ),
          });
        }
      },
    }
  );
  return mutation;
};
