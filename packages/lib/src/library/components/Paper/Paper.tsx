import { Colors, useStyles } from "../..";

import CSSClasses from "./Paper.css";

export interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof Colors;
}

const Paper = (props: PaperProps) => {
  const {
    style: customStyle,
    variant: type = "surface",
    children,
    className,
    ...rest
  } = props;

  const classNames = `${CSSClasses.Paper} ` + (className || "");

  const styles = useStyles({ background: type, customStyle });

  return (
    <div className={classNames} style={styles} {...rest}>
      {children}
    </div>
  );
};

export default Paper;
