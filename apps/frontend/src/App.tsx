import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import {
  ContactPage,
  ErrorPage,
  GoldenBookPage,
  HomePage,
  ReviewPage,
  ServicePage,
} from "pages";

import { Appbar, Background, Footer } from "components";

import styles from "./App.css";
import "./Global.css";

export const App = () => {
  const location = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, route] = location.pathname.split("/");

  return (
    <div className={styles.App}>
      <Appbar />
      <Background />
      <AnimatePresence mode="wait">
        <Routes location={location} key={route}>
          <Route path="" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="services/*" element={<ServicePage />} />
          <Route path="livredor" element={<GoldenBookPage />} />
          <Route path="avis" element={<ReviewPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};
