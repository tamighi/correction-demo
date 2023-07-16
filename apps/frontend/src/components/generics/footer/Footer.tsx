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
        <Copyright>
          {"Copyright © Thomas Amighi "}
          {new Date().getFullYear()}.
        </Copyright>
      </Paper>
    </div>
  );
};

export default Footer;
