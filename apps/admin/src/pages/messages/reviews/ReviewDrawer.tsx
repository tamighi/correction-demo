import { RightDrawer } from "components";
import ReviewDetails from "./ReviewDetails";

interface Match {
  open: true;
  id: number;
}

interface NoMatch {
  open: false;
  id: undefined;
}

type ReviewDrawerProps = Match | NoMatch;

const ReviewDrawer = (props: ReviewDrawerProps) => {
  const { id, open } = props;

  return (
    <RightDrawer open={open}>{open && <ReviewDetails id={id} />}</RightDrawer>
  );
};

export default ReviewDrawer;
