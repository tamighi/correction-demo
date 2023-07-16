import styles from "./PendingMessages.css";

interface PendingMessageHeaderProps {
  Icon: React.FC;
  title: string;
}

const PendingMessageHeader = (props: PendingMessageHeaderProps) => {
  const { Icon, title } = props;
  return (
    <div className={styles.PendingMessagesHeader}>
      <Icon />
      <h2 style={{ textAlign: "right" }}>{title}</h2>
    </div>
  );
};

export default PendingMessageHeader;
