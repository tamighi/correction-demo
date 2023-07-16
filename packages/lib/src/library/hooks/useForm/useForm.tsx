import React from "react";
import { Leaves } from "./types";
import {
  ControlledRegisterOptions,
  ControlledRegisterReturn,
  useControlledForm,
} from "./useControlledForm";
import {
  UncontrolledRegisterOptions,
  UncontrolledRegisterReturn,
  useUncontrolledForm,
} from "./useUncontrolledForm";
import { addValueToData } from "./utils";

// TODO: Clean types
// TODO: Error handling
type RegisterOptions = ControlledRegisterOptions | UncontrolledRegisterOptions;

type RegisterFunction<T extends object> = (
  name: Leaves<T>,
  options?: RegisterOptions
) => ControlledRegisterReturn | UncontrolledRegisterReturn;

type HandleSubmitFunction<T extends object> = (
  onSubmit: (data: Partial<T>) => void
) => (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => void;

interface UseFormReturn<T extends object> {
  register: RegisterFunction<T>;
  reset: () => void;
  handleSubmit: HandleSubmitFunction<T>;
  // errors: { [k in Leaves<T>]?: string };
}

const useForm = <T extends object>(): UseFormReturn<T> => {
  const {
    register: uncontrolledRegister,
    reset: unControlledReset,
    getInputs: getUncontrolledInputs,
  } = useUncontrolledForm<T>();
  const {
    register: controlledRegister,
    reset: controlledReset,
    getInputs: getControlledInputs,
  } = useControlledForm<T>();

  // const [errors, setErrors] = React.useState<{ [k in Leaves<T>]?: string }>({});

  const register: RegisterFunction<T> = React.useCallback(
    (name, options = {}) => {
      // If there is onChange, it is a controlled input
      if ("onChange" in options) {
        return controlledRegister(name, options);
      } else {
        return uncontrolledRegister(name, options);
      }
    },
    [uncontrolledRegister, controlledRegister]
  );

  const reset = () => {
    controlledReset();
    unControlledReset();
  };

  const handleSubmit = (onSubmit: (data: Partial<T>) => void) => {
    return (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
      event.preventDefault();

      /* const errors = {
        ...getUncontrolledErrors(),
      };

      setErrors(errors);
      if (Object.keys(errors).length > 0) {
        return;
      } */

      const inputs = {
        ...getUncontrolledInputs(),
        ...getControlledInputs(),
      };

      let data = Object.keys(inputs).reduce((result, key) => {
        addValueToData(result, key, inputs[key as Leaves<T>]);
        return result;
      }, {});

      onSubmit(data);
    };
  };

  return { register, handleSubmit, reset };
};

export default useForm;
