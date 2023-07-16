import { Header } from "components";
import { MessageCard } from "../common";

import DevisList from "./DevisList";

const DevisCard = ({ openDrawer }: { openDrawer: boolean }) => {
  return (
    <MessageCard openDrawer={openDrawer}>
      <Header>
        <h3>Demande de devis</h3>
      </Header>
      <DevisList />
    </MessageCard>
  );
};

export default DevisCard;
