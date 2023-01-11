import React from "react";
import { Footer } from "../UI/Footer/Footer";
import { Navbar } from "../UI/Navbar/Navbar";
import { HomeWrapper } from "../Templates/HomeWrapper";
import styles from "./about.module.scss";
export const About = () => {
  return (
    <HomeWrapper>
      <section className={styles.wrapper}></section>
    </HomeWrapper>
  );
};
