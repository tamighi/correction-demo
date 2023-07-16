import { Paragraph } from "components";
import { Card, useStyles } from "lib";
import { useNavigate } from "react-router-dom";
import { ServiceDto } from "types/service";

import styles from "./Service.css";

const ServiceCard = ({ service }: { service: ServiceDto }) => {
  const navigate = useNavigate();
  const { color } = useStyles({ color: "secondary" });

  return (
    <Card
      className={styles.ServiceCard}
      onClick={() => navigate(`${service.id}`)}
      style={{
        transition: "transform .2s",
        border: `3px solid ${color}`,
      }}
    >
      <h3>{service.name}</h3>
      <Paragraph className={styles.DescriptionClamp}>
        {service.description}
      </Paragraph>
    </Card>
  );
};

export default ServiceCard;
