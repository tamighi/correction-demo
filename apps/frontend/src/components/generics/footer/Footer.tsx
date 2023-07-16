import { Divider, Paper } from "lib";
import { Copyright } from "components/typography";

import MediaLinks from "./MediaLinks";
import NavLinks from "./NavLinks";

import styles from "./Footer.css";

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <Divider />
      <Paper className={styles.Footer}>
        <MediaLinks />
        <NavLinks />
        <a
          href="https://github.com/tamighi/correction-service-website"
          target="_blank"
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Copyright>
            {"Copyright © Thomas Amighi "}
            {new Date().getFullYear()}.
          </Copyright>
        </a>
      </Paper>
    </div>
  );
};

export default Footer;
