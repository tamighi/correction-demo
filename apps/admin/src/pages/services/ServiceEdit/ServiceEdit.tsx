import { useParams } from "react-router-dom";

import { EmptyData, MainCard } from "components";
import { ServiceEditForm } from "./ServiceEditForm";
import { ServiceEditHeader } from "./ServiceEditHeader";
import { SubServiceEdit } from "./SubServices";

import { useGetCurrentQuery, useGetOne } from "hooks";
import { Card } from "lib";

export const ServiceEdit = () => {
  const { id } = useParams() as { id: string };
  const query = useGetCurrentQuery();

  const { data, isLoading, isError } = useGetOne(
    "service",
    { id: parseInt(id) },
    query
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Unkown error...</div>;
  }

  if (!data?.data) {
    return <EmptyData />;
  }

  return (
    <MainCard>
      <ServiceEditHeader serviceDto={data.data} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Card
          style={{
            flex: 1,
            margin: "12px",
            padding: "12px",
            display: "grid",
            alignContent: "flex-start",
            gap: "12px",
            minWidth: "300px",
          }}
        >
          <ServiceEditForm data={data.data} />
        </Card>
        <Card
          style={{
            flex: 1,
            margin: "12px",
            padding: "12px",
            display: "grid",
            alignContent: "flex-start",
            gap: "12px",
            minWidth: "300px",
          }}
        >
          <SubServiceEdit
            serviceId={data.data.id}
            subServices={data.data.subServices}
          />
        </Card>
      </div>
    </MainCard>
  );
};
