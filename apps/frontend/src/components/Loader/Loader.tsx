import styles from "./Loader.css";

interface LoaderProps {
  size?: "small" | "big";
}

const Loader = (props: LoaderProps) => {
  const { size = "big" } = props;
  return (
    <div className={size === "small" ? styles.SmallLoader : styles.Loader} />
  );
};

export default Loader;
