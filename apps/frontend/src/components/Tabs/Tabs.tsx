import styles from "./styles.css";

const Tabs = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.Tabs}>{children}</div>;
};

export default Tabs;
