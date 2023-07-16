import styles from "./Typography.css";

const Copyright = ({ children }: { children: React.ReactNode }) => {
  return <span className={styles.Copyright}>{children}</span>;
};

export default Copyright;
