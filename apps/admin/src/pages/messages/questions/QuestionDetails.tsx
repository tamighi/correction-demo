import { EmptyData } from "components";
import { useGetCurrentQuery, useGetOne } from "hooks";
import { MessageDetails } from "../common";

const QuestionDetails = ({ id }: { id: number }) => {
  const query = useGetCurrentQuery();
  const { data } = useGetOne("question", { id }, query);

  if (!data?.data) {
    return <EmptyData />;
  }

  return <MessageDetails resource="question" message={data.data} />;
};

export default QuestionDetails;
