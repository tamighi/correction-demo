import { Header, MainCard } from "components";
import {
  PendingDevis,
  PendingQuestions,
  PendingReviews,
} from "./PendingMessages";

const Dashboard = () => {
  return (
    <MainCard>
      <Header>
        <h2>Dashboard</h2>
      </Header>
      <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
        <PendingQuestions />
        <PendingReviews />
        <PendingDevis />
      </div>
    </MainCard>
  );
};

export default Dashboard;
