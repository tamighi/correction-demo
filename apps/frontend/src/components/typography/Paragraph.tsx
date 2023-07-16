import React from "react";
import styles from "./Typography.css";

type Props = React.HTMLAttributes<HTMLParagraphElement>;

const Paragraph = React.forwardRef<HTMLParagraphElement, Props>((props, ref) => {
  const { className, ...rest } = props;
  return <p className={`${styles.Paragraph} ${className || ""}`} ref={ref} {...rest} />;
});

export default Paragraph
