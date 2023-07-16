import AnimatedPage from "./AnimatedPage";

import styles from "./Page.css";

const BasePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.Page}>
      <AnimatedPage>{children}</AnimatedPage>
    </div>
  );
};

export default BasePage;
