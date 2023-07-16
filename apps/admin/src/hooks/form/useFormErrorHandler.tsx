import React from "react";

type KeyError = "unknownError" | "badEntry";

type FormError = {
  [k in KeyError]: boolean;
};

const initialErrors = {
  unknownError: false,
  badEntry: false,
};

export const useFormErrorHandler = () => {
  const [errors, setErrors] = React.useState<FormError | undefined>();

  const resetErrors = React.useCallback(() => {
    setErrors(undefined);
  }, []);

  const setError = React.useCallback((error: KeyError) => {
    setErrors({ ...initialErrors, [error]: true });
  }, []);

  return { errors, setError, resetErrors };
};
