import React from "react";

import { ResourceType, MessageDto } from "types";
import { MyDatagrid, SimpleGrid } from "components";
import { Column } from "react-table";
import { useIsSmall } from "hooks";

type MessageResourceString = "question" | "review" | "devis";

const desktopMessageColumns: Column<MessageDto>[] = [
  {
    accessor: "status",
    Cell: (props) => {
      const { value } = props;
      return (
        <div
          style={{
            backgroundColor:
              value == "pending"
                ? "orange"
                : value == "refused"
                ? "red"
                : "green",
            minHeight: "17px",
          }}
        />
      );
    },
  },
  {
    accessor: "name",
    Header: "Nom",
    maxWidth: 50,
    Cell: ({ value }) => (
      <span
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "block",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </span>
    ),
  },
  {
    accessor: "email",
    Header: "Email",
    maxWidth: 50,
    Cell: ({ value }) => (
      <span
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "block",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </span>
    ),
  },
  {
    accessor: "message",
    Header: "Message",
    maxWidth: 50,
    Cell: ({ value }) => (
      <span
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "block",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </span>
    ),
  },
  {
    accessor: "date",
    Header: "Date",
    maxWidth: 50,
    Cell: ({ value }) => {
      if (!value) {
        return null;
      }
      const date = new Date(value).toLocaleDateString();

      return (
        <span
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
            whiteSpace: "nowrap",
          }}
        >
          {date}
        </span>
      );
    },
  },
];

type MessageListDesktopProps<R extends MessageResourceString> = {
  additionnalColumn?: Column<ResourceType<R>>[];
  resource: R;
};

const MessageListDesktop = <R extends MessageResourceString>(
  props: MessageListDesktopProps<R>
) => {
  const { additionnalColumn = [], resource } = props;
  const isSmall = useIsSmall();

  const columns = React.useMemo(
    () => [
      ...additionnalColumn,
      ...(desktopMessageColumns as Column<ResourceType<R>>[]),
    ],
    []
  );

  return (
    <>
      {isSmall ? (
        <SimpleGrid columns={columns} resource={resource} />
      ) : (
        <MyDatagrid columns={columns} resource={resource} />
      )}
    </>
  );
};

export default MessageListDesktop;
