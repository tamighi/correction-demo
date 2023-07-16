import { Title } from "components";
import { CenteredPage } from "../core";

import ReviewContactForm from "./ReviewContactForm";

const ReviewPage = () => {
  return (
    <CenteredPage>
      <Title>Leave me a review !</Title>
      <ReviewContactForm />
    </CenteredPage>
  );
};

export default ReviewPage;
