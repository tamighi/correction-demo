import React from "react";

import { CenteredPage } from "../core";
import { Tab, Tabs, Title } from "components";

import DevisContactForm from "./DevisContactForm";
import QuestionContactForm from "./QuestionContactForm";

const ContactPage = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <CenteredPage>
      <Title>Contact</Title>
      <Tabs>
        <Tab active={tab === 0} onClick={() => setTab(0)}>
          Information
        </Tab>
        <Tab active={tab === 1} onClick={() => setTab(1)}>
          Devis
        </Tab>
      </Tabs>
      {tab === 0 && <QuestionContactForm />}
      {tab === 1 && <DevisContactForm />}
    </CenteredPage>
  );
};

export default ContactPage;
