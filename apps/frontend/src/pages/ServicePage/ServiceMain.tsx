import { Paragraph, Title } from "components";
import { services } from "../../constants";

import ServiceCard from "./ServiceCard";

const ServiceMain = () => {
  return (
    <>
      <Title>Our services</Title>
      <Paragraph>
        Engaging a proofreading and editing service naturally involves budget
        allocation. However, you will quickly realize that this expense is
        minimal compared to the work involved and the quality guarantees
        provided. In summary, opting for such a service means giving yourself
        the means to enhance a document at a low cost while maximizing its added
        value. In short, you won't regret it! Still hesitating? Request a sample
        proofreading to see firsthand what it can bring you. Unless, of course,
        you're looking for assistance with your writing efforts.
        <br />
        <br /> Click on a service below to view the proposed rates.
      </Paragraph>
      <div style={{display:"flex", flexDirection: "column", gap: "14px"}}>
        {services.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </div>
    </>
  );
};

export default ServiceMain;
