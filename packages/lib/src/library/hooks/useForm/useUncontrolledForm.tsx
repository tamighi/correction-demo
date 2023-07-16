import React from "react";
import { Leaves } from "./types";

// TODO: Same in controlled and uncontrolled
type GetUncontrolledInputs<T extends object> = () => {
  [k in Leaves<T>]?: string;
};

export type UncontrolledRegisterReturn = {
  name: string;
  ref: React.RefObject<InputElements> | undefined;
};

export type UncontrolledRegister<T extends object> = (
  name: Leaves<T>,
  options?: UncontrolledRegisterOptions
) => UncontrolledRegisterReturn;

type UseUncontrolledFormReturn<T extends object> = {
  register: UncontrolledRegister<T>;
  reset: () => void;
  getInputs: GetUncontrolledInputs<T>;
};

type InputElements = HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement;

export type UncontrolledRegisterOptions = {
  //required?: boolean;
};

type InputStore = {
  ref: React.RefObject<InputElements>;
  // required?: boolean;
};

type PartialMapToRefs<T extends object> = {
  [k in Leaves<T>]?: InputStore;
};

export const useUncontrolledForm = <
  T extends object
>(): UseUncontrolledFormReturn<T> => {
  const [inputRefs, setInputRefs] = React.useState<PartialMapToRefs<T>>({});

  const register = React.useCallback<UncontrolledRegister<T>>(
    (name, _options = {}) => {
      // const { required } = options;

      let ref = inputRefs[name]?.ref;
      if (!ref) {
        ref = React.createRef<InputElements>();
        setInputRefs((prevInputRefs) => ({
          ...prevInputRefs,
          [name]: { ref },
        }));
      }

      const inputProps = {
        name: name,
        ref: ref,
      };

      return inputProps;
    },
    [inputRefs]
  );

  const reset = () => {
    for (const k in inputRefs) {
      const ref = inputRefs[k as Leaves<T>]?.ref?.current;
      if (ref) {
        ref.value = "";
      }
    }
  };

  /* const getErrors = () => {
    const errors: { [k in Leaves<T>]?: string } = {};
    for (const k in inputRefs) {
      const input = inputRefs[k as Leaves<T>];
      const value = input?.ref?.current?.value;
      if (input?.required === true && (value === undefined || value === "")) {
        errors[k as Leaves<T>] = "Required";
      }
    }
    return errors;
  }; */

  const getInputs = () => {
    return Object.keys(inputRefs).reduce((data, key) => {
      return {
        ...data,
        [key]: inputRefs[key as Leaves<T>]?.ref?.current?.value,
      };
    }, {});
  };

  return { register, getInputs, reset };
};
