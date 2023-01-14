import React, { useEffect } from "react";
import { Footer } from "../UI/Footer/Footer";
import { Navbar } from "../UI/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import styles from "./styles/homewrapper.module.scss";
import { MotionProvider } from "../Providers/MotionProvider";

export const HomeWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <main className={styles.wrapper}>
      <Navbar />
      <MotionProvider>
        <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
      </MotionProvider>
      <Footer />
    </main>
  );
};
