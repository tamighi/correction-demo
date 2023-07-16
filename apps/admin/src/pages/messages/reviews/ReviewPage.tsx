import { matchPath, useLocation } from "react-router-dom";
import { MessageDrawer } from "../common";
import ReviewCard from "./ReviewCard";
import ReviewDetails from "./ReviewDetails";

const ReviewPage = () => {
  const location = useLocation();

  const match = matchPath("/review/:id", location.pathname);

  return (
    <>
      <ReviewCard openDrawer={!!match} />
      <MessageDrawer open={!!match}>
        {!!match && <ReviewDetails id={parseInt(match.params.id as string)} />}
      </MessageDrawer>
    </>
  );
};

export default ReviewPage;
