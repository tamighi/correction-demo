import { MessageDto, ResourceType } from "types";
import { SimpleGrid } from "components";
import { Column } from "react-table";

type MessageResourceString = "question" | "review" | "devis";

const mobileMessageColumns: Column<MessageDto>[] = [
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

type MobileMessageListProps<R extends MessageResourceString> = {
  resource: R;
};

const MessageListMobile = <R extends MessageResourceString>(
  props: MobileMessageListProps<R>
) => {
  const { resource } = props;

  return (
    <SimpleGrid
      columns={mobileMessageColumns as Column<ResourceType<R>>[]}
      resource={resource}
    />
  );
};

export default MessageListMobile;
