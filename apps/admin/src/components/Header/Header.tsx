import { Toolbar, ToolbarProps } from "lib";
import styles from "./Header.css";

const Header = (props: ToolbarProps) => {
  const { children, className, ...rest } = props;

  const classNames = `${className ? className : ""} ${styles.Header}`;

  return (
    <Toolbar {...rest} className={classNames}>
      {children}
    </Toolbar>
  );
};

export default Header;
