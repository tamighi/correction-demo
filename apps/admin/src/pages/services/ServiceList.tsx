import { ResourceType } from "types";
import { CardLayout, Row } from "components";

const columns: Row<ResourceType<"service">>[] = [
  { Header: "Nom du service", accessor: "name" },
  { Header: "Description du service", accessor: "description" },
  {
    Header: "Services",
    accessor: "subServices",
    Cell: (data) => (
      <>
        {data?.map((subService) => (
          <span key={subService.id}>{subService.textType} </span>
        ))}
      </>
    ),
  },
];

export const ServiceList = () => {
  return <CardLayout rows={columns} resource="service" />;
};
