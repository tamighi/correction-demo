import { matchPath, useLocation } from "react-router-dom";
import { MessageDrawer } from "../common";

import QuestionCard from "./QuestionCard";
import QuestionDetails from "./QuestionDetails";

const QuestionPage = () => {
  const location = useLocation();

  const match = matchPath("/question/:id", location.pathname);

  return (
    <>
      <QuestionCard openDrawer={!!match} />
      <MessageDrawer open={!!match}>
        {!!match && (
          <QuestionDetails id={parseInt(match.params.id as string)} />
        )}
      </MessageDrawer>
    </>
  );
};

export default QuestionPage;
