import { useStyles } from "../../hooks";

import CSSClasses from "./IconButton.css";

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = (props: IconButtonProps) => {
  const { style: customStyle, children, className, ...rest } = props;

  const classNames = `${CSSClasses.IconButton} ` + (className || "");

  const styles = useStyles({ background: "transparent", customStyle });

  styles.transition = styles.transition
    ? styles.transition + ", background-color 225ms"
    : "background-color 225ms";

  return (
    <button className={classNames} style={styles} {...rest}>
      {children}
    </button>
  );
};

export default IconButton;
