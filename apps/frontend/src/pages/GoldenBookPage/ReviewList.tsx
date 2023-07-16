import { ReviewDto } from "types";

import ReviewItem from "./ReviewItem";

import styles from "./Review.css";

type Props = {
  reviews: ReviewDto[];
};

const ReviewList = (props: Props) => {
  const { reviews } = props;

  return (
    <div className={styles.ReviewList}>
      {reviews.map((review) => (
        <ReviewItem review={review} key={review.id} />
      ))}
    </div>
  );
};

export default ReviewList;
