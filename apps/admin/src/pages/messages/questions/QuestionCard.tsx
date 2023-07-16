import { Header } from "components";
import { MessageCard } from "../common";

import QuestionList from "./QuestionList";

const QuestionCard = ({ openDrawer }: { openDrawer: boolean }) => {
  return (
    <MessageCard openDrawer={openDrawer}>
      <Header>
        <h3>Demandes d'information</h3>
      </Header>
      <QuestionList />
    </MessageCard>
  );
};

export default QuestionCard;
