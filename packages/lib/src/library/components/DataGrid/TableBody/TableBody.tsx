import { useStyles } from "../../../hooks";

import CSSClasses from "./TableBody.css";

export type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;

const TableBody = (props: TableBodyProps) => {
  const { children, className, style: customStyle, ...rest } = props;

  const classNames = `${CSSClasses.TableBody} ` + (className || "");

  const styles = useStyles({ background: "surface", customStyle });

  return (
    <tbody {...rest} style={styles} className={classNames}>
      {children}
    </tbody>
  );
};

export default TableBody;
