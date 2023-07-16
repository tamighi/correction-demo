import CSSClasses from "./Navbar.css";

export type NavbarProps = React.HTMLAttributes<HTMLElement>;

const Navbar = (props: NavbarProps) => {
  const { style, children, className, ...rest } = props;

  const classNames = `${CSSClasses.Navbar} ` + (className || "");

  return (
    <nav className={classNames} style={style} {...rest}>
      {children}
    </nav>
  );
};

export default Navbar;
