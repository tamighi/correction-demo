import { Title } from "components";
import { CenteredPage } from "../core";

import ReviewContactForm from "./ReviewContactForm";

const ReviewPage = () => {
  return (
    <CenteredPage>
      <Title>Laissez moi un avis !</Title>
      <ReviewContactForm />
    </CenteredPage>
  );
};

export default ReviewPage;
