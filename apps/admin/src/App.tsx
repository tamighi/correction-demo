import React from "react";
import { Route, Routes } from "react-router-dom";

import { Appbar, Sidebar } from "components";

import {
  Dashboard,
  DevisPage,
  QuestionPage,
  ReviewPage,
  ServiceCreate,
  ServiceEdit,
  ServicePage,
  ErrorPage,
} from "pages";

import styles from "./App.css";
import "./Global.css";

export const App = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false);

  const toggleOpen = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <div className={styles.App}>
      <Appbar toggleSideBar={toggleOpen} />
      <main className={styles.Main}>
        <Sidebar open={openSidebar} toggleSideBar={toggleOpen} />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route
            path="service/*"
            element={
              <Routes>
                <Route path="" element={<ServicePage />} />
                <Route path=":id" element={<ServiceEdit />} />
                <Route path="create" element={<ServiceCreate />} />
              </Routes>
            }
          />
          <Route path="question/*" element={<QuestionPage />} />
          <Route path="devis/*" element={<DevisPage />} />
          <Route path="review/*" element={<ReviewPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
};
