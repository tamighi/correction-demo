import React from "react";

import { Button, DataGrid } from "lib";

import { useNavigate, useSearchParams } from "react-router-dom";
import { Column } from "react-table";

import { ResourceString, ResourceType } from "types";
import { useGetCurrentQuery, useGetList, useSetQuery } from "hooks";
import { ApiErrorImage, EmptyData, Loader } from "components";

const entryPerPage = 20;

export interface SimpleGridProps<R extends ResourceString> {
  resource: R;
  columns: Column<ResourceType<R>>[];
}

export const SimpleGrid = <R extends ResourceString>({
  resource,
  columns,
}: SimpleGridProps<R>) => {
  const [page, setPage] = React.useState(1);

  const query = useGetCurrentQuery();
  const setQuery = useSetQuery();
  const [params] = useSearchParams();

  const { data, isLoading, isError } = useGetList<R>(resource, query);

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
      <DataGrid
        data={data.data}
        columns={columns}
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
