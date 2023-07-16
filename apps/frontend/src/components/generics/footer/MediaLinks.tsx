import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./MediaIcons";

import styles from "./Footer.css";

const MediaLinks = () => {
  return (
    <div className={`${styles.FooterSection} ${styles.FooterMediaSection}`}>
      <FacebookIcon />
      <InstagramIcon />
      <LinkedinIcon />
    </div>
  );
};

export default MediaLinks;
