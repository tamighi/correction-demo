import React from "react";
import { InputBase } from "..";
import { Colors, useStyles } from "../..";

import CSSClasses from "./Input.css";

// TODO: Color present in InputHTMLAttributes<HTMLInputElement> as string.
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: keyof Colors;
  flex?: boolean;
  label?: string;
}

const Input = (
  props: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const {
    style: customStyle,
    className = "",
    color = "text",
    flex = false,
    label,
    placeholder = "",
    ...rest
  } = props;

  const classNames = `${CSSClasses.Input} ` + className;

  const styles = useStyles({
    background: "surface",
    customStyle,
    color,
  });

  return (
    <InputBase label={label} flex={flex}>
      <input
        style={styles}
        placeholder={placeholder}
        className={classNames}
        ref={ref}
        {...rest}
      />
    </InputBase>
  );
};

export default React.forwardRef(Input);
