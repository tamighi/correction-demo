import portrait from "assets/images/portrait.png";

import styles from "./SlideInLeft.css";

const HomeImage = () => {
  return (
    <img
      className={styles.slideInLeft}
      src={portrait}
      alt="portrait"
      style={{
        width: "70%",
        objectFit:"contain"
      }}
    />
  );
};

export default HomeImage;
