import { CenteredPage } from "../core";
import { Route, Routes } from "react-router-dom";

import ServiceDetails from "./ServiceDetails";
import ServiceMain from "./ServiceMain";

const ServicePage = () => {
  return (
    <CenteredPage>
      <Routes>
        <Route path="" element={<ServiceMain />} />
        <Route path=":id" element={<ServiceDetails />} />
      </Routes>
    </CenteredPage>
  );
};
export default ServicePage;
