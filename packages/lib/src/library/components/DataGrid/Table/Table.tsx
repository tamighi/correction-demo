import CSSClasses from "./Table.css";

export type TableProps = React.HTMLAttributes<HTMLTableElement>;

const Table = (props: TableProps) => {
  const { children, className, style: customStyle, ...rest } = props;

  const classNames = `${CSSClasses.Table} ` + (className || "");

  return (
    <table {...rest} style={customStyle} className={classNames}>
      {children}
    </table>
  );
};

export default Table;
