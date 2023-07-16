import React from "react";
import { InputBase } from "..";
import { Colors, useStyles } from "../..";

import CSSClasses from "../Input/Input.css";

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "color"> {
  color?: keyof Colors;
  flex?: boolean;
  label?: string;
}

const TextArea = (
  props: TextAreaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) => {
  const {
    style: customStyle,
    className = "",
    color = "text",
    flex = false,
    placeholder = "",
    label,
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
      <textarea
        placeholder={placeholder}
        style={styles}
        className={classNames}
        ref={ref}
        {...rest}
      />
    </InputBase>
  );
};

export default React.forwardRef(TextArea);
