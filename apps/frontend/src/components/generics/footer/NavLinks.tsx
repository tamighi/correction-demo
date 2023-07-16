import NavLinkButton from "./NavLinkButton";

import styles from "./Footer.css";

const NavLinks = () => {
  return (
    <div className={`${styles.FooterSection} ${styles.FooterLinkSection}`}>
      <NavLinkButton to="/">Home</NavLinkButton>
      <NavLinkButton to="contact">Contact</NavLinkButton>
      <NavLinkButton to="services">Services</NavLinkButton>
      <NavLinkButton to="livredor">Golden Book</NavLinkButton>
      <NavLinkButton to="avis">Review</NavLinkButton>
    </div>
  );
};

export default NavLinks;
