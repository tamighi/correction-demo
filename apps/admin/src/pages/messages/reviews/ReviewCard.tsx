import { Header } from "components";
import { MessageCard } from "../common";

import ReviewList from "./ReviewList";

const ReviewCard = ({ openDrawer }: { openDrawer: boolean }) => {
  return (
    <MessageCard openDrawer={openDrawer}>
      <Header>
        <h3>Avis</h3>
      </Header>
      <ReviewList />
    </MessageCard>
  );
};

export default ReviewCard;
