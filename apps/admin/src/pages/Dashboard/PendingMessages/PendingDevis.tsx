import { useGetList } from "hooks";
import { Card, Divider, MessageIcon } from "lib";
import { useNavigate } from "react-router-dom";

import PendingMessageHeader from "./PendingMessageHeader";

import styles from "./PendingMessages.css";

const PendingDevis = () => {
  const navigate = useNavigate();
  const { data } = useGetList<"devis">("devis", {
    filter: {
      status: "pending",
    },
    range: [0, 2],
  });

  return (
    <Card className={styles.PendingMessagesCard}>
      <PendingMessageHeader Icon={MessageIcon} title="Devis en attente" />
      <Divider />
      {data && data.data.length > 0 ? (
        data.data.map((devis) => {
          return (
            <div
              key={devis.name}
              className={styles.PendingMessage}
              onClick={() => navigate(`/devis/${devis.id}`)}
            >
              <p className={styles.PendingMessageTitle}>{devis.name}</p>
              <p className={styles.PendingMessageText}>{devis.message}</p>
            </div>
          );
        })
      ) : (
        <p>Aucune demande de devis en attente</p>
      )}
    </Card>
  );
};

export default PendingDevis;
