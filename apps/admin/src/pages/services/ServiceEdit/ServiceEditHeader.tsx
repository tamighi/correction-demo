import { ArrowBackIcon, DeleteIcon, IconButton } from "lib";
import { useNavigate } from "react-router-dom";

import { ServiceDto } from "types";
import { useDeleteOne, useGetCurrentQuery } from "hooks";
import { Header } from "components";

export const ServiceEditHeader = ({
  serviceDto,
}: {
  serviceDto: ServiceDto;
}) => {
  const navigate = useNavigate();

  const query = useGetCurrentQuery();
  const { mutate } = useDeleteOne("service", query);

  return (
    <Header>
      <IconButton onClick={() => navigate("/service")}>
        <ArrowBackIcon />
      </IconButton>
      <h3>Update service {serviceDto.name}</h3>
      <div style={{ flexGrow: 1 }} />
      <IconButton type="button" onClick={() => mutate({ id: serviceDto.id })}>
        <DeleteIcon style={{ color: "red" }} />
      </IconButton>
    </Header>
  );
};
