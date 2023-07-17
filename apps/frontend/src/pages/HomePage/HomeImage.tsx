import React from "react";
import { Loader } from "components";

import portrait from "assets/images/portrait.png";

import styles from "./SlideInLeft.css";

const HomeImage = () => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div
      style={{
        aspectRatio: "2/3",
        width: "70%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        className={styles.slideInLeft}
        src={portrait}
        alt="portrait"
        style={{
          width: "100%",
          objectFit: "contain",
          display: imageLoaded ? "block" : "none",
        }}
        onLoad={() => setImageLoaded(true)}
      />
      {imageLoaded ? null : <Loader />}
    </div>
  );
};

export default HomeImage;
