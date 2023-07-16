import { useStyles } from "../../hooks";

import CSSClasses from "./IconBase.css";

export type IconProps = React.SVGProps<SVGSVGElement>;

const IconBase = (props: IconProps) => {
  const { style: customStyle, className, children, ...rest } = props;

  const classNames = `${CSSClasses.IconBase} ` + (className || "");

  const styles = useStyles({
    background: "transparent",
    customStyle,
    themeTransition: false,
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classNames}
      style={styles}
      {...rest}
    >
      {children}
    </svg>
  );
};

export default IconBase;
