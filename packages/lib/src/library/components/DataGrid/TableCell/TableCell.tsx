import CSSClasses from "./TableCell.css";

export type TableCellProps = React.HTMLAttributes<HTMLTableCellElement>;

const TableCell = (props: TableCellProps) => {
  const { children, className, style: customStyle, ...rest } = props;

  const classNames = `${CSSClasses.TableCell} ` + (className || "");

  return (
    <td {...rest} style={customStyle} className={classNames}>
      {children}
    </td>
  );
};

export default TableCell;
