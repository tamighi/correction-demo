import React from "react";
import { InputBase } from "..";
import { Colors, useStyles } from "../..";

import CSSClasses from "../Input/Input.css";

export interface SelectProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  color?: keyof Colors;
  flex?: boolean;
  label?: string;
}

// TODO: Possibility to select none, and hide it if value === "" + make select:not value work for InputBase
const Select = (
  props: SelectProps,
  ref: React.ForwardedRef<HTMLSelectElement>
) => {
  const {
    style: customStyle,
    className = "",
    color = "text",
    flex = false,
    label,
    children,
    ...rest
  } = props;

  const classNames = `${CSSClasses.Input} ` + className;

  const styles = useStyles({
    background: "surface",
    customStyle,
    color,
  });

  return (
    <InputBase flex={flex} label={label}>
      <select style={styles} className={classNames} ref={ref} {...rest}>
        {children}
      </select>
    </InputBase>
  );
};

export default React.forwardRef(Select);
