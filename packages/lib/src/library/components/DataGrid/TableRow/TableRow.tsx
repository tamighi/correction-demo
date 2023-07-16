import CSSClasses from "./TableRow.css";

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;

// TODO: Header style if header=true in props
const TableRow = (props: TableRowProps) => {
  const { children, className, style: customStyle, ...rest } = props;

  const classNames = `${CSSClasses.TableRow} ` + (className || "");

  return (
    <tr {...rest} style={customStyle} className={classNames}>
      {children}
    </tr>
  );
};

export default TableRow;
