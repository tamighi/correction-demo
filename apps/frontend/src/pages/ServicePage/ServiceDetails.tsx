import { ArrowBackIcon, DataGrid, IconButton } from "lib";

import { SubServiceDto } from "types";
import { EmptyData, Paragraph, Title } from "components";

import { useNavigate, useParams } from "react-router-dom";
import { Column } from "react-table";
import { services } from "../../constants";

const columns: Column<SubServiceDto>[] = [
  {
    accessor: "textType",
    Header: () => {
      return (
        <span style={{ fontSize: "22px", fontWeight: "bold" }}>Text type</span>
      );
    },
    Cell: (props) => {
      return <span style={{ fontSize: "22px" }}>{props.cell.value}</span>;
    },
  },
  {
    accessor: "pricePerCharacter",
    Header: () => {
      return (
        <span style={{ fontSize: "22px", fontWeight: "bold" }}>
          Price per character
        </span>
      );
    },
    Cell: (props) => {
      return <span style={{ fontSize: "22px" }}>{props.cell.value}</span>;
    },
  },
];

const ServiceDetails = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const service = services.find((service) => service.id === Number(id));

  if (!service) {
    return null;
  }

  return (
    <>
      <IconButton onClick={() => navigate("/services")}>
        <ArrowBackIcon />
      </IconButton>
      <Title>{service.name}</Title>
      <Paragraph>{service.description}</Paragraph>
      {service.subServices && service.subServices.length !== 0 ? (
        <DataGrid columns={columns} data={service.subServices} />
      ) : (
        <EmptyData message="Ce service n'est pas encore détaillé" />
      )}
    </>
  );
};

export default ServiceDetails;
