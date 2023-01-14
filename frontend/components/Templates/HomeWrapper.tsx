import React, { useEffect } from "react";
import { Footer } from "../UI/Footer/Footer";
import { Navbar } from "../UI/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import styles from "./styles/homewrapper.module.scss";
import { MotionProvider } from "../Providers/MotionProvider";
import useDarkMode from "../../utils/hooks/useTheme";

export const HomeWrapper = ({ children }: { children: JSX.Element }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <main
      className={
        isDarkMode ? `${styles.wrapper} dark` : `${styles.wrapper} light`
      }
    >
      <Navbar />
      <MotionProvider>
        <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
      </MotionProvider>
      <Footer />
    </main>
  );
};
