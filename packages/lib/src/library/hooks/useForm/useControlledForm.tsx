import React from "react";

import { InputElements, Leaves } from "./types";

export type ControlledRegisterOptions = {
  onChange: (value: string) => void;
  // required?: boolean
};

type InputStore = {
  input: string;
  onChange: (event: any) => void;
};

type PartialMapToInputStore<T extends object> = {
  [k in Leaves<T>]?: InputStore;
};

export type ControlledRegisterReturn = {
  name: string;
  onChange: (event: any) => void;
  value: string;
  // required?: boolean
};

type ControlledRegisterFunction<T extends object> = (
  name: Leaves<T>,
  options: ControlledRegisterOptions
) => ControlledRegisterReturn;

type GetControlledInputs<T extends object> = () => {
  [k in Leaves<T>]?: string;
};

export type UseControlledFormReturn<T extends object> = {
  register: ControlledRegisterFunction<T>;
  reset: () => void;
  getInputs: GetControlledInputs<T>;
};

export const useControlledForm = <
  T extends object
>(): UseControlledFormReturn<T> => {
  const [inputs, setInputs] = React.useState<PartialMapToInputStore<T>>({});

  const register: ControlledRegisterFunction<T> = (name, options) => {
    const { onChange } = options;
    return {
      name,
      onChange: (event: React.ChangeEvent<InputElements>) => {
        const { name, value } = event.target;
        setInputs((prev) => ({
          ...prev,
          [name]: {
            onChange,
            input: value,
          },
        }));
        onChange(value);
      },
      value: inputs[name]?.input || "",
    };
  };

  const reset = () => {
    Object.keys(inputs).map((key) => inputs[key as Leaves<T>]?.onChange(""));
  };

  const getInputs = () => {
    return Object.keys(inputs).reduce((data, key) => {
      return {
        ...data,
        [key]: inputs[key as Leaves<T>]?.input,
      };
    }, {});
  };

  return { register, getInputs, reset };
};
