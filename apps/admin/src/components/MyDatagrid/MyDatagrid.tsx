import React from "react";

import { Button, DataGrid, DeleteIcon, IconButton, useAlert } from "lib";

import { useNavigate, useSearchParams } from "react-router-dom";
import { Column } from "react-table";

import { ResourceString, ResourceType } from "types";
import {
  useDeleteMany,
  useGetCurrentQuery,
  useGetList,
  useSetQuery,
} from "hooks";
import {
  Alert,
  ApiErrorImage,
  EmptyData,
  Loader,
  SelectedOptions,
} from "components";

const entryPerPage = 20;

export interface MyDatagridProps<R extends ResourceString> {
  resource: R;
  columns: Column<ResourceType<R>>[];
}

export const MyDatagrid = <R extends ResourceString>({
  resource,
  columns,
}: MyDatagridProps<R>) => {
  const [page, setPage] = React.useState(1);
  const [selected, setSelected] = React.useState<ResourceType<R>[]>([]);

  const query = useGetCurrentQuery();
  const setQuery = useSetQuery();
  const [params] = useSearchParams();

  const { data, isLoading, isError } = useGetList<R>(resource, query);

  const alert = useAlert();

  const { mutate } = useDeleteMany(
    resource,
    {
      onSuccess: () =>
        alert.show({
          render: (
            <Alert message={`${selected.length} item(s) deleted`} />
          ),
        }),
    },
    query
  );

  const onDeleteClick = async () => {
    mutate({ ids: selected.map((value) => value.id) });
  };

  const navigate = useNavigate();

  const onSetPageClick = (newPage: number) => {
    setPage(newPage);
    setQuery({
      range: [(newPage - 1) * entryPerPage, newPage * entryPerPage - 1],
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!data?.data || isError) {
    return <ApiErrorImage />;
  }

  if (data.count === 0) {
    return <EmptyData />;
  }

  return (
    <>
      <SelectedOptions selected={selected}>
        <IconButton onClick={onDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </SelectedOptions>
      <DataGrid
        data={data.data}
        columns={columns}
        selection
        setSelected={setSelected}
        clickable
        onRowClick={(value: ResourceType<R>) =>
          navigate(`${value.id}/?${params}`)
        }
      />
      <Button disabled={page <= 1} onClick={() => onSetPageClick(page - 1)}>
        Previous
      </Button>
      <Button
        disabled={data.count <= query.range[1] + 1}
        onClick={() => onSetPageClick(page + 1)}
      >
        Next
      </Button>
    </>
  );
};
