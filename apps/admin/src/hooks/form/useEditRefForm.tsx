import React from "react";

import { HttpError } from "services/utils";
import { useAlert, useForm } from "lib";
import { useFormErrorHandler, useGetCurrentQuery } from "hooks";
import { useUpdateOneRef } from "hooks";
import { ResourceString } from "types";
import { Alert } from "components";

interface EditRefFormOptions {
  parentResource: ResourceString;
}

export const useEditRefForm = <T extends object>(
  ressource: ResourceString,
  id: number | string,
  options: EditRefFormOptions
) => {
  const { errors, resetErrors, setError } = useFormErrorHandler();
  const alert = useAlert();
  const { register, handleSubmit } = useForm<T>();

  React.useEffect(() => {
    resetErrors();
  }, [id, resetErrors]);

  const onError = React.useCallback(
    (error: unknown) => {
      if (error instanceof HttpError) {
        if (error.status === 403) {
          alert.show({
            render: (
              <Alert message="This is a demo. Regular users cannot modify instances for safety reasons." />
            ),
          });
        } else {
          setError("badEntry");
        }
      } else {
        setError("unknownError");
      }
    },
    [setError]
  );

  const query = useGetCurrentQuery();
  const { mutate, isLoading } = useUpdateOneRef(
    ressource,
    {
      onSuccess: () => {
        alert.show({ render: <Alert message="Item updated !" /> });
      },
      onError,
      parentResource: options.parentResource,
    },
    query
  );

  const onSubmit = handleSubmit(async (data: Partial<T>) => {
    mutate({ data, id });
  });

  return {
    register,
    onSubmit,
    isLoading,
    error: errors,
    setError,
  };
};
