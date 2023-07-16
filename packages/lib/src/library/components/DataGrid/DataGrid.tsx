import React from "react";
import { Column, useTable, useRowSelect, Hooks, CellProps } from "react-table";
import { IndeterminateCheckbox } from "./IndeterminateCheckbox";

import { Table, TableBody, TableCell, TableHead, TableRow } from ".";

import CSSClasses from "./DataGrid.css";

interface DataProps<T extends object> {
  data: T[];
  columns: Column<T>[];
}

type SelectDataProps<T> =
  | {
      selection: true;
      setSelected: React.Dispatch<React.SetStateAction<T[]>>;
    }
  | { selection?: false; setSelected?: undefined };

type RowClickDataProps<T> =
  | {
      clickable: true;
      onRowClick: (data: T) => void;
    }
  | { clickable?: false; onRowClick?: undefined };

export type DataGridProps<T extends object> = DataProps<T> &
  SelectDataProps<T> &
  RowClickDataProps<T>;

const DataGrid = <T extends object>({
  data,
  columns,
  selection = false,
  setSelected,
  clickable = false,
  onRowClick,
}: DataGridProps<T>) => {
  const plugins = [];
  if (selection) {
    plugins.push(useRowSelect);
    plugins.push((hooks: Hooks<T>) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }: CellProps<T>) => (
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    });
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable({ columns, data }, ...plugins);

  React.useEffect(() => {
    if (setSelected) {
      setSelected(selectedFlatRows.map((row) => row.original));
    }
  }, [selectedFlatRows, setSelected]);

  return (
    <Table {...getTableProps()} style={{ width: "100%" }}>
      <TableHead>
        {headerGroups.map((headerGroup) => {
          const { key, ...headerGroupProps } =
            headerGroup.getHeaderGroupProps();
          return (
            <TableRow key={key} {...headerGroupProps}>
              {headerGroup.headers.map((column) => {
                const { key, ...headerProps } = column.getHeaderProps();
                return (
                  <TableCell
                    key={key}
                    style={{ paddingTop: "12px", paddingBottom: "12px" }}
                    {...headerProps}
                  >
                    {column.render("Header")}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableHead>
      <TableBody {...getTableBodyProps()} className={CSSClasses.StrippedTable}>
        {rows.map((row) => {
          prepareRow(row);
          const { key, ...rowProps } = row.getRowProps();
          return (
            <TableRow
              key={key}
              className={clickable ? CSSClasses.Clickable : ""}
              onClick={onRowClick ? () => onRowClick(row.original) : undefined}
              {...rowProps}
            >
              {row.cells.map((cell) => {
                const { key, ...cellProps } = cell.getCellProps({
                  style: { maxWidth: cell.column.maxWidth },
                });
                return (
                  <TableCell key={key} {...cellProps}>
                    {cell.render("Cell")}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default React.memo(DataGrid) as typeof DataGrid;
