import { ArrowBackIcon, DataGrid, IconButton } from "lib";

import { useService } from "hooks";
import { SubServiceDto } from "types";
import { EmptyData, Paragraph, Title } from "components";

import { useNavigate, useParams } from "react-router-dom";
import { Column } from "react-table";

const columns: Column<SubServiceDto>[] = [
  {
    accessor: "textType",
    Header: () => {
      return <span style={{fontSize: "22px", fontWeight: "bold"}}>Type de texte</span>
    },
    Cell: (props) => {
      return <span style={{fontSize: "22px" }}>{props.cell.value}</span>
    }
  },
  {
    accessor: "pricePerCharacter",
    Header: () => {
      return <span style={{fontSize: "22px", fontWeight: "bold"}}>Prix par caractere</span>
    },
    Cell: (props) => {
      return <span style={{fontSize: "22px" }}>{props.cell.value}</span>
    },
  },
];

const ServiceDetails = () => {
  const { id } = useParams() as { id: string };
  const { data: service } = useService(id);
  const navigate = useNavigate();

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
