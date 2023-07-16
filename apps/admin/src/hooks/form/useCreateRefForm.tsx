import { Alert } from "components";
import { useCreateRef } from "hooks";
import { useAlert, useForm } from "lib";
import { HttpError } from "services/utils";
import { ResourceString } from "types";
import { useFormErrorHandler } from "./useFormErrorHandler";

//TODO: Default data should be from createDto !
interface CreateRefOptions<T extends object> {
  defaultData: {
    [K in keyof T]: { id: string | number };
  };
  parentResource: string;
}

export const useCreateRefForm = <T extends object>(
  resource: ResourceString,
  options: CreateRefOptions<T>
) => {
  const { errors, setError, resetErrors } = useFormErrorHandler();
  const { register, handleSubmit, reset } = useForm<T>();
  const alert = useAlert();

  const { mutate, isLoading } = useCreateRef(resource, {
    onSuccess: () => {
      alert.show({ render: <Alert message="Item created !" /> });
      reset();
      resetErrors();
    },
    onError: (error) => {
      if (error instanceof HttpError && error.status === 403) {
        alert.show({
          render: (
            <Alert message="This is a demo. Regular users cannot create new instances for safety reasons." />
          ),
        });
      } else {
        setError("badEntry");
      }
    },
    parentResource: options.parentResource,
  });

  const onSubmit = handleSubmit(async (data: Partial<T>) => {
    mutate({ data: { ...data, ...options.defaultData } });
  });

  return { register, onSubmit, isLoading, error: errors };
};
