import React from "react";

import { Button } from "lib";

import { CenteredPage } from "../core";
import { Title } from "components";

import ReviewList from "./ReviewList";
import { reviews } from "../../constants";

const reviewPerPage = 5;

const GoldenBookPage = () => {
  const [page, setPage] = React.useState(1);

  const indexOfLastReview = page * reviewPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <CenteredPage>
      <Title>Golden Book</Title>
      <>
        <ReviewList reviews={currentReviews} />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "12px",
          }}
        >
          <Button
            onClick={() => setPage((prevPage) => prevPage - 1)}
            disabled={page <= 1}
          >
            Prev
          </Button>
          <span>Page {page}</span>
          <Button
            onClick={() => setPage((prevPage) => prevPage + 1)}
            disabled={page === Math.ceil(reviews.length / reviewPerPage)}
          >
            Next
          </Button>
        </div>
      </>
    </CenteredPage>
  );
};

export default GoldenBookPage;
