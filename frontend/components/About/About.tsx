import React from "react";
import { Footer } from "../UI/Footer/Footer";
import { Navbar } from "../UI/Navbar/Navbar";
import { HomeWrapper } from "../Templates/HomeWrapper";
import styles from "./about.module.scss";
import { Article } from "../UI/Article/Article";
export const About = () => {
  return (
    <HomeWrapper>
      <section className={styles.wrapper}>
        <header>
          <p>Who we are?</p>
          <div className={styles.line}></div>
        </header>
        <Article />
        <Article />
        <Article />
        <Article />
      </section>
    </HomeWrapper>
  );
};
