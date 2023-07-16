import { Paper } from "..";
import { Colors, useStyles } from "../..";

import CSSClasses from "./Appbar.css";

export interface AppbarProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof Colors;
}

const Appbar = (props: AppbarProps) => {
  const {
    style: customStyle,
    children,
    className,
    variant: type = "primary",
    ...rest
  } = props;

  const classNames = `${CSSClasses.Appbar} ` + (className || "");

  const styles = useStyles({ background: type, customStyle });

  return (
    <Paper style={styles} className={classNames} {...rest}>
      {children}
    </Paper>
  );
};

export default Appbar;
