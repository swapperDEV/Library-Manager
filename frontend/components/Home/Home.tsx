import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import { Welcome } from "./Welcome/Welcome";
import { Navbar } from "../UI/Navbar/Navbar";
import { Footer } from "../UI/Footer/Footer";
import { HomeWrapper } from "../Templates/HomeWrapper";

export const Home = () => {
  return (
    <HomeWrapper>
      <>
        <div className={styles.wrapper}>
          <section>
            <header>
              <Welcome />
            </header>
            <aside>
              <Image
                src={"/1727.jpg"}
                width="620"
                height="500"
                alt="book-man"
              />
            </aside>
          </section>
        </div>
      </>
    </HomeWrapper>
  );
};
