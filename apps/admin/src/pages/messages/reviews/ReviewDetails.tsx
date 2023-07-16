import { EmptyData, SimpleField } from "components";
import { useGetCurrentQuery, useGetOne } from "hooks";
import { MessageDetails } from "../common";

const ReviewDetails = ({ id }: { id: number }) => {
  const query = useGetCurrentQuery();
  const { data } = useGetOne("review", { id }, query);

  if (!data?.data) {
    return <EmptyData />;
  }
  const review = data.data;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <SimpleField label="Note">{review.note}</SimpleField>
      <MessageDetails resource="review" message={review} />
    </div>
  );
};

export default ReviewDetails;
