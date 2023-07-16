import React from "react";

import { useAlert } from "lib";

import { useMutation, useQueryClient } from "react-query";

import { dataProvider, DeleteParams, GetListParams } from "services/api";
import { ResourceString, ResourceType } from "types";
import { Alert } from "components";
import { HttpError } from "services/utils";

export const useDeleteOne = <R extends ResourceString>(
  resource: string,
  query?: GetListParams<ResourceType<R>>
) => {
  const queryClient = useQueryClient();

  const queryKey = query ? [resource, query] : [resource];

  const undoRef = React.useRef<() => void>();

  const alert = useAlert();

  const onUndo = React.useCallback(() => undoRef.current?.(), [undoRef]);

  const mutation = useMutation(
    (params: DeleteParams) => {
      const mutationPromise = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          dataProvider
            .delete(resource, params)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
        }, 5000);
        const cancelMutation = () => {
          clearTimeout(timeout);
          alert.close();
          resolve({ message: "Undo" });
        };
        undoRef.current = cancelMutation;
      });

      return mutationPromise;
    },
    {
      onMutate: async (params) => {
        alert.show({
          render: <Alert message="Item supprimé !" onUndo={onUndo} />,
        });

        // TODO: Necessary ? Or page item deleted ?

        // TODO: What is this ?
        await queryClient.cancelQueries(queryKey);

        // Optimistic update
        const oldData = queryClient.getQueryData<{
          data: { id: number | string }[];
        }>(queryKey);
        if (oldData) {
          queryClient.setQueryData(queryKey, () => {
            return {
              ...oldData,
              data: oldData.data.filter((object) => params.id !== object.id),
            };
          });
        }

        const oldOne = queryClient.getQueryData([resource, params]);
        queryClient.setQueryData([resource, params], () => {
          return {
            ...oldData,
            data: null,
          };
        });

        return { oldData, oldOne };
      },
      onError: (error, params, context) => {
        if (error instanceof HttpError && error.status === 403) {
          alert.show({
            render: (
              <Alert message="This is a demo. Regular users cannot delete items for safety reasons." />
            ),
          });
        } else {
          alert.show({
            render: <Alert message="Une erreur est survenue ..." />,
          });
        }
        queryClient.setQueryData(queryKey, context?.oldData);
        queryClient.setQueryData([resource, params], context?.oldOne);
      },
      onSuccess: (data, params, context) => {
        if (
          data &&
          typeof data === "object" &&
          "message" in data &&
          data.message === "Undo"
        ) {
          queryClient.setQueryData(queryKey, context?.oldData);
          queryClient.setQueryData([resource, params], context?.oldOne);
        } else {
          queryClient.invalidateQueries(queryKey);
        }
      },
    }
  );
  return mutation;
};
